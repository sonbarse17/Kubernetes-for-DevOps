# Task Service README

# Task Service

The Task Service is a microservice responsible for managing tasks within the Scrum Project Management application. It provides endpoints to create, read, update, and delete tasks, as well as to manage task assignments and statuses.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)
- MongoDB (or any other database of your choice)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/scrum-project-management.git
   cd scrum-project-management/services/task-service
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Service

To start the Task Service locally, run:

```bash
npm start
```

The service will be available at `http://localhost:3000`.

### API Endpoints

- **GET /tasks**: Retrieve all tasks.
- **GET /tasks/:id**: Retrieve a specific task by ID.
- **POST /tasks**: Create a new task.
- **PUT /tasks/:id**: Update an existing task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.

### Docker

To build and run the Task Service using Docker, follow these steps:

1. Build the Docker image:

   ```bash
   docker build -t task-service .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 task-service
   ```

The service will be accessible at `http://localhost:3000`.

## Contributing

If you would like to contribute to the Task Service, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.