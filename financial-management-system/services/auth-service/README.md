# Authentication Service

This document provides information on the authentication service of the Agile Accounting Application.

## Overview

The authentication service is responsible for user authentication, including login, registration, and token management. It communicates with the database to store and retrieve user credentials securely.

## Tech Stack

- **Node.js**: JavaScript runtime for building the service.
- **Express.js**: Web framework for creating RESTful APIs.
- **MongoDB/PostgreSQL**: Database for storing user data (choose based on your setup).
- **Docker**: For containerization of the service.

## Ports

- The authentication service runs on port **3001**.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd agile-accounting-app/services/auth-service
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

To deploy the authentication service using Docker:

1. Navigate to the root of the project:
   ```
   cd agile-accounting-app
   ```

2. Build and start the service using Docker Compose:
   ```
   docker-compose up --build
   ```

## Usage

Once the service is running, you can access the following endpoints:

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Authenticate a user and return a token.
- **GET /api/auth/logout**: Log out the user.

Ensure to include the necessary headers and body parameters as specified in the API documentation.

## Notes

- Ensure that the database is running and accessible before starting the service.
- For production, consider implementing additional security measures such as HTTPS and environment variable management for sensitive information.