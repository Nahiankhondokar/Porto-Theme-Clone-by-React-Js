import React, { useEffect } from 'react';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Alert, Button, Card, CloseButton, Table } from 'react-bootstrap';
import './Brand.css';
import BrandModal from './BrandModal/BrandModal';
import axios from 'axios';

const Brand = () => {

  // Modal manage
  const [modalShow, setModalShow] = useState(false);
  const handleModalShow = () => setModalShow(true);
  const handleModalClose = () => setModalShow(false);

  // all data show
  const [allData, setAllData] = useState([]);

  // Alert manage
  const [alert, setAlert] = useState({
    msg     : '',
    type    : '',
    status  : false
  });

  // alert Close
  const handleAlertClose = () => {
    setAlert({
      status : false
    });
  }

  // Brand id
  const [brandId, setBrandId] = useState(0);

  // Modal Type
  const [modalType, setModalType] = useState('brand-add');

  // Brand delete
  const handleDeleteBrand = (id) => {
    setBrandId(id);
    setModalType('brand-delete');
    handleModalShow();
  }

  // Brand Add
  const handleAddBrand = () => {
    setModalType('brand-add');
    handleModalShow();
  }


  // Brand View
  const [viewBrand, setViewBrand] = useState('');
  const handleViewBrand = (id) => {
    axios.get('http://localhost:8000/Brands/' + id)
    .then(res => setViewBrand(res.data));

    setModalType('brand-view');
    handleModalShow();

  }


  // Brand Edit
  const [editBrand, setEditBrand] = useState('');
  const handleEditBrand = (id) => {
    axios.get('http://localhost:8000/Brands/' + id)
    .then(res => setEditBrand(res.data));

    setBrandId(id);
    setModalType('brand-edit');
    handleModalShow();

  }

  // get all data
  useEffect( () => {

    axios.get('http://localhost:8000/Brands')
    .then(res => setAllData(res.data.reverse()));


  });


  return (
    <>
    <BrandModal modalType={ modalType } brandId={ brandId } show={ modalShow } hide={ handleModalClose } alert={setAlert} reload={setAllData} viewBrand={viewBrand} editBrand={editBrand}></BrandModal>
    <Card>
        <Card.Header>
          <h4 className='text-center'>All Brand</h4>
          {
            (alert.status == true) ? 
            <Alert className="d-flex justify-content-between" variant={alert.type}>{alert.msg}<CloseButton onClick={ handleAlertClose }></CloseButton></Alert> : ''
          }
        </Card.Header>
        <Card.Body className='brand-table shadow'>
            <Table>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Brand Name</th>
                      <th>Photo</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>

              {
                allData.map( (d, i) => 
                
                  <tr>
                    <td>{ i + 1 }</td>
                    <td>{ d.name }</td>
                    <td><img src={ d.img } alt="" /></td>
                    <td>
                    <Button onClick={ () => handleViewBrand(d.id) } variant='info'> <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> </Button>
                    <Button onClick={ () => handleEditBrand(d.id) } variant='warning'> <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> </Button>
                    <Button onClick={ () => handleDeleteBrand(d.id) } variant='danger'> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </Button>
                    </td>
                  </tr>   
                
                )
              }   

              </tbody>
          </Table>
          <Button onClick={ handleAddBrand } variant="info">New Brand</Button>
        </Card.Body>
    </Card>       
    </>
  )
}

export default Brand;