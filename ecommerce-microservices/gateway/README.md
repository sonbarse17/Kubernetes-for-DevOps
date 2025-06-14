# API Gateway Documentation

## Overview
The API Gateway serves as the entry point for all client requests in the e-commerce microservices architecture. It routes requests to the appropriate microservices, handles authentication, and aggregates responses.

## Setup Instructions
1. Navigate to the `gateway` directory.
2. Install dependencies by running:
   ```
   npm install
   ```
3. Create a `.env` file based on the `.env.example` file provided in the root directory.

## Running the Gateway
To start the API Gateway, use the following command:
```
npm start
```
Alternatively, you can run it using TypeScript directly:
```
ts-node src/index.ts
```

## Routing Information
The API Gateway routes requests to the following services:
- **Auth Service**: Handles user authentication.
- **Product Service**: Manages product listings and details.
- **Order Service**: Processes customer orders.
- **User Service**: Manages user profiles and information.

Each service can be accessed through the gateway at the following endpoints:
- `/auth`: Routes to the Auth Service
- `/products`: Routes to the Product Service
- `/orders`: Routes to the Order Service
- `/users`: Routes to the User Service

## Deployment
For local deployment, follow the instructions provided in the root `README.md`.

For Docker deployment, ensure Docker and Docker Compose are installed, then run:
```
docker-compose up --build
```
Access the API Gateway at `http://localhost:3000`.