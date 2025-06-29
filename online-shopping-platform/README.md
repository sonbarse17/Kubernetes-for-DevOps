# 🛒 Online Shopping Platform

A scalable e-commerce platform built with microservices architecture, featuring product catalog, user management, order processing, and secure authentication.

## ✨ Features

- **Product Catalog**: Browse and search products with categories
- **User Management**: Customer registration and profile management
- **Shopping Cart**: Add/remove items with persistent cart
- **Order Processing**: Complete order workflow with payment integration
- **Authentication**: JWT-based secure authentication
- **API Gateway**: Centralized routing and load balancing
- **Microservices**: Independent, scalable services

## 🛠 Technology Stack

- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens, bcrypt
- **Architecture**: Microservices with API Gateway
- **Containerization**: Docker & Docker Compose
- **API**: RESTful services with OpenAPI documentation

## 🏗 Service Architecture

```
┌─────────────────┐
│   API Gateway   │
│   (Port 3000)   │
└─────────┬───────┘
          │
    ┌─────┼─────┬─────┬─────┐
    │     │     │     │     │
┌───▼──┐ ┌▼───┐ ┌▼───┐ ┌▼───┐
│Auth  │ │User│ │Prod│ │Ord │
│:3001 │ │:3002│ │:3003│ │:3004│
└──────┘ └────┘ └────┘ └────┘
```

## 🚀 Quick Start

```bash
# Clone and navigate to project
git clone <repo-url>
cd ecommerce-microservices

# Start all services
docker-compose up -d

# Check service health
curl http://localhost:3000/health
```

## 📁 Project Structure

```
ecommerce-microservices/
├── gateway/              # API Gateway
├── services/
│   ├── auth-service/     # Authentication & Authorization
│   ├── user-service/     # User profile management
│   ├── product-service/  # Product catalog
│   └── order-service/    # Order processing
├── .env.example         # Environment template
├── docker-compose.yml   # Container orchestration
└── README.md
```

## 🔧 Development Setup

### Prerequisites
- Node.js 18+
- MongoDB 6+
- Docker & Docker Compose

### Local Development
```bash
# Install dependencies for each service
cd services/auth-service && npm install
cd ../user-service && npm install
cd ../product-service && npm install
cd ../order-service && npm install
cd ../../gateway && npm install

# Start MongoDB
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Start each service in development mode
npm run dev
```

## 🔌 API Documentation

### Auth Service (Port 3001)
```
POST /api/auth/register    # User registration
POST /api/auth/login       # User login
POST /api/auth/refresh     # Refresh JWT token
GET  /health              # Service health check
```

### User Service (Port 3002)
```
GET    /api/users/profile     # Get user profile
PUT    /api/users/profile     # Update profile
DELETE /api/users/account     # Delete account
GET    /health               # Service health check
```

### Product Service (Port 3003)
```
GET    /api/products         # Get all products
GET    /api/products/:id     # Get product by ID
POST   /api/products         # Create product (admin)
PUT    /api/products/:id     # Update product (admin)
DELETE /api/products/:id     # Delete product (admin)
GET    /api/categories       # Get categories
GET    /health              # Service health check
```

### Order Service (Port 3004)
```
GET    /api/orders           # Get user orders
POST   /api/orders           # Create new order
GET    /api/orders/:id       # Get order details
PUT    /api/orders/:id       # Update order status
GET    /api/cart             # Get shopping cart
POST   /api/cart/items       # Add item to cart
DELETE /api/cart/items/:id   # Remove cart item
GET    /health              # Service health check
```

## 🌐 Environment Configuration

Copy `.env.example` to `.env` and configure:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/ecommerce

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=24h

# Service Ports
AUTH_SERVICE_PORT=3001
USER_SERVICE_PORT=3002
PRODUCT_SERVICE_PORT=3003
ORDER_SERVICE_PORT=3004
GATEWAY_PORT=3000

# External APIs
PAYMENT_API_KEY=your-payment-provider-key
EMAIL_SERVICE_KEY=your-email-service-key
```

## 🐳 Docker Deployment

```bash
# Production deployment
docker-compose -f docker-compose.prod.yml up -d

# Development with hot reload
docker-compose up --build

# Scale specific services
docker-compose up --scale product-service=3 --scale order-service=2

# Monitor logs
docker-compose logs -f auth-service
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based auth
- **Password Hashing**: bcrypt with salt rounds
- **Input Validation**: Request validation middleware
- **CORS Protection**: Configurable CORS policies
- **Rate Limiting**: API rate limiting per service
- **Environment Secrets**: Secure environment variable handling

## 📊 Monitoring & Health Checks

Each service exposes health check endpoints:
- Individual service health: `GET /{service}/health`
- Gateway aggregated health: `GET /health`
- Service discovery through gateway routing

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Run e2e tests
npm run test:e2e

# Test coverage
npm run test:coverage
```

## 🚀 Deployment Strategies

### Kubernetes
```bash
# Apply Kubernetes manifests
kubectl apply -f k8s/

# Check deployment status
kubectl get pods -l app=ecommerce
```

### AWS ECS
```bash
# Deploy to ECS
aws ecs create-service --cli-input-json file://ecs-service.json
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@ecommerce-app.com
- 💬 Discord: [Join our community](https://discord.gg/ecommerce)
- 📖 Documentation: [Full API Docs](https://docs.ecommerce-app.com)