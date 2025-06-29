# Ledger Service Documentation

## Overview
The Ledger Service is a microservice responsible for managing ledger entries in the Agile Accounting application. It provides RESTful APIs to create, read, update, and delete ledger entries.

## Tech Stack
- **Node.js**: JavaScript runtime for building the service.
- **Express.js**: Web framework for building the RESTful API.
- **MongoDB/PostgreSQL**: Database for storing ledger entries (choose based on your setup).
- **Docker**: For containerization of the service.

## Ports
- The Ledger Service runs on port **3002**.

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone https://github.com/your-repo/agile-accounting-app.git
   cd agile-accounting-app/services/ledger-service
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Start the service**:
   ```
   npm start
   ```

## API Endpoints
- **GET /ledgers**: Retrieve all ledger entries.
- **POST /ledgers**: Create a new ledger entry.
- **GET /ledgers/:id**: Retrieve a specific ledger entry by ID.
- **PUT /ledgers/:id**: Update a specific ledger entry by ID.
- **DELETE /ledgers/:id**: Delete a specific ledger entry by ID.

## Deployment Instructions

### Locally
1. Navigate to the `ledger-service` directory.
2. Run `npm install` to install dependencies.
3. Start the service using `npm start`.

### Using Docker
1. Navigate to the root of the project.
2. Run the following command to build and start the service:
   ```
   docker-compose up --build
   ```

## Notes
Ensure that the database is properly configured and running before starting the service. Adjust the database connection settings in the service code as necessary.