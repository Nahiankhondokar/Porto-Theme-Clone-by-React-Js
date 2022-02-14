import React from 'react';
import { Card } from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = () => {
  return (
      <>
      
        <Card className='admin-panel shadow'>
          <Card.Header>
            <h4>Dashboard</h4>
          </Card.Header>
            <Card.Body>
                <div className="admin-details">
                  <div className="product">
                    <p>499 | Products</p>
                  </div>
                  <div className="post">
                    <p>45 | Posts</p>
                  </div>
                  <div className="order">
                    <p>99 | Orders</p>
                  </div>
                </div>
            </Card.Body>
        </Card>
      
      </>
  )
};

export default Dashboard;
