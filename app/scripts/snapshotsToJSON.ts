import * as fs from 'fs'
import * as path from 'path'

const SNAPSHOTS_DIR = path.join(__dirname, '../public/snapshots')
const OUTPUT_FILE = path.join(__dirname, '../src/snapshots/index.json')

const generateSnapshotsJSON = () => {
  // Read all files in the snapshots directory
  const files = fs.readdirSync(SNAPSHOTS_DIR)

  // Create array of objects with src paths
  const snapshots = files
    .filter(file => file.endsWith('.png') || file.endsWith('.jpg'))
    .map(file => ({
      src: `/snapshots/${file}`
    }))

  // Write to JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(snapshots, null, 2))

  console.log(`Generated snapshots JSON with ${snapshots.length} images`)
}

generateSnapshotsJSON()
