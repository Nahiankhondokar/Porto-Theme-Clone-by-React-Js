import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Admin.css';
import logo from './../Header/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashcube } from '@fortawesome/free-brands-svg-icons';



const Admin = () => {
  return (
      <>
        <div className="dash">
            <Container>
                <div className="admin-top-header">
                    <Card>
                        <Card.Header className='test'>
                            <div className="top-bar-items">
                                <img src={ logo } alt="" />
                                <h3>Admin Panel</h3>
                                <ul>
                                    <li>
                                        <Link to="/dashboard/logout">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </Card.Header>
                    </Card>
                </div>
                <Row>
                    <Col md={ 4 }>
                        <Card>
                            <Card.Body className='dash-menu shadow'>
                                <div className="sht-profile text-center py-3">
                                    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                                    <h4>Mr.Web Developer</h4>
                                </div>
                                <ul className='list-group'>
                                    <li className='list-group-item'>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li className='list-group-item'>
                                        <Link to="/dashboard/signup">Add Student</Link>
                                    </li>
                                    <li className='list-group-item'>
                                        <Link to="/dashboard/allStudent">All Student</Link>
                                    </li>
                                    <li className='list-group-item'>
                                        <Link to="/dashboard/profile">Profile</Link>
                                    </li>
                                    <li className='list-group-item'>
                                        <Link to="/dashboard/todo">ToDo List</Link>
                                    </li>
                                    <li className='list-group-item'>
                                        <Link to="/dashboard/product">Product</Link>
                                    </li>
                                    <li className='list-group-item'>
                                        <Link to="/dashboard/category">Category</Link>
                                    </li>
                                    <li className='list-group-item'>
                                        <Link to="/dashboard/brand">Brand</Link>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={ 8 }>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
      </>
  );
};

export default Admin;
