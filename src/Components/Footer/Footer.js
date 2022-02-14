import React from 'react';
import "./Footer.css";
import { Container, Row, Col } from 'react-bootstrap';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <>
        <div className="all-footer-area">
        <Container>
            <div className="footer">
                
                    <Row>
                        <Col md={3}>
                            <div className="footerOne">
                                <h4>Contact Details</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore?</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footerOne">
                                <h4>Contact Details</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore?</p>
                            </div>
                        </Col>
                        <Col md={3}>
                             <div className="footerOne">
                                <h4>Call Us</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore?</p>
                            </div>
                        </Col>
                        <Col md={3}>
                             <div className="footer-social-media">
                                <h4>Social Media</h4>
                                <ul>
                                    <li><a href="#"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                   
            </div>

            <div className="last-footer">
                <hr />
                <p className='bottom-footer'>All Rights Resurved By Porto Theme</p>
            </div>
        </Container>
        </div>
       
        </>
    )
};

export default Footer;
