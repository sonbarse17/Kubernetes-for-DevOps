# E-Commerce Microservices

This project is an e-commerce application built using a microservices architecture. It consists of multiple services that handle different aspects of the application, including authentication, product management, order processing, and user management. The services communicate with each other through an API gateway.

## Tech Stack
- Node.js
- TypeScript
- Express
- MongoDB (or any other database)
- Docker
- Docker Compose

## Services
- **Auth Service**: Handles user authentication and authorization.
- **Product Service**: Manages product listings and details.
- **Order Service**: Processes customer orders and transactions.
- **User Service**: Manages user profiles and information.
- **API Gateway**: Acts as a single entry point for all client requests, routing them to the appropriate service.

## Ports Used
- Auth Service: 3001
- Product Service: 3002
- Order Service: 3003
- User Service: 3004
- API Gateway: 3000

## Instructions to Deploy Locally
1. Clone the repository.
2. Navigate to each service directory and run `npm install` to install dependencies.
3. Create a `.env` file in each service directory based on the `.env.example` file.
4. Start each service using `npm start` or `ts-node src/index.ts`.

## Instructions to Deploy Using Docker
1. Ensure Docker and Docker Compose are installed.
2. Navigate to the root of the project.
3. Run `docker-compose up --build` to build and start all services and the gateway.
4. Access the API Gateway at `http://localhost:3000`.

## Architecture Overview
The application is designed to be scalable and maintainable, with each service responsible for a specific domain. This separation allows for independent development, testing, and deployment of each service.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.