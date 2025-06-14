# Scrum Project Management Application

This project is a microservices-based application designed for scrum project management. It consists of multiple services that handle different aspects of project management, including user authentication, project management, task management, and an API gateway.

## Project Structure

The project is organized into several microservices, each with its own responsibilities:

- **Auth Service**: Manages user authentication and authorization.
- **Project Service**: Handles project creation, updates, and retrieval.
- **Task Service**: Manages tasks associated with projects.
- **User Service**: Manages user profiles and information.
- **API Gateway**: Acts as a single entry point for all client requests, routing them to the appropriate microservice.

## Tech Stack

- **Node.js**: JavaScript runtime for building the services.
- **Express**: Web framework for Node.js to handle HTTP requests.
- **MongoDB**: NoSQL database for storing user, project, and task data.
- **Docker**: Containerization platform for deploying services.
- **Docker Compose**: Tool for defining and running multi-container Docker applications.

## Ports Used

- Auth Service: 3001
- Project Service: 3002
- Task Service: 3003
- User Service: 3004
- API Gateway: 3000

## Deployment Instructions

### Local Deployment

1. Clone the repository:
   ```
   git clone <repository-url>
   cd scrum-project-management
   ```

2. Install dependencies for each service:
   ```
   cd services/auth-service
   npm install
   cd ../project-service
   npm install
   cd ../task-service
   npm install
   cd ../user-service
   npm install
   cd ../../gateway
   npm install
   ```

3. Start each service:
   ```
   cd services/auth-service
   npm start
   cd ../project-service
   npm start
   cd ../task-service
   npm start
   cd ../user-service
   npm start
   cd ../../gateway
   npm start
   ```

### Docker Deployment

1. Build the Docker images:
   ```
   docker-compose build
   ```

2. Start the services using Docker Compose:
   ```
   docker-compose up
   ```

3. Access the API Gateway at `http://localhost:3000`.

## Usage

Once the application is running, you can interact with the API through the gateway. Refer to the individual service README files for specific API endpoints and usage instructions.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.