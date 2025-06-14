# README.md

# Image and Video Gallery Application

## Tech Stack
- **Frontend**: React, TypeScript, CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: (Specify your choice, e.g., MongoDB, PostgreSQL)
- **Containerization**: Docker

## Project Structure
```
gallery-app
├── src
│   ├── client
│   │   ├── components
│   │   ├── styles
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── server
│   │   ├── controllers
│   │   ├── routes
│   │   ├── models
│   │   └── index.ts
│   └── types
├── docker
│   ├── Dockerfile
│   └── docker-compose.yml
├── package.json
├── tsconfig.json
├── .env.example
├── .dockerignore
└── README.md
```

## Ports Used
- **Frontend**: Port 3000 (default for React applications)
- **Backend**: Port 5000 (default for Express applications)

## Deployment Instructions

### Local Deployment
1. Clone the repository:
   ```
   git clone <repository-url>
   cd gallery-app
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   npm run start:server
   ```
4. Start the frontend application:
   ```
   npm run start:client
   ```
5. Open your browser and navigate to `http://localhost:3000` to view the application.

### Docker Deployment
1. Build the Docker image:
   ```
   docker-compose build
   ```
2. Run the application:
   ```
   docker-compose up
   ```
3. Access the application at `http://localhost:3000`.

## License
This project is licensed under the MIT License.