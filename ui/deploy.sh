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
REPO_URL="https://github.com/travisBumgarner/engineering-Portfolio-and-Blog.git"
TEMP_DIR="/tmp/portfolio-build"
BRANCH="nearly-free-speech"

# Execute remote commands
echo "Starting remote deployment..."
ssh $SERVER_USER@$SERVER_HOST "
    # Clean up any existing temp directory
    rm -rf $TEMP_DIR

    # Clone the repository
    echo 'Cloning repository...'
    git clone $REPO_URL $TEMP_DIR

    # Change to the ui directory and install dependencies
    cd $TEMP_DIR/ui
    git checkout $BRANCH

    # Install dependencies and build
    echo 'Installing dependencies...'
    npm install

    echo 'Building application...'
    npm run build

    # Move build files to deployment directory
    echo 'Moving files to deployment directory...'
    rm -rf $REMOTE_DIR/*
    mv .next start-next.sh package.json package-lock.json next.config.mjs public $REMOTE_DIR/

    # Install production dependencies in deployment directory
    cd $REMOTE_DIR
    npm install --production
    chmod +x start-next.sh

    # Clean up
    echo 'Cleaning up...'
    rm -rf $TEMP_DIR
"

echo "Deployment complete!"