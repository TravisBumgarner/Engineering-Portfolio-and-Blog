import { readdir, readFile, stat, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { encode } from 'blurhash'
import { createCanvas, type Image, loadImage } from 'canvas'
import type { Plugin, ViteDevServer } from 'vite'

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp'])

function isImage(file: string) {
  const ext = file.slice(file.lastIndexOf('.')).toLowerCase()
  return IMAGE_EXTENSIONS.has(ext)
}

async function encodeImageToBlurHash(filePath: string) {
  const image: Image = await loadImage(filePath)
  const canvas = createCanvas(image.width, image.height)
  const ctx = canvas.getContext('2d')
  ctx.drawImage(image, 0, 0)
  const imageData = ctx.getImageData(0, 0, image.width, image.height)
  return {
    blurHash: encode(imageData.data, imageData.width, imageData.height, 4, 4),
    width: image.width,
    height: image.height,
  }
}

type BlurHashMap = Record<string, { blurHash: string; width: number; height: number }>

async function walkDir(dir: string): Promise<string[]> {
  const results: string[] = []
  const entries = await readdir(dir)
  for (const entry of entries) {
    const filePath = join(dir, entry)
    const s = await stat(filePath)
    if (s.isDirectory()) {
      results.push(...(await walkDir(filePath)))
    } else if (s.isFile() && isImage(entry)) {
      results.push(filePath)
    }
  }
  return results
}

export function blurhashPlugin(publicDir: string, outputFile: string): Plugin {
  let cache: BlurHashMap = {}

  async function loadCache() {
    try {
      const data = await readFile(outputFile, 'utf-8')
      cache = JSON.parse(data)
    } catch {
      cache = {}
    }
  }

  async function processImage(filePath: string, force = false): Promise<boolean> {
    const relativePath = filePath.replace(publicDir, '')
    if (!force && cache[relativePath]) return false

    console.log(`[blurhash] Processing: ${relativePath}`)
    const result = await encodeImageToBlurHash(filePath)
    cache[relativePath] = result
    return true
  }

  async function writeOutput() {
    await writeFile(outputFile, JSON.stringify(cache, null, 2))
  }

  async function fullScan() {
    await loadCache()
    const images = await walkDir(publicDir)
    let changed = 0

    for (const img of images) {
      if (await processImage(img)) changed++
    }

    // Remove entries for deleted images
    const currentPaths = new Set(images.map((img) => img.replace(publicDir, '')))
    for (const key of Object.keys(cache)) {
      if (!currentPaths.has(key)) {
        delete cache[key]
        console.log(`[blurhash] Removed: ${key}`)
        changed++
      }
    }

    if (changed > 0) {
      await writeOutput()
      console.log(`[blurhash] Updated ${changed} entries`)
    } else {
      console.log('[blurhash] All images up to date')
    }
  }

  return {
    name: 'vite-plugin-blurhash',

    async buildStart() {
      await fullScan()
    },

    configureServer(server: ViteDevServer) {
      const watcher = server.watcher

      async function handleFile(filePath: string) {
        if (!filePath.startsWith(publicDir) || !isImage(filePath)) return

        try {
          if (await processImage(filePath, true)) {
            await writeOutput()
          }
        } catch (err) {
          console.error(`[blurhash] Error processing ${filePath}:`, err)
        }
      }

      async function handleUnlink(filePath: string) {
        if (!filePath.startsWith(publicDir) || !isImage(filePath)) return
        const relativePath = filePath.replace(publicDir, '')
        if (cache[relativePath]) {
          delete cache[relativePath]
          await writeOutput()
          console.log(`[blurhash] Removed: ${relativePath}`)
        }
      }

      watcher.on('add', handleFile)
      watcher.on('change', handleFile)
      watcher.on('unlink', handleUnlink)
    },
  }
}
