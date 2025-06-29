import React, { useState } from 'react';

const Customers: React.FC = () => {
  const [customers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
  ]);

  return (
    <div className="customers">
      <h2>Customer Management</h2>
      <button className="add-btn">Add Customer</button>
      <div className="customer-list">
        {customers.map(customer => (
          <div key={customer.id} className="customer-card">
            <h3>{customer.name}</h3>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <div className="actions">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;