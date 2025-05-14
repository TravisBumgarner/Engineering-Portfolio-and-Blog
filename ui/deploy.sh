#!/bin/bash

# Define variables
REMOTE_DIR="/home/protected"
REPO_URL="https://github.com/travisBumgarner/engineering-Portfolio-and-Blog.git"
TEMP_DIR="/tmp/portfolio-build"
BRANCH="master"

DEPLOY_SERVER_HOST="nfs_eng41"
DEPLOY_SERVER_USER="tbumgarner_eng41"

# Execute remote commands
echo "Starting remote deployment..."
ssh $DEPLOY_SERVER_USER@$DEPLOY_SERVER_HOST "
    # Clean up any existing temp directory
    echo 'Cleaning up any existing temp directory...'
    rm -rf $TEMP_DIR

    # Clone the repository
    echo 'Cloning repository...'
    git clone $REPO_URL $TEMP_DIR

    # Change to the ui directory and install dependencies
    cd $TEMP_DIR/ui
    git checkout $BRANCH

    # Install dependencies and build
    echo 'Installing dependencies...'
    yarn install

    echo 'Building application...'
    yarn run build

    # Move build files to deployment directory
    echo 'Moving files to deployment directory...'

    rm -rf $REMOTE_DIR/*
    rm -rf $REMOTE_DIR/.* 2>/dev/null

    mv .next start-next.sh package.json yarn.lock next.config.mjs public $REMOTE_DIR/

    # Install production dependencies in deployment directory
    cd $REMOTE_DIR
    yarn install --production
    chmod +x start-next.sh

    # Clean up
    echo 'Cleaning up...'
    rm -rf $TEMP_DIR
"

echo "Deployment complete!"