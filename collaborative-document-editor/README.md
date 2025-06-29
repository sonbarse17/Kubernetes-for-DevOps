# Word Processor Application

## Overview
This project is a word processing application that provides a rich text editing interface. It consists of a frontend built with React and a backend powered by Express. The application allows users to create, edit, and manage documents.

## Tech Stack
- **Frontend:**
  - React
  - TypeScript
  - CSS

- **Backend:**
  - Node.js
  - Express
  - TypeScript

## Project Structure
```
word-processor
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Editor.tsx
│   │   │   ├── Toolbar.tsx
│   │   │   └── FileMenu.tsx
│   │   ├── styles
│   │   │   └── main.css
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── documentController.ts
│   │   ├── models
│   │   │   └── Document.ts
│   │   ├── routes
│   │   │   └── api.ts
│   │   └── app.ts
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml
├── Dockerfile.frontend
├── Dockerfile.backend
└── README.md
```

## Deployment Instructions

### Local Deployment
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd word-processor
   ```

2. **Frontend Setup:**
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend application:
     ```bash
     npm start
     ```

3. **Backend Setup:**
   - Open a new terminal and navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

### Docker Deployment
1. **Build and run the application using Docker Compose:**
   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

## Features
- Rich text editing capabilities.
- Toolbar for text formatting options.
- File menu for document operations.

## Contributing
Feel free to submit issues or pull requests to improve the application.