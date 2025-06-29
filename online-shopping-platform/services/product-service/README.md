# Product Service Documentation

## Overview
The Product Service is a microservice responsible for managing products in the e-commerce application. It provides endpoints to create, read, update, and delete products.

## Tech Stack
- Node.js
- TypeScript
- Express
- MongoDB (or any other database)

## Ports Used
- Product Service: 3002

## Setup Instructions
1. Clone the repository.
2. Navigate to the `product-service` directory.
3. Run `npm install` to install dependencies.
4. Create a `.env` file based on the `.env.example` file.
5. Start the service using `npm start` or `ts-node src/index.ts`.

## API Endpoints
- `GET /products`: Retrieve a list of all products.
- `GET /products/:id`: Retrieve a specific product by ID.
- `POST /products`: Create a new product.
- `PUT /products/:id`: Update an existing product by ID.
- `DELETE /products/:id`: Delete a product by ID.

## Deployment Instructions
### Locally
1. Ensure MongoDB is running.
2. Follow the setup instructions above to run the service locally.

### Using Docker
1. Ensure Docker and Docker Compose are installed.
2. Navigate to the root of the project.
3. Run `docker-compose up --build` to build and start all services, including the Product Service.
4. Access the Product Service through the API Gateway at `http://localhost:3000/products`.