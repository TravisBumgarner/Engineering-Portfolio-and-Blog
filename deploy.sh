#!/bin/bash
set -euo pipefail

REMOTE="nfs_eng_test"
REMOTE_DIR="/home/protected"

echo "🧱 Building project locally..."
npm install

# Build common, frontend, and server
echo "📦 Building common dependencies..."
npm --workspace=common run build

echo "🎨 Building frontend (React/Vite)..."
npm --workspace=frontend run build

echo "🖥️ Building server (TypeScript)..."
npm --workspace=server run build

echo "🚀 Syncing build to NearlyFreeSpeech..."
rsync -azPh --delete \
  --timeout=300 \
  --exclude='node_modules' \
  --exclude='.npm' \
  --exclude='src' \
  --exclude='tsconfig.json' \
  --exclude='nodemon.json' \
  --exclude='vite.config.ts' \
  --exclude='*.md' \
  --exclude='.git*' \
  server/package.json server/dist server/src/frontend-dist server/run.sh common \
  "$REMOTE:$REMOTE_DIR/"

echo "📦 Installing production dependencies remotely..."
ssh "$REMOTE" "
  set -euo pipefail
  cd $REMOTE_DIR

  echo '🔧 Fixing common package path in package.json...'
  sed -i '' 's|file:../common|file:./common|g' package.json

  echo '🧹 Cleaning previous node_modules...'
  find node_modules -mindepth 1 -maxdepth 1 -exec rm -rf {} + 2>/dev/null || true
  mkdir -p node_modules

  echo '📦 Installing production dependencies...'
  npm install --omit=dev --omit=optional

  echo '🔧 Setting proper permissions...'
  chmod -R 755 dist
  chmod -R 755 frontend-dist
  chmod +x run.sh
"

echo "✅ Deployment complete!"
echo "🌐 Your server should now be serving the frontend from the built assets"
