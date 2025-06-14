# Inventory Management Application

This is an inventory management application built using a microservices architecture. The application consists of multiple services that handle different aspects of inventory management, including product management, order processing, and user management. An API gateway is used to route requests to the appropriate microservices.

## Project Structure

```
inventory-management-app
├── services
│   ├── product-service
│   ├── order-service
│   └── user-service
├── api-gateway
├── docker-compose.yml
├── README.md
└── architecture-diagram.png
```

## Microservices

1. **Product Service**
   - Manages product information.
   - Entry point: `services/product-service/src/index.ts`
   - Dockerfile: `services/product-service/Dockerfile`
   - Dependencies: `services/product-service/package.json`

2. **Order Service**
   - Handles order processing.
   - Entry point: `services/order-service/src/index.ts`
   - Dockerfile: `services/order-service/Dockerfile`
   - Dependencies: `services/order-service/package.json`

3. **User Service**
   - Manages user accounts and authentication.
   - Entry point: `services/user-service/src/index.ts`
   - Dockerfile: `services/user-service/Dockerfile`
   - Dependencies: `services/user-service/package.json`

4. **API Gateway**
   - Routes requests to the appropriate microservices.
   - Entry point: `api-gateway/src/index.ts`
   - Dockerfile: `api-gateway/Dockerfile`
   - Dependencies: `api-gateway/package.json`

## Tech Stack

- **Programming Language**: TypeScript
- **Framework**: Express.js (for building RESTful APIs)
- **Database**: MongoDB (or any other database of choice)
- **Containerization**: Docker
- **Orchestration**: Docker Compose

## Ports Used

- Product Service: `3001`
- Order Service: `3002`
- User Service: `3003`
- API Gateway: `3000`

## Deployment Instructions

### Local Deployment

1. Clone the repository:
   ```
   git clone <repository-url>
   cd inventory-management-app
   ```

2. Install dependencies for each service:
   ```
   cd services/product-service
   npm install
   cd ../order-service
   npm install
   cd ../user-service
   npm install
   cd ../../api-gateway
   npm install
   ```

3. Start each service individually:
   ```
   cd services/product-service
   npm start
   ```

   Repeat for order-service and user-service in their respective directories.

4. Start the API gateway:
   ```
   cd api-gateway
   npm start
   ```

### Docker Deployment

1. Build the Docker images:
   ```
   docker-compose build
   ```

2. Start the services using Docker Compose:
   ```
   docker-compose up
   ```

3. Access the API Gateway at `http://localhost:3000`.

## Architecture Diagram

Refer to `architecture-diagram.png` for a visual representation of the architecture and how the microservices interact with each other and the API gateway.

## License

This project is licensed under the MIT License.