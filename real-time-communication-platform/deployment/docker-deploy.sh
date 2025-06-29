#!/bin/bash

# Build Docker images for each service
docker build -t comm-app/auth-service ./service-auth
docker build -t comm-app/chat-service ./service-chat
docker build -t comm-app/notification-service ./service-notification

# Start the services using Docker Compose
docker-compose up -d

# Display the status of the running containers
docker ps

# Instructions for accessing the services
echo "Services are running:"
echo "Auth Service: http://localhost:5000"
echo "Chat Service: http://localhost:5001"
echo "Notification Service: http://localhost:5002"