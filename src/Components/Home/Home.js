import React from 'react';
import { Carousel, CarouselItem, Col, Container, Row, Button } from 'react-bootstrap';
import './Home.css';
import about from './about.png';



const Home = () => {
    return (
        <>
            <div className="slider">
                <Carousel>

                    <CarouselItem>
                        <img src="https://localccprocessing.com/wp-content/uploads/2017/03/professional-business.jpg" alt="" />
                        <Carousel.Caption>
                            <div className="slider-img-overlay">
                                <div className="slider-info">
                                    <h1>Standerd React Js</h1>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis voluptates animi doloremque velit maiores maxime dolore obcaecati vitae veniam earum.</p>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </CarouselItem>

                    <CarouselItem>
                        <img src="https://buyinghack.com/wp-content/uploads/2019/03/Conference-Room-Cameras-Featured-Image.jpg" alt="" />
                        <Carousel.Caption>
                            <div className="slider-img-overlay">
                            <div className="slider-info">
                                <h1>Standerd React Js</h1>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis voluptates animi doloremque velit maiores maxime dolore obcaecati vitae veniam earum.</p>
                            </div>
                            </div>
                        </Carousel.Caption>
                    </CarouselItem>

                    <CarouselItem>
                        <img src="https://noobpreneur.com/wp-content/uploads/2018/07/executive-suite.jpg" alt="" />
                        <Carousel.Caption>
                            <div className="slider-img-overlay">
                            <div className="slider-info">
                                <h1>Standerd React Js</h1>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis voluptates animi doloremque velit maiores maxime dolore obcaecati vitae veniam earum.</p>
                            </div>
                            </div>
                        </Carousel.Caption>
                    </CarouselItem>

                </Carousel>
            </div>

            <div className="service-section">
                <Container>
                    <Row>
                        <Col md={4}>
                            <Row>
                                <Col md={3}>
                                    <div className="service-img">
                                        <img src="https://www.portotheme.com/wordpress/porto/corporate3/wp-content/uploads/sites/9/2018/12/seo-grey.png" alt="" />
                                    </div>
                            
                                </Col>
                                <Col md={9}>
                                    <div className="service-info">
                                        <h4>SEO Optimization</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit riam!</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                        <Row>
                                <Col md={3}>
                                    <div className="service-img">
                                        <img src="https://www.portotheme.com/wordpress/porto/corporate3/wp-content/uploads/sites/9/2018/12/marketing-grey.png" alt="" />
                                    </div>
                            
                                </Col>
                                <Col md={9}>
                                    <div className="service-info">
                                        <h4>Pro Marketing Ads</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit riam!</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                        <Row>
                                <Col md={3}>
                                    <div className="service-img">
                                        <img src="https://www.portotheme.com/wordpress/porto/corporate3/wp-content/uploads/sites/9/2018/12/support-grey.png" alt="" />
                                    </div>
                            
                                </Col>
                                <Col md={9}>
                                    <div className="service-info">
                                        <h4>Secure Support</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit riam!</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="about-section">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="about-info">
                                <h4>Who <span className='about-title'>We Are</span></h4>
                                <p className='descOne'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem aliquam fugit mollitia maxime aspernatur?</p>
                                <p className='descTwo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem aliquam fugit mollitia maxime aspernatur?</p>
                                <Button variant="dark">Learn More</Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src={about} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="team-section">
                <Container>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <div className="member">
                                        <img src="https://www.portotheme.com/wordpress/porto/corporate3/wp-content/uploads/sites/9/2016/06/team-5-1-367x367.jpg" alt="" />
                                        <h4>Jhone Driver</h4>
                                        <p>Software Developer</p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="member">
                                        <img src="https://www.portotheme.com/wordpress/porto/corporate3/wp-content/uploads/sites/9/2016/06/team-4-1-367x367.jpg" alt="" />
                                        <h4>Alan Walker</h4>
                                        <p>Software Developer</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <div className="team-info">
                                <h4>Meet <span className='team-title'>Our Team</span></h4>
                                <p className='descOne'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem aliquam fugit mollitia maxime aspernatur?</p>
                                <p className='descTwo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem aliquam fugit mollitia maxime aspernatur?</p>
                                <Button variant="dark">Learn More</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </>
    )
};

export default Home;
