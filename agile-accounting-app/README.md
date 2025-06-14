# Agile Accounting Application

## Overview
The Agile Accounting Application is a microservices-based application designed to manage accounting tasks efficiently. It consists of multiple services, each responsible for a specific domain within the accounting ecosystem. The application is built using Node.js and Express.js, with a focus on RESTful APIs for communication between services.

## Tech Stack
- **Backend**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB or PostgreSQL (depending on service requirements)
- **Containerization**: Docker
- **Orchestration**: Docker Compose

## Services
The application consists of the following microservices:

1. **Auth Service**
   - Port: 3001
   - Responsible for user authentication and authorization.

2. **Ledger Service**
   - Port: 3002
   - Manages ledger entries and transactions.

3. **Invoice Service**
   - Port: 3003
   - Handles invoice creation, management, and processing.

4. **User Service**
   - Port: 3004
   - Manages user data and profiles.

## Project Structure
```
agile-accounting-app
├── services
│   ├── auth-service
│   ├── ledger-service
│   ├── invoice-service
│   └── user-service
├── docker-compose.yml
├── README.md
└── docs
    └── architecture.md
```

## Deployment Instructions

### Local Deployment
1. Navigate to each service directory:
   - `cd services/auth-service`
   - `cd services/ledger-service`
   - `cd services/invoice-service`
   - `cd services/user-service`
   
2. Run `npm install` in each service directory to install dependencies.

3. Start each service using `npm start`.

### Docker Deployment
1. Navigate to the root of the project:
   - `cd agile-accounting-app`

2. Run the following command to build and start all services:
   - `docker-compose up --build`

## Documentation
For detailed architecture and design decisions, refer to the [architecture documentation](docs/architecture.md). Each service also has its own README file for specific setup instructions and usage.