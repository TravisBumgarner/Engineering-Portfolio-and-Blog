#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Paths
const snapshotResourcesDir =
  '/Users/travisbumgarner/Programming/Engineering-Portfolio-and-Blog/frontend/public/snapshot-resources'
const outputJsonPath =
  '/Users/travisbumgarner/Programming/Engineering-Portfolio-and-Blog/frontend/src/content/snapshots/index.json'

// Supported image extensions
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg']

function generateSnapshotsJson() {
  try {
    // Read all files from snapshot-resources directory
    const files = fs.readdirSync(snapshotResourcesDir)

    // Filter for image files and sort them
    const imageFiles = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase()
        return imageExtensions.includes(ext)
      })
      .sort() // Sort alphabetically for consistent output

    // Create the JSON structure
    const snapshots = imageFiles.map((filename) => ({
      src: `/snapshot-resources/${filename}`,
    }))

    // Ensure the output directory exists
    const outputDir = path.dirname(outputJsonPath)
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // Write the JSON file
    fs.writeFileSync(outputJsonPath, JSON.stringify(snapshots, null, 2))

    console.log(`✅ Successfully generated snapshots JSON with ${snapshots.length} images`)
    console.log(`📁 Output: ${outputJsonPath}`)
    console.log(`📸 Images found: ${imageFiles.length}`)
  } catch (error) {
    console.error('❌ Error generating snapshots JSON:', error.message)
    process.exit(1)
  }
}

// Run the function
generateSnapshotsJson()
