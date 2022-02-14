import { React, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Alert, CloseButton } from 'react-bootstrap';
import './Crud.css';

const Crud = () => {

  // Validation Alert
  const [alert, setAlert] = useState({
    msg : '',
    type : '', 
    status : false
  });

  // Data get form localStorage Method
  let getLSData = (key) => {

    let data = localStorage.getItem(key);

      if( data ){
        return JSON.parse(data);
      }else{
       return false;
      }


  }

   // SetItem to localStorage Method
   let setLSData = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));

  }

  // Form Submit Method
  const handleFormData = (e) => {
    e.preventDefault();

    let data = new FormData(e.target);
    let form_data = Object.fromEntries(data.entries(e.target.value));
  


    // Form Validation
    if( form_data.name == '' || form_data.email == '' || form_data.cell == '' || form_data.uname == '' || form_data.edu == '' || form_data.skill == '' ){
      setAlert({
        msg : 'All Feilds Are Required !',
        type : 'danger',
        status : true
      });
    }else{

      let ls_data = getLSData('student-data');
      let stu_arr;

      if( ls_data ){
        stu_arr = ls_data;
      }else{
        stu_arr = [];
      }

      stu_arr.push({
        name    : form_data.name,
        email   : form_data.email,
        cell    : form_data.cell,
        uname   : form_data.uname,
        edu     : form_data.edu,
        skill   : form_data.skill,
        gender  : form_data.gender,
        agree   : form_data.agree
      });


      setLSData('student-data', stu_arr);
      
      
    }

  }

  
    // Alert Close
    let handleAlertClose = () => {
      setAlert({
        msg : '',
        type : '',
        status : false
      });
    };


  return (
    <>
      
      <div className="singUpForm">
        <Form onSubmit={ handleFormData }>

          <Card>
            <Card.Header className='form-title'>
              <h4 className='text-center'>Add New Student</h4>
              {
                (alert.status) ? <Alert className='alert-validation' variant={alert.type}>{alert.msg} <CloseButton onClick={ handleAlertClose }></CloseButton></Alert>  : ''
              }
            </Card.Header>
          </Card>

          <Row>
            <Col md={6}>
            <Card>
              <Card.Body className='sing_up_form shadow'>
                  
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control name="name"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control name="email"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Cell Number</Form.Label>
                      <Form.Control name="cell"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>User Name</Form.Label>
                      <Form.Control name="uname"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Education</Form.Label>
                      <Form.Select name="edu">
                        <option>-- Select --</option>
                        <option>HSC</option>
                        <option>SSC</option>
                        <option>JSC</option>
                      </Form.Select>
                    </Form.Group>
              </Card.Body>
          </Card>
            </Col>
            <Col md={6}><Card>
              <Card.Body className='sing_up_form shadow'>
                <Form.Group>
                  <Form.Label>Skill</Form.Label>
                  <Form.Select name="skill">
                    <option>-- Select --</option>
                    <option>PHP</option>
                    <option>JavaScript</option>
                    <option>Python</option>
                    <option>React Js</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group>
                  <Form.Label>Hobbies</Form.Label><br />
                  <input name="hobbies[]" value='hobbie' type="checkbox" id='hobbie' /> <label htmlFor="hobbie"> Coding</label><br/>

                  <input name="hobbies[]" value='travel' type="checkbox" id='travel' /> <label htmlFor="travel"> Travelling</label><br/>

                  <input name="hobbies[]" value='eat' type="checkbox" id='eat' /> <label htmlFor="eat"> Eating</label><br/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Gender</Form.Label><br />
                  <input name="gender" value='Male' type="radio" id='Male' /> <label htmlFor="Male"> Male</label><br/>
                  <input name="gender" value='Female' type="radio" id='Female' /> <label htmlFor="Female"> Female</label>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Label>Permission</Form.Label><br />
                  <input name="agree" value='agree' type="checkbox" id='agree' /> <label htmlFor="agree"> Agree</label><br/>
                </Form.Group>
                
                
              </Card.Body>
          </Card></Col>
          </Row>

          
          <Card>
            <Card.Header className="text-center btn">
              <Button type="submit" variant="info">Submit</Button>
            </Card.Header>
          </Card>
          
        </Form>

      </div>

    </>
  )
};

export default Crud;

