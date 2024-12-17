#!/bin/bash

IMAGE_NAME="next-portfolio"
CONTAINER_NAME="next-portfolio-app"

echo "🏗️  Building Docker image..."
docker build -t $IMAGE_NAME .

echo "🧹 Cleaning up any existing container..."
docker rm -f $CONTAINER_NAME 2>/dev/null || true

echo "🚀 Starting container..."
docker run -d \
    --name $CONTAINER_NAME \
    -p 3000:3000 \
    -e NODE_ENV=production \
    $IMAGE_NAME

echo "⏳ Waiting for application to start..."
sleep 3

echo "✨ Application is now running!"
echo "📱 Visit http://localhost:3000 to view the app"
echo ""
echo "Useful commands:"
echo "- View logs: docker logs -f $CONTAINER_NAME"
echo "- Stop container: docker stop $CONTAINER_NAME"
echo "- Remove container: docker rm $CONTAINER_NAME" 