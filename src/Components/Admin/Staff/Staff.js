import React from 'react';
import { Card, Button, Table } from 'react-bootstrap';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Staff.css';


const Staff = () => {
  return (
    <>
      
      <Card>
        <Card.Header>
          <h4 className='text-center'>All Staff</h4>
        </Card.Header>
        <Card.Body className='product-table shadow'>
            <Table>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>product Name</th>
                      <th>Sale Price</th>
                      <th>Regu Price</th>
                      <th>Stock</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
              <tr>
                  <td>1</td>
                  <td>Nahian</td>
                  <td>PHP</td>
                  <td>Honours</td>
                  <td>Coding</td>
                  <td>
                      <Button variant='info'> <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> </Button>
                      <Button variant='warning'> <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> </Button>
                      <Button variant='danger'> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </Button>
                  </td>
              </tr>
              </tbody>
          </Table>
          <Button className='add-staff' variant="info">New Saff</Button>
        </Card.Body>
      </Card>
    
    </>
  )
};

export default Staff;
