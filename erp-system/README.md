# erp-system/erp-system/README.md

# ERP System

## Overview
This project is a robust ERP application built using a microservices architecture. It includes multiple services that handle different aspects of the ERP system, along with a web client for user interaction.

## Tech Stack
- **Backend Services**: 
  - Node.js
  - Express
  - TypeScript
  - MongoDB (or any other database of choice)
  
- **Frontend**: 
  - React
  - TypeScript

- **Containerization**: 
  - Docker
  - Docker Compose

- **Reverse Proxy**: 
  - Nginx

## Project Structure
```
erp-system
├── docker-compose.yml
├── nginx
│   └── nginx.conf
├── services
│   ├── auth-service
│   ├── inventory-service
│   ├── order-service
│   └── user-service
└── web-client
```

## Ports Used
- **Auth Service**: 3001
- **Inventory Service**: 3002
- **Order Service**: 3003
- **User Service**: 3004
- **Web Client**: 3000
- **Nginx**: 80

## Local Deployment
1. Clone the repository.
2. Navigate to the project directory.
3. Run `docker-compose up` to start all services and the web client.

## Docker Setup
- Ensure Docker and Docker Compose are installed on your machine.
- Use the provided `docker-compose.yml` file to orchestrate the services.
- Each service has its own Dockerfile for building the respective images.

## Conclusion
This ERP system is designed to be scalable and maintainable, leveraging modern technologies and best practices in software development.