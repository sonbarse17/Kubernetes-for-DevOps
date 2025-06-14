# Project: CRM Microservices

## Overview
This project is a CRM application designed with an API-First approach, utilizing multiple microservices to handle different aspects of the CRM functionality. The architecture is built to be scalable, maintainable, and easy to deploy.

## Architecture
The application consists of the following microservices:
- **API Gateway**: Acts as a single entry point for all client requests and routes them to the appropriate microservices.
- **Auth Service**: Manages user authentication and authorization.
- **Customer Service**: Handles customer-related operations.
- **Order Service**: Manages order processing and related functionalities.

## Tech Stack
- **Node.js**: For building the microservices.
- **Express**: Web framework for Node.js to handle HTTP requests.
- **Docker**: For containerization of services.
- **MongoDB**: Database for storing data (if applicable).
- **Redis**: For caching (if applicable).

## Project Structure
```
crm-microservices
├── api-gateway
├── services
│   ├── auth-service
│   ├── customer-service
│   └── order-service
├── docker-compose.yml
└── package.json
```

## Ports Used
- **API Gateway**: Port 3000
- **Auth Service**: Port 3001
- **Customer Service**: Port 3002
- **Order Service**: Port 3003

## Deployment Instructions

### Local Deployment
1. Clone the repository:
   ```
   git clone <repository-url>
   cd crm-microservices
   ```
2. Install dependencies for each service:
   ```
   cd api-gateway
   npm install
   cd ../services/auth-service
   npm install
   cd ../customer-service
   npm install
   cd ../order-service
   npm install
   ```
3. Start each service:
   ```
   cd api-gateway
   npm start
   ```

### Docker Deployment
1. Ensure Docker is installed and running.
2. Build and run the containers using Docker Compose:
   ```
   docker-compose up --build
   ```
3. Access the API Gateway at `http://localhost:3000`.

## Conclusion
This CRM application is designed to be modular and scalable, allowing for easy updates and maintenance. Each microservice can be developed, deployed, and scaled independently, making it a robust solution for CRM needs.