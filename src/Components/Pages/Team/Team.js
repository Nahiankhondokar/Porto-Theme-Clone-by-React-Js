import { React, useState, useEffect } from 'react';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel, CarouselItem, Col, Container, Row, Button } from 'react-bootstrap';
import "./Team.css";
import Skeleton from 'react-loading-skeleton';



const Team = () => {


    const [teams, setTeams] = useState([]);

    useEffect(() => {

        setInterval(() => {

            fetch('http://localhost:8000/users')
            .then(data => data.json())
            .then( data => setTeams(data) );

        }, 2000);
       
    }, [])

    return (
        <>

        <div className="page-team-section">
            
            <div className="section-banner">
                    <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2021/04/blog-title-bg-opt.jpg" alt="" />
                    <div className="section-banner-title">
                        <h1>Team Member</h1>
                    </div>
            </div>
            
            <Container>
                    <Row>
                        
                        
                        {
                            
                        teams.length > 0 ? 

                            teams.map( (data) =>

                                <Col md={3}>
                                    <div className="team-member">
                                        <img src={ data.image } alt="" />
                                        <h4>{ data.name }</h4>
                                        <p>{ data.skill }</p>
                                        <div className="member-social-media">
                                            <ul>
                                                <li><a href=""><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
                                                <li><a href=""><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                                                <li><a href=""><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
                                                <li><a href=""><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>


                            )

                        :

                            <>
                                <Col md={3}>
                                    <Skeleton width="200px" height="200px" />
                                    <Skeleton width="100px" height="20px" />
                                    <Skeleton width="80px" height="20px" />
                                    <Skeleton width="50px" height="20px" />
                                </Col> 

                                <Col md={3}>
                                    <Skeleton width="200px" height="200px" />
                                    <Skeleton width="100px" height="20px" />
                                    <Skeleton width="80px" height="20px" />
                                    <Skeleton width="50px" height="20px" />
                                </Col> 
                                
                                <Col md={3}>
                                    <Skeleton width="200px" height="200px" />
                                    <Skeleton width="100px" height="20px" />
                                    <Skeleton width="80px" height="20px" />
                                    <Skeleton width="50px" height="20px" />
                                </Col> 

                                <Col md={3}>
                                    <Skeleton width="200px" height="200px" />
                                    <Skeleton width="100px" height="20px" />
                                    <Skeleton width="80px" height="20px" />
                                    <Skeleton width="50px" height="20px" />
                                </Col> 
                            </>
                       

                        
                        
                    }
                    
                    </Row>
                </Container>
            </div>
            
        </>
    )
};

export default Team;
