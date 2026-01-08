// biome-ignore-all lint/suspicious/noConsole: Adhoc script.

import { readdir, stat, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { encodeImageToBlurHash } from './blur-hash'

const CACHE_FILE = '/Users/travisbumgarner/Programming/Engineering-Portfolio-and-Blog/ui/content/blurhashes/index.json'
const PHOTO_PATH = '/Users/travisbumgarner/Programming/Engineering-Portfolio-and-Blog/ui/public'
const OUTPUT_FILE = '/Users/travisbumgarner/Programming/Engineering-Portfolio-and-Blog/ui/content/blurhashes/index.json'
const cache = require(CACHE_FILE)

const processImages = async (
  dir: string,
  output: Record<string, { blurHash: string; width: number; height: number }>,
) => {
  const files = await readdir(dir)
  for (const file of files) {
    const filePath = join(dir, file)
    const fileStat = await stat(filePath)
    const isValidPhoto =
      file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg') || file.endsWith('.webp')
    if (fileStat.isDirectory()) {
      await processImages(filePath, output)
    } else if (fileStat.isFile() && isValidPhoto) {
      process.stdout.write('P->')
      const relativePath = filePath.replace(PHOTO_PATH, '')

      // Check if the image is in the cache
      if (cache[relativePath]) {
        process.stdout.write('Cache ')
        output[relativePath] = cache[relativePath]
        continue
      } else {
        process.stdout.write('New ')
      }

      const { blurHash, width, height } = await encodeImageToBlurHash(filePath)
      if (output[relativePath]) {
        console.error('Duplicate file path:', relativePath)
        process.exit(1)
      }

      output[relativePath] = { blurHash, width, height }
    } else {
      console.error('Skipping:', filePath)
    }
  }
}

const main = () => {
  const output: Record<string, { blurHash: string; width: number; height: number }> = {}
  processImages(PHOTO_PATH, output)
    .then(() => writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2)))
    .then(() => console.log('Done!'))
    .catch((err) => console.error(err))
}
main()
