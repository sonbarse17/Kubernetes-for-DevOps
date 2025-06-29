# Financial Management System

## Overview
The Agile Accounting Application is a modern microservices-based application designed to manage accounting tasks efficiently. It consists of multiple services and a React-based web UI, each responsible for a specific domain within the accounting ecosystem. The application is built using Node.js, TypeScript, Express.js, and React with a focus on RESTful APIs.

## Tech Stack
- **Backend**: Node.js, TypeScript
- **Framework**: Express.js
- **Frontend**: React, TypeScript
- **Database**: MongoDB
- **Authentication**: JWT, bcryptjs
- **Containerization**: Docker
- **Orchestration**: Docker Compose

## Services
The application consists of the following microservices:

1. **Auth Service**
   - Port: 3001
   - Responsible for user authentication and authorization with JWT tokens.

2. **Invoice Service**
   - Port: 3002
   - Handles invoice creation, management, and processing.

3. **Ledger Service**
   - Port: 3003
   - Manages ledger entries and financial transactions.

4. **User Service**
   - Port: 3004
   - Manages user data and profiles.

5. **Web UI**
   - Port: 3000
   - React-based frontend with authentication and dashboard.

## Features
- User registration and login
- JWT-based authentication
- Responsive web dashboard
- Invoice management
- Ledger tracking
- User profile management
- Health check endpoints

## Project Structure
```
agile-accounting-app
├── services
│   ├── auth-service
│   ├── invoice-service
│   ├── ledger-service
│   └── user-service
├── web-ui (React frontend)
├── docker-compose.yml
├── README.md
└── docs
    └── architecture.md
```

## Quick Start

```bash
# Start all services with Docker
docker-compose up -d

# Access the web application
open http://localhost:3000
```

## Development Setup

### Backend Services
```bash
# Install dependencies for each service
cd services/auth-service && npm install
cd ../invoice-service && npm install
cd ../ledger-service && npm install
cd ../user-service && npm install

# Start services in development mode
npm run dev
```

### Frontend
```bash
# Install and start React UI
cd web-ui
npm install
npm start
```

## API Endpoints

### Auth Service (Port 3001)
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- GET `/health` - Health check

### Invoice Service (Port 3002)
- GET `/api/invoices` - Get all invoices
- POST `/api/invoices` - Create invoice

### Ledger Service (Port 3003)
- GET `/api/ledger` - Get ledger entries
- POST `/api/ledger` - Create ledger entry

### User Service (Port 3004)
- GET `/api/users/profile` - Get user profile
- PUT `/api/users/profile` - Update profile

## Documentation
For detailed architecture and design decisions, refer to the [architecture documentation](docs/architecture.md). Each service also has its own README file for specific setup instructions and usage.