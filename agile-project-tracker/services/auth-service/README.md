# Authentication Service

This is the authentication service for the Scrum Project Management application. It handles user authentication, including login and registration functionalities.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd scrum-project-management/services/auth-service
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the root of the `auth-service` directory and add the following variables:
   ```
   PORT=3001
   DATABASE_URL=<your-database-url>
   JWT_SECRET=<your-jwt-secret>
   ```

4. **Run the service**:
   ```bash
   npm start
   ```

## API Endpoints

- **POST /api/auth/register**: Register a new user.
  - Request body: `{ "username": "string", "password": "string" }`
  
- **POST /api/auth/login**: Authenticate a user and return a JWT token.
  - Request body: `{ "username": "string", "password": "string" }`

## Docker Instructions

To build and run the authentication service using Docker, follow these steps:

1. **Build the Docker image**:
   ```bash
   docker build -t auth-service .
   ```

2. **Run the Docker container**:
   ```bash
   docker run -p 3001:3001 --env-file .env auth-service
   ```

## Testing

You can test the API endpoints using tools like Postman or curl. Make sure to replace `<your-database-url>` and `<your-jwt-secret>` with actual values in the `.env` file.

## License

This project is licensed under the MIT License. See the LICENSE file for details.