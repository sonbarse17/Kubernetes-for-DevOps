# Authentication Service

This is the authentication service for the e-commerce application. It handles user authentication, including registration, login, and token management.

## Setup Instructions

1. **Clone the repository**: Ensure you have the main e-commerce repository cloned to your local machine.
2. **Install dependencies**: Navigate to the `auth-service` directory and run:
   ```
   npm install
   ```
3. **Environment Variables**: Create a `.env` file in the `auth-service` directory based on the `.env.example` file. Ensure to set the necessary environment variables for database connection and JWT secret.
4. **Start the service**: You can start the authentication service using:
   ```
   npm start
   ```
   or
   ```
   ts-node src/index.ts
   ```

## API Endpoints

- **POST /auth/register**: Register a new user.
  - Request body: `{ "username": "string", "password": "string" }`
  
- **POST /auth/login**: Authenticate a user and return a JWT token.
  - Request body: `{ "username": "string", "password": "string" }`
  
- **GET /auth/profile**: Get the authenticated user's profile (requires JWT).
  - Headers: `Authorization: Bearer <token>`

## Tech Stack

- Node.js
- TypeScript
- Express
- MongoDB (or any other database)
- Docker
- Docker Compose

## Ports Used

- Auth Service: 3001

## Instructions to Deploy Locally

1. Clone the repository.
2. Navigate to the `auth-service` directory and run `npm install` to install dependencies.
3. Create a `.env` file in the `auth-service` directory based on the `.env.example` file.
4. Start the service using `npm start` or `ts-node src/index.ts`.

## Instructions to Deploy Using Docker

1. Ensure Docker and Docker Compose are installed.
2. Navigate to the root of the project.
3. Run `docker-compose up --build` to build and start all services and the gateway.
4. Access the API Gateway at `http://localhost:3000`.