# Deployment Instructions for Scrum Project Management Application

## Local Deployment

To deploy the Scrum Project Management application locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/scrum-project-management.git
   cd scrum-project-management
   ```

2. **Install Dependencies**
   Navigate to each service directory and install the required dependencies. For example:
   ```bash
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

3. **Set Up Environment Variables**
   Create a `.env` file in each service directory as needed, and define the necessary environment variables for database connections and other configurations.

4. **Start the Services**
   You can start each service individually using:
   ```bash
   cd services/auth-service
   npm start
   ```

   Repeat for each service and the gateway.

## Docker Deployment

To deploy the application using Docker, follow these steps:

1. **Build Docker Images**
   From the root of the project, run the following command to build all Docker images defined in the `Dockerfile` of each service and the gateway:
   ```bash
   docker-compose build
   ```

2. **Run the Application**
   Use Docker Compose to start all services and the gateway:
   ```bash
   docker-compose up
   ```

3. **Access the Application**
   Once the services are running, you can access the API gateway at `http://localhost:3000` (or the port defined in your `docker-compose.yml`).

4. **Stopping the Services**
   To stop the running services, use:
   ```bash
   docker-compose down
   ```

## Notes

- Ensure Docker and Docker Compose are installed on your machine.
- Adjust the ports in the `docker-compose.yml` file if there are conflicts with other applications running on your machine.
- For production deployment, consider using a cloud provider and configure a reverse proxy for better performance and security.