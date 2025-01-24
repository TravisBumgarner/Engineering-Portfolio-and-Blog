#!/bin/bash

# Load environment variables from .env file
if [ -f .env.nfs ]; then
    export $(cat .env.nfs | grep -v '#' | xargs)
else
    echo "Error: .env.nfs file not found"
    exit 1
fi

# Define variables
SERVER_USER="${DEPLOY_SERVER_USER}"
SERVER_HOST="${DEPLOY_SERVER_HOST}"
REMOTE_DIR="/home/private"
LOCAL_BUILD_DIR=".next"
NODE_VERSION="18"

# Build the Next.js app locally
echo "Building the Next.js app..."
npm run build

# Create or update .nvmrc file on server
echo "Setting up Node.js environment..."
ssh $SERVER_USER@$SERVER_HOST "echo $NODE_VERSION > $REMOTE_DIR/.nvmrc"

# Delete existing private directory on server
echo "Cleaning up existing deployment..."
ssh $SERVER_USER@$SERVER_HOST "rm -rf $REMOTE_DIR/*"

# Upload the build files
echo "Uploading build to the server..."
scp -r $LOCAL_BUILD_DIR start-next.sh package.json package-lock.json next.config.mjs public $SERVER_USER@$SERVER_HOST:$REMOTE_DIR

# # Setup and start the application
echo "Setting up the application..."
ssh $SERVER_USER@$SERVER_HOST "cd $REMOTE_DIR && npm install --production && chmod +x start-next.sh"

echo "Deployment complete!"