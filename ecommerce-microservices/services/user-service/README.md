# User Service Documentation

## Overview
The User Service is a microservice responsible for managing user-related operations in the e-commerce application. It provides endpoints for user registration, login, and profile management.

## Tech Stack
- Node.js
- TypeScript
- Express
- MongoDB (or any other database)

## Ports Used
- User Service: 3004

## Setup Instructions
1. Navigate to the `user-service` directory.
2. Run `npm install` to install the necessary dependencies.
3. Create a `.env` file based on the `.env.example` file provided in the root directory.
4. Start the service using `npm start` or `ts-node src/index.ts`.

## API Endpoints
- **POST /users/register**: Register a new user.
- **POST /users/login**: Authenticate a user and return a token.
- **GET /users/profile**: Retrieve the profile of the authenticated user.

## Deployment
### Locally
Follow the setup instructions above to run the service locally.

### Using Docker
1. Ensure Docker and Docker Compose are installed.
2. Navigate to the root of the project.
3. Run `docker-compose up --build` to build and start all services, including the User Service.
4. Access the User Service through the API Gateway at `http://localhost:3000/users`.

## Notes
Make sure to handle environment variables securely and follow best practices for user authentication and data management.