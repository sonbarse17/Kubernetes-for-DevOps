# Technology Stack for Scrum Project Management Application

## Backend Services
- **Node.js**: JavaScript runtime for building scalable network applications.
- **Express.js**: Web framework for Node.js to build RESTful APIs.
- **MongoDB**: NoSQL database for storing user, project, and task data.
- **Mongoose**: ODM library for MongoDB and Node.js for data modeling.

## Microservices
1. **Auth Service**
   - Handles user authentication and authorization.
   - Dependencies: `jsonwebtoken`, `bcrypt`, `express`, `mongoose`.

2. **Project Service**
   - Manages project creation, updates, and retrieval.
   - Dependencies: `express`, `mongoose`.

3. **Task Service**
   - Manages tasks associated with projects.
   - Dependencies: `express`, `mongoose`.

4. **User Service**
   - Manages user profiles and information.
   - Dependencies: `express`, `mongoose`.

## API Gateway
- **Express.js**: Used to route requests to the appropriate microservices.
- **Axios**: For making HTTP requests to microservices.

## Containerization
- **Docker**: For containerizing each microservice and the API gateway.
- **Docker Compose**: For orchestrating multi-container Docker applications.

## Development Tools
- **VS Code**: Code editor for development.
- **Postman**: For testing APIs.
- **Git**: Version control system for tracking changes in the codebase.

## Testing
- **Jest**: JavaScript testing framework for unit and integration tests.
- **Supertest**: For testing HTTP endpoints.

## Deployment
- **Docker**: For deploying the application in containers.
- **Docker Compose**: For managing multi-container deployments.

This technology stack provides a robust foundation for building a scalable and maintainable Scrum project management application using microservices architecture.