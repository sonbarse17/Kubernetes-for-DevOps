# Architecture Overview of Agile Accounting Application

## Introduction
The Agile Accounting Application is designed as a microservices architecture to provide a scalable and maintainable solution for accounting needs. Each service is responsible for a specific domain, allowing for independent development and deployment.

## Microservices
The application consists of the following microservices:

1. **Auth Service**
   - **Purpose**: Handles user authentication and authorization.
   - **Technology**: Node.js, Express.js
   - **Database**: MongoDB/PostgreSQL
   - **Port**: 3001

2. **Ledger Service**
   - **Purpose**: Manages ledger entries and transactions.
   - **Technology**: Node.js, Express.js
   - **Database**: MongoDB/PostgreSQL
   - **Port**: 3002

3. **Invoice Service**
   - **Purpose**: Manages invoice creation, updates, and retrieval.
   - **Technology**: Node.js, Express.js
   - **Database**: MongoDB/PostgreSQL
   - **Port**: 3003

4. **User Service**
   - **Purpose**: Manages user data and profiles.
   - **Technology**: Node.js, Express.js
   - **Database**: MongoDB/PostgreSQL
   - **Port**: 3004

## Tech Stack
- **Backend**: Node.js with Express.js for building RESTful APIs.
- **Database**: MongoDB or PostgreSQL, depending on the service requirements.
- **Containerization**: Docker for creating isolated environments for each service.
- **Orchestration**: Docker Compose for managing multi-container Docker applications.

## Service Interaction
Each service communicates over HTTP, allowing for a loosely coupled architecture. The services can be scaled independently based on demand.

## Deployment Instructions

### Local Deployment
1. Navigate to each service directory:
   - `cd services/auth-service`
   - `cd services/ledger-service`
   - `cd services/invoice-service`
   - `cd services/user-service`
   
2. Install dependencies:
   - Run `npm install` in each service directory.

3. Start each service:
   - Run `npm start` in each service directory.

### Docker Deployment
1. Navigate to the root of the project:
   - `cd agile-accounting-app`

2. Build and start all services using Docker Compose:
   - Run `docker-compose up --build`.

## Conclusion
This architecture allows for a flexible and scalable accounting application, leveraging the strengths of microservices and modern technologies. Each service can evolve independently, ensuring that the application can adapt to changing requirements over time.