# User Service Documentation

## Overview
The User Service is a microservice responsible for managing user data within the Agile Accounting Application. It provides RESTful APIs for user registration, authentication, and profile management.

## Tech Stack
- **Node.js**: JavaScript runtime for building the service.
- **Express.js**: Web framework for creating the RESTful API.
- **MongoDB/PostgreSQL**: Database for storing user information (choose based on your setup).
- **Docker**: For containerization of the service.

## Ports
- The User Service runs on port **3004**.

## Setup Instructions
1. Navigate to the `user-service` directory:
   ```
   cd services/user-service
   ```
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the service:
   ```
   npm start
   ```

## Docker Deployment
To deploy the User Service using Docker:
1. Ensure you are in the root directory of the project.
2. Build and start the service using Docker Compose:
   ```
   docker-compose up --build
   ```

## API Endpoints
- **POST /users/register**: Register a new user.
- **POST /users/login**: Authenticate a user.
- **GET /users/:id**: Retrieve user profile by ID.
- **PUT /users/:id**: Update user profile by ID.

## Notes
- Ensure that the database is properly configured and running before starting the service.
- Refer to the main project documentation for additional setup and configuration details.