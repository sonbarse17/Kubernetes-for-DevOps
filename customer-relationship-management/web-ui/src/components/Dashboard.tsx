import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h2>CRM Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Customers</h3>
          <p className="stat-number">1,234</p>
        </div>
        <div className="stat-card">
          <h3>Active Orders</h3>
          <p className="stat-number">56</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p className="stat-number">$45,678</p>
        </div>
        <div className="stat-card">
          <h3>Growth</h3>
          <p className="stat-number">+12%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;