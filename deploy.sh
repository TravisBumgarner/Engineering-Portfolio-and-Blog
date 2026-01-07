#!/bin/bash
set -euo pipefail

REMOTE="nfs_eng41"
REMOTE_DIR="/home/protected"

echo "🧱 Building React project locally..."
npm ci
npm run build

echo "🚀 Syncing build to NearlyFreeSpeech..."
rsync -azP --delete \
  --exclude='.next/cache' \
  --exclude='node_modules' \
  --exclude='.npm' \
  package.json package-lock.json next.config.mjs start-next.sh public .next \
  "$REMOTE:$REMOTE_DIR/"

echo "📦 Installing production dependencies remotely..."
ssh "$REMOTE" "
  set -euo pipefail
  cd $REMOTE_DIR

  echo '🧹 Cleaning previous node_modules...'
  find node_modules -mindepth 1 -maxdepth 1 -exec rm -rf {} + 2>/dev/null || true
  mkdir -p node_modules

  echo '📦 Installing production dependencies (skipping optional deps like Sentry CLI)...'
  npm ci --omit=dev --omit=optional

  chmod +x start-next.sh
"

echo "✅ Deployment complete!"
