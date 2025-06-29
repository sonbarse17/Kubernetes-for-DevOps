# 📸 Media Gallery Platform

A modern full-stack image and video gallery application with upload capabilities

## ✨ Features

- **Media Upload**: Support for images and videos with file upload
- **Gallery View**: Beautiful grid layout with responsive design
- **Media Management**: View, delete, and organize media files
- **File Types**: Support for JPG, PNG, GIF, MP4, WebM, and more
- **RESTful API**: Clean API design for media operations
- **TypeScript**: Full type safety across frontend and backend
- **MongoDB Integration**: Persistent storage for media metadata

## 🛠 Tech Stack
- **Frontend**: React 18, TypeScript, CSS3
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB with Mongoose
- **File Upload**: Multer middleware
- **Containerization**: Docker

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/media` | Get all media files |
| POST | `/api/media/upload` | Upload new media file |
| DELETE | `/api/media/:id` | Delete media file |
| GET | `/health` | Health check |

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