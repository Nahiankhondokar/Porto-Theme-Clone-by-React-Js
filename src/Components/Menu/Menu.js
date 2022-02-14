import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import "./Menu.css";

const Menu = ({ progress }) => {
    return (
        <> 
            <div className="menu">
                <Container>
                    <Row>
                        <Col>
                            <div className="menu-area">
                                <ul>
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/team">Team</NavLink></li>
                                    <li><NavLink to="/blog">Blog</NavLink></li>
                                    <li><NavLink to="/shop">Shop</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
};

export default Menu;
