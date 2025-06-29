# Authentication Service Documentation

## Overview
The Authentication Service is a microservice responsible for managing user authentication and authorization within the communication application. It provides endpoints for user registration, login, and token management.

## Tech Stack
- **Programming Language**: C#
- **Framework**: .NET Core
- **Containerization**: Docker

## Ports
- The Authentication Service runs on port **5000**.

## Setup Instructions
1. Ensure you have the .NET Core SDK installed on your machine.
2. Clone the repository and navigate to the `service-auth` directory.
3. Restore the dependencies by running:
   ```
   dotnet restore
   ```
4. Build the application:
   ```
   dotnet build
   ```
5. Run the application:
   ```
   dotnet run
   ```
6. Access the service at `http://localhost:5000`.

## API Endpoints
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Authenticate a user and return a token.
- **GET /api/auth/refresh**: Refresh the authentication token.

## Deployment
### Local Deployment
To deploy the service locally, run the following script:
```
./deployment/local-deployment.sh
```

### Docker Deployment
To deploy the service using Docker, follow these steps:
1. Build the Docker image:
   ```
   docker build -t service-auth .
   ```
2. Run the Docker container:
   ```
   docker run -p 5000:5000 service-auth
   ```

## Notes
- Ensure that the other microservices are running to fully test the authentication flow.
- For more information on the overall architecture and other services, refer to the main README.md file in the project root.