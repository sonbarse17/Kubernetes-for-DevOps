import React from 'react';

const Dashboard: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Agile Accounting Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>
      
      <div className="dashboard-content">
        <div className="card">
          <h3>Invoices</h3>
          <p>Manage your invoices</p>
        </div>
        
        <div className="card">
          <h3>Ledger</h3>
          <p>View ledger entries</p>
        </div>
        
        <div className="card">
          <h3>Users</h3>
          <p>Manage users</p>
        </div>
        
        <div className="card">
          <h3>Reports</h3>
          <p>Generate financial reports</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;