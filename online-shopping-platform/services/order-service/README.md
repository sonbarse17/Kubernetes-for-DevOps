# Order Service Documentation

## Overview
The Order Service is a microservice responsible for managing customer orders in the e-commerce application. It handles order creation, retrieval, updating, and deletion.

## Tech Stack
- Node.js
- TypeScript
- Express
- MongoDB (or any other database)

## Setup Instructions
1. Clone the repository.
2. Navigate to the `order-service` directory.
3. Run `npm install` to install the necessary dependencies.
4. Create a `.env` file based on the `.env.example` file provided in the root directory.
5. Start the service using `npm start` or `ts-node src/index.ts`.

## API Endpoints
- **POST /orders**: Create a new order.
- **GET /orders/:id**: Retrieve an order by ID.
- **PUT /orders/:id**: Update an existing order.
- **DELETE /orders/:id**: Delete an order by ID.

## Ports Used
- The Order Service runs on port **3003**.

## Deployment
### Local Deployment
Follow the setup instructions above to run the service locally.

### Docker Deployment
1. Ensure Docker and Docker Compose are installed.
2. Navigate to the root of the project.
3. Run `docker-compose up --build` to build and start all services, including the Order Service.
4. Access the Order Service through the API Gateway at `http://localhost:3000/orders`.