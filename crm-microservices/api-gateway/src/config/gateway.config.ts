export default {
  routes: [
    {
      path: '/auth',
      method: 'POST',
      service: 'auth-service',
      endpoint: 'http://auth-service:3000/auth'
    },
    {
      path: '/customers',
      method: 'GET',
      service: 'customer-service',
      endpoint: 'http://customer-service:3000/customers'
    },
    {
      path: '/orders',
      method: 'POST',
      service: 'order-service',
      endpoint: 'http://order-service:3000/orders'
    }
  ],
  serviceDiscovery: {
    enabled: true,
    type: 'consul',
    host: 'consul:8500'
  },
  logging: {
    level: 'info',
    format: 'combined'
  }
};