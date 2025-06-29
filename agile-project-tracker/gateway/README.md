# API Gateway for Scrum Project Management

This is the API Gateway for the Scrum Project Management application. The gateway acts as a single entry point for all client requests and routes them to the appropriate microservices.

## Table of Contents

- [Overview](#overview)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)

## Overview

The API Gateway is responsible for aggregating the responses from various microservices, handling authentication, and providing a unified interface for the client applications. It communicates with the following services:

- Auth Service
- Project Service
- Task Service
- User Service

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/scrum-project-management.git
   cd scrum-project-management/gateway
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Gateway**
   ```bash
   npm start
   ```

   The gateway will be available at `http://localhost:3000`.

## API Endpoints

- **Authentication**
  - `POST /auth/login`: Authenticate a user and return a token.
  - `POST /auth/register`: Register a new user.

- **Projects**
  - `GET /projects`: Retrieve all projects.
  - `POST /projects`: Create a new project.

- **Tasks**
  - `GET /tasks`: Retrieve all tasks.
  - `POST /tasks`: Create a new task.

- **Users**
  - `GET /users`: Retrieve all users.
  - `POST /users`: Create a new user.

For detailed information on each endpoint, refer to the respective service documentation.