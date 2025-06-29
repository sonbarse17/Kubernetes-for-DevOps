# User Service Documentation

## Overview

The User Service is a microservice responsible for managing user-related operations in the Scrum Project Management application. It handles user registration, authentication, and profile management.

## Tech Stack

- **Node.js**: The runtime environment for executing JavaScript code on the server.
- **Express**: A web framework for building APIs in Node.js.
- **MongoDB**: A NoSQL database for storing user data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/scrum-project-management.git
   cd scrum-project-management/services/user-service
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the root of the user-service directory and add the following variables:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   PORT=3001
   ```

4. **Run the Service**:
   ```bash
   npm start
   ```

## API Endpoints

- **POST /users/register**: Register a new user.
- **POST /users/login**: Authenticate a user and return a token.
- **GET /users/:id**: Retrieve user profile by ID.
- **PUT /users/:id**: Update user profile by ID.
- **DELETE /users/:id**: Delete user by ID.

## Docker Instructions

To build and run the User Service using Docker, follow these steps:

1. **Build the Docker Image**:
   ```bash
   docker build -t user-service .
   ```

2. **Run the Docker Container**:
   ```bash
   docker run -p 3001:3001 --env-file .env user-service
   ```

## Testing

To run tests for the User Service, use the following command:
```bash
npm test
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.