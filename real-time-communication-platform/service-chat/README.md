# Communication Application - Chat Service

## Overview
The Chat Service is a microservice responsible for handling chat-related functionalities within the communication application. It provides RESTful APIs for sending and receiving messages, managing chat rooms, and user interactions.

## Tech Stack
- **Programming Language**: C#
- **Framework**: .NET Core
- **Containerization**: Docker
- **Orchestration**: Docker Compose
- **Communication**: REST APIs

## Ports
- The Chat Service runs on port **5001**.

## Setup Instructions
1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   cd comm-app/service-chat
   ```

2. **Build the Project**: 
   Ensure you have the .NET SDK installed. Run the following command to build the project:
   ```bash
   dotnet build
   ```

3. **Run the Service Locally**: 
   You can run the service using the following command:
   ```bash
   dotnet run
   ```
   The service will be accessible at `http://localhost:5001`.

## API Endpoints
- **Send Message**: `POST /api/chat/send`
- **Receive Messages**: `GET /api/chat/messages`
- **Create Chat Room**: `POST /api/chat/room`
- **Get Chat Rooms**: `GET /api/chat/rooms`

## Docker Instructions
1. **Build the Docker Image**: 
   Navigate to the `service-chat` directory and run:
   ```bash
   docker build -t service-chat .
   ```

2. **Run the Docker Container**: 
   After building the image, you can run the container using:
   ```bash
   docker run -p 5001:80 service-chat
   ```

## Deployment
To deploy the Chat Service along with other microservices, you can use Docker Compose. 

1. **Start All Services**: 
   From the root of the project, run:
   ```bash
   docker-compose up
   ```
   This will start all microservices defined in the `docker-compose.yml` file.

2. **Access the Service**: 
   Once the services are running, you can access the Chat Service at `http://localhost:5001`.

## Conclusion
This README provides the necessary information to set up and run the Chat Service within the communication application. For further details on other services, please refer to their respective README files.