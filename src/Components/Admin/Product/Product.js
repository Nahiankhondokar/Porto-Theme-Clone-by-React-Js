import React, { useEffect, useState } from 'react';
import { Card, Button, Table, Alert, CloseButton } from 'react-bootstrap';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';
import ProductAddModal from './ProductAddModal/ProductAddModal';
import axios from 'axios';


const Product = () => {

  // Product Modal Manage or product show
  let index_num = 1;
  const [productModalShow, setProductModalShow] = useState(false);
  const [productShow, setProductShow] = useState([]);


  // Alert Message
  const [stableAlert, setStableAlert] = useState({
    msg : '',
    type : '',
    status : false
  });
  // Alert Close
  let handleAlert = () => setStableAlert({
    status : false
  });

  
  // Modal Manage
  let handleProductModalShow = () => setProductModalShow(true);
  let handleProductModalClose = () => setProductModalShow(false);

  // Type props manage
  const [modalType, setModalType] = useState('product-form');
  const handleModalManage = () => {
    setModalType('product-form');
    handleProductModalShow();
  }

  // Delete Data
  const handleDeleteModal = (id) => {
    setDataId(id);
    setModalType('product-delete');
    handleProductModalShow();
  }
  const [dataId, setDataId] = useState(0);

  // View Data
  const [dataView, setDataView] = useState('');
  const handleViewModal = (id) => {
    
    axios.get('http://localhost:8000/Products/' + id)
    .then(res => setDataView(res.data));

    setModalType('product-view');
    handleProductModalShow();
  }


  // Edit Data
  const [dataEdit, setDataEdit] = useState('');
  const handleEditModal = (id) => {
    setDataId(id);
    axios.get('http://localhost:8000/Products/' + id)
    .then(res => setDataEdit(res.data));

    setModalType('product-edit');
    handleProductModalShow();

  }

  





  // Get Data From API
  useEffect(() => {

    axios.get('http://localhost:8000/Products').then(res => setProductShow(res.data.reverse()));

  }, []);



  return (
    <>
      
      <Card>
        <Card.Header>
          <h4 className='text-center'>All Products</h4>
          {
            (stableAlert.status == true) ? <Alert className='d-flex justify-content-between' variant={ stableAlert.type }>{ stableAlert.msg } <CloseButton onClick={ handleAlert }></CloseButton></Alert> : ''
          }
        </Card.Header>
        <Card.Body className='product-table shadow'>
            <Table>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Regu Price</th>
                      <th>Stock</th>
                      <th>Brand</th>
                      <th>Photo</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>


              {
                productShow.map( (data, index) => 
                
                    <tr>
                      <td>{ index_num++ }</td>
                      <td>{ data.name }</td>
                      <td>{ data.price }</td>
                      <td>{ data.stock }</td>
                      <td>{ data.brandId }</td>
                      <td>
                        <img src={ data.img } alt="" />
                      </td>
                      <td>
                          <Button onClick={ () => handleViewModal(data.id) }  variant='info'> <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> </Button>
                          <Button onClick={ () => handleEditModal(data.id) } variant='warning'> <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> </Button>
                          <Button onClick={ () => handleDeleteModal(data.id) } variant='danger'> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </Button>
                      </td>
                    </tr>
                
                )
              }


              </tbody>
          </Table>
          <Button onClick={ handleModalManage } className='add-staff' variant="info">New Product</Button>
        </Card.Body>
      </Card>

      <ProductAddModal type={ modalType } showModal={ productModalShow } closeModal={ handleProductModalClose } autoReload={ setProductShow } alert={ setStableAlert } dataId={ dataId } viewData={ dataView } editData={ dataEdit }></ProductAddModal>

    </>
  );
};

export default Product;
