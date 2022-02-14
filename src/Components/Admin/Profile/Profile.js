import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Profile.css';

const Profile = () => {
  return (
    <>
      
      <section className='admin-panel shadow'>

        <Card>
            <Card.Header>
              <h2 className='text-center'>User Profile</h2>
            </Card.Header>
            <Card.Body>
                <Row className='profile-area'> 
                  <Col md={4} className='img-separetor'>
                    <img src="https://assets.webiconspng.com/uploads/2016/11/avatar_business_costume_male_man_office_work_icon_628289.png" alt="" />
                  </Col>
                  <Col md={8}>
                    <div className="user-profile">
                      <p>User Information</p>
                      <hr />
                      <ul className="profile-info">
                        <li>Name  <span>:</span> Abdulla Al Nahian</li>
                        <li>Email  <span>:</span> nahi@gmail.com</li>
                        <li>Skill  <span>:</span> Web Developer</li>
                        <li>Cell  <span>:</span> 01308663002</li>
                        <li className='social-media'>
                          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
            </Card.Body>
          </Card>

      </section>
        
  
    </>
  )
};

export default Profile;
