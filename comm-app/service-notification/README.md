# Notification Service

This document provides an overview of the Notification Service within the Communication Application. 

## Overview

The Notification Service is responsible for managing notifications within the application. It handles the creation, retrieval, and management of notifications sent to users.

## Tech Stack

- **Programming Language**: C#
- **Framework**: .NET Core
- **Containerization**: Docker

## Setup Instructions

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/your-repo/comm-app.git
   cd comm-app/service-notification
   ```

2. **Build the Service**: 
   Ensure you have the .NET SDK installed, then run:
   ```bash
   dotnet build
   ```

3. **Run the Service**: 
   You can run the service locally using:
   ```bash
   dotnet run
   ```

   The service will be available at `http://localhost:5002`.

## API Endpoints

- **Create Notification**: 
  - `POST /notifications`
  - Body: `{ "message": "Your notification message" }`
  
- **Get Notifications**: 
  - `GET /notifications`
  
- **Get Notification by ID**: 
  - `GET /notifications/{id}`

## Docker Instructions

To build and run the Notification Service using Docker:

1. **Build the Docker Image**:
   ```bash
   docker build -t notification-service .
   ```

2. **Run the Docker Container**:
   ```bash
   docker run -d -p 5002:80 notification-service
   ```

The service will be accessible at `http://localhost:5002`.

## Local Deployment

To deploy all services locally, run the following script from the root of the project:

```bash
./deployment/local-deployment.sh
```

## Docker Deployment

To deploy all services using Docker, run:

```bash
docker-compose up
```

This will start all services defined in the `docker-compose.yml` file. Access the Notification Service at `http://localhost:5002`.