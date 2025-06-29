# 🏢 Customer Relationship Management

A comprehensive Customer Relationship Management system built with microservices architecture, featuring React frontend and Node.js backend services.

## ✨ Features

- **Customer Management**: Add, edit, and manage customer information
- **Order Processing**: Create and track customer orders
- **Authentication**: Secure user authentication and authorization
- **Dashboard Analytics**: Real-time statistics and insights
- **Responsive UI**: Modern React-based web interface
- **API Gateway**: Centralized API management and routing
- **Microservices**: Scalable service-oriented architecture

## 🛠 Technology Stack

- **Frontend**: React 18, TypeScript, CSS3
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens
- **Architecture**: Microservices with API Gateway
- **Containerization**: Docker & Docker Compose

## 🏗 Architecture

```
┌─────────────────┐    ┌─────────────────┐
│   Web UI        │    │  API Gateway    │
│   (Port 3000)   │◄──►│   (Port 3000)   │
└─────────────────┘    └─────────────────┘
                                │
                ┌───────────────┼───────────────┐
                │               │               │
        ┌───────▼──────┐ ┌──────▼──────┐ ┌─────▼──────┐
        │ Auth Service │ │Customer Svc │ │Order Svc   │
        │ (Port 3001)  │ │(Port 3002)  │ │(Port 3003) │
        └──────────────┘ └─────────────┘ └────────────┘
```

## 🚀 Quick Start

```bash
# Start all services with Docker
docker-compose up -d

# Access the application
open http://localhost:3000
```

## 📁 Project Structure

```
crm-microservices/
├── api-gateway/          # API Gateway service
├── services/
│   ├── auth-service/     # Authentication service
│   ├── customer-service/ # Customer management
│   └── order-service/    # Order processing
├── web-ui/              # React frontend
├── docker-compose.yml
└── README.md
```

## 🔧 Development Setup

### Backend Services
```bash
# Install dependencies for each service
cd api-gateway && npm install
cd services/auth-service && npm install
cd services/customer-service && npm install
cd services/order-service && npm install

# Start services in development mode
npm run dev
```

### Frontend
```bash
# Install and start React UI
cd web-ui
npm install
npm start
```

## 🔌 API Endpoints

### Auth Service (Port 3001)
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- GET `/health` - Health check

### Customer Service (Port 3002)
- GET `/api/customers` - Get all customers
- POST `/api/customers` - Create customer
- PUT `/api/customers/:id` - Update customer
- DELETE `/api/customers/:id` - Delete customer

### Order Service (Port 3003)
- GET `/api/orders` - Get all orders
- POST `/api/orders` - Create order
- PUT `/api/orders/:id` - Update order
- GET `/api/orders/customer/:id` - Get customer orders

## 🌐 Environment Variables

Create `.env` files for each service:

```env
# Auth Service
MONGODB_URI=mongodb://localhost:27017/crm-auth
JWT_SECRET=your-secret-key
PORT=3001

# Customer Service
MONGODB_URI=mongodb://localhost:27017/crm-customers
PORT=3002

# Order Service
MONGODB_URI=mongodb://localhost:27017/crm-orders
PORT=3003
```

## 🐳 Docker Deployment

```bash
# Build and run all services
docker-compose up --build

# Scale specific services
docker-compose up --scale customer-service=3

# View logs
docker-compose logs -f
```

## 📊 Monitoring

- Health checks available at `/health` endpoint for each service
- Service discovery through API Gateway
- Centralized logging with Docker Compose

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test all services
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details