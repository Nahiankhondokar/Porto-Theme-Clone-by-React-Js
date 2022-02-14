import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Header.css";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from './logo.png';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
       <>
        <div className="header-top">
            <Container>
                    <Row>
                        <Col md={6}>
                            <div className="header-left">
                                
                                <ul>
                                    <li><a href="#"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> About </a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> Contact</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="header-right">
                                <ul>
                                    <li><a href=""><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </div>

        <div className="logo">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="logo-left">
                            <img src={ logo } alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="logo-right">
                            <div className="info">
                                <ul>
                                    <li>
                                        <label htmlFor="">SEND US AN EMAIL</label>
                                        <p>nahi@gmail.com</p>
                                    </li>
                                    <li>
                                        <label htmlFor="">CALL US NOW</label>
                                        <p>01308663002</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
       </>
    )
};

export default Header;
