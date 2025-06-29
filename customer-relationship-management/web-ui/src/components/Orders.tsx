import React, { useState } from 'react';

const Orders: React.FC = () => {
  const [orders] = useState([
    { id: 1, customer: 'John Doe', amount: 299.99, status: 'Pending' },
    { id: 2, customer: 'Jane Smith', amount: 149.50, status: 'Completed' },
  ]);

  return (
    <div className="orders">
      <h2>Order Management</h2>
      <button className="add-btn">Create Order</button>
      <div className="order-list">
        {orders.map(order => (
          <div key={order.id} className="order-card">
            <h3>Order #{order.id}</h3>
            <p>Customer: {order.customer}</p>
            <p>Amount: ${order.amount}</p>
            <p>Status: <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></p>
            <div className="actions">
              <button>View</button>
              <button>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;