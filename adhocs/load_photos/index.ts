// biome-ignore-all lint/suspicious/noConsole: Adhoc script.

import fs from 'node:fs'
import path from 'node:path'
import * as exifr from 'exifr'

// const DEBUG = false // to get logs.

type Sidecar = {
  lr: {
    hierarchicalSubject: string | string[]
  }
}

const getProjectId = async (file: string): Promise<string | null> => {
  let {
    lr: { hierarchicalSubject },
  } = (await exifr.sidecar(file)) as unknown as Sidecar
  if (!hierarchicalSubject) return null

  if (!Array.isArray(hierarchicalSubject)) hierarchicalSubject = [hierarchicalSubject]
  console.log(hierarchicalSubject)
  const match = hierarchicalSubject.filter((s) => s.includes('|') && s.includes('EngineeringPortfolio'))[0]
  const projectId = match.replace('EngineeringPortfolio|', '')

  if (!projectId) {
    console.log('\tSkipping for no project Id')
    return null
  }

  return projectId
}

const processPhotos = async () => {
  const files = fs.readdirSync(path.join(__dirname, 'input'))
  const moveActions: [string, string, string][] = []
  let wasFileSkipped = false
  const jsonData: Record<string, { label: string; src: string }[]> = {}

  for (const file of files) {
    const inputPath = path.join(__dirname, 'input')
    const projectId = await getProjectId(path.join(inputPath, file))

    console.log(projectId)
    if (projectId === null) {
      console.log('skipping', file)
      wasFileSkipped = true
    } else {
      if (!(projectId in jsonData)) jsonData[projectId] = []
      jsonData[projectId].push({ src: file, label: '' })
      const outputPath = path.join('output', projectId)
      moveActions.push([inputPath, outputPath, file])
    }
  }
  if (!wasFileSkipped) {
    for (const [oldPath, newPath, file] of moveActions) {
      console.log(oldPath, newPath)
      fs.mkdirSync(newPath, { recursive: true })
      fs.renameSync(path.join(oldPath, file), path.join(newPath, file))
    }
    console.log(JSON.stringify(jsonData))
  } else {
    console.log('cleanup failures and rerun.')
  }
}

processPhotos()
