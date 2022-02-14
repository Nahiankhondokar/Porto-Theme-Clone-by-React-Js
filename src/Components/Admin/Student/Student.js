import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import './Student.css';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import SingleStudentModal from './SingleStudentModal/SingleStudentModal';

const Student = () => {

  let index_num = 1;
  const [tables, setTables] = useState([]);

  useEffect(() => {

   let data = localStorage.getItem('student-data');
   setTables(JSON.parse(data));

  }, []);


  return (
    <>

      <Card>
        <Card.Header>
          <h4 className='text-center'>All Students</h4>
        </Card.Header>
        <Card.Body className='student-table shadow'>
            <Table>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>User Name</th>
                      <th>Skill</th>
                      <th>Education</th>
                      <th>Hobbies</th>
                      <th>Gender</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>

                {

                  (tables == null) ? '' :
                  
                  tables.map((value, index) =>
                                      
                  <tr>
                      <td>{ index_num++ }</td>
                      <td>{ value.uname }</td>
                      <td>{ value.skill }</td>
                      <td>{ value.edu }</td>
                      <td>Coding</td>
                      <td>{ value.gender }</td>
                      <td>
                        <Button variant='info'> <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> </Button>
                        <Button variant='warning'> <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> </Button>
                        <Button variant='danger'> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </Button>
                      </td>
                    </tr>

                  ) 


                  
                }
              
                    

              </tbody>
          </Table>
        </Card.Body>
      </Card>
      
     

    </>
  )
};

export default Student;
