# Invoice Service

This document provides information about the Invoice Service within the Agile Accounting Application.

## Overview

The Invoice Service is responsible for managing invoices, including creating, updating, retrieving, and deleting invoice records. It communicates with the database to store and retrieve invoice data.

## Tech Stack

- **Node.js**: JavaScript runtime for building the service.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB/PostgreSQL**: Database for storing invoice data (choose based on your setup).
- **Docker**: For containerization of the service.

## Ports Used

- The Invoice Service runs on port **3003**.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone https://github.com/your-repo/agile-accounting-app.git
   cd agile-accounting-app/services/invoice-service
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Start the service**:
   ```
   npm start
   ```

## Docker Deployment

To deploy the Invoice Service using Docker, follow these steps:

1. Navigate to the root of the project:
   ```
   cd agile-accounting-app
   ```

2. Build and start the service using Docker Compose:
   ```
   docker-compose up --build
   ```

This command will build the Docker image for the Invoice Service and start it along with other services defined in the `docker-compose.yml` file.

## API Endpoints

- **POST /invoices**: Create a new invoice.
- **GET /invoices**: Retrieve all invoices.
- **GET /invoices/:id**: Retrieve a specific invoice by ID.
- **PUT /invoices/:id**: Update an existing invoice by ID.
- **DELETE /invoices/:id**: Delete an invoice by ID.

## Additional Information

For more details on the architecture and interactions with other services, please refer to the [architecture documentation](../../docs/architecture.md).