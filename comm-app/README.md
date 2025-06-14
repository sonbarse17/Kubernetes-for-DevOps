# Communication Application

## Overview
This project is a communication application built using a microservices architecture. It consists of three main services: Authentication, Chat, and Notification. Each service is developed using C# and .NET Core, and they communicate with each other through REST APIs. The application is containerized using Docker and orchestrated with Docker Compose.

## Tech Stack
- **Programming Language**: C#
- **Framework**: .NET Core
- **Containerization**: Docker
- **Orchestration**: Docker Compose
- **Communication**: REST APIs

## Microservices
1. **Service Auth**
   - Port: 5000
   - Responsible for user authentication and authorization.

2. **Service Chat**
   - Port: 5001
   - Manages chat functionalities, including sending and receiving messages.

3. **Service Notification**
   - Port: 5002
   - Handles notifications for users, such as message alerts.

## Project Structure
```
comm-app
├── service-auth
│   ├── src
│   │   └── Program.cs
│   ├── Dockerfile
│   └── README.md
├── service-chat
│   ├── src
│   │   └── Program.cs
│   ├── Dockerfile
│   └── README.md
├── service-notification
│   ├── src
│   │   └── Program.cs
│   ├── Dockerfile
│   └── README.md
├── deployment
│   ├── local-deployment.sh
│   └── docker-deploy.sh
├── docker-compose.yml
└── README.md
```

## Deployment Instructions

### Deploy Locally
1. Navigate to the `deployment` directory.
2. Run the `local-deployment.sh` script to start the services.
3. Access the services via their respective ports:
   - Auth Service: `http://localhost:5000`
   - Chat Service: `http://localhost:5001`
   - Notification Service: `http://localhost:5002`

### Deploy Using Docker
1. Ensure Docker is installed and running on your machine.
2. In the root directory of the project, run the following command to build and start all services:
   ```
   docker-compose up
   ```
3. Access the services via their respective ports as mentioned above.

## Conclusion
This communication application provides a robust framework for building scalable and maintainable microservices. Each service is independently deployable and can be scaled according to the application's needs.