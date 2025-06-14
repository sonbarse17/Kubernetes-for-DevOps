#!/bin/bash

# Navigate to the service directories and build the Docker images
echo "Building Docker images for all services..."

# Build the authentication service
cd service-auth
docker build -t comm-app-auth .

# Build the chat service
cd ../service-chat
docker build -t comm-app-chat .

# Build the notification service
cd ../service-notification
docker build -t comm-app-notification .

# Navigate back to the root directory
cd ..

# Start the services using Docker Compose
echo "Starting services using Docker Compose..."
docker-compose up -d

# Wait for services to start
echo "Waiting for services to start..."
sleep 10

# Display the status of the services
echo "Services are up and running!"
echo "Access the services at the following URLs:"
echo "Authentication Service: http://localhost:5000"
echo "Chat Service: http://localhost:5001"
echo "Notification Service: http://localhost:5002"