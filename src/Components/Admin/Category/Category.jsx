import React from 'react';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Button, Card, CloseButton, Table } from 'react-bootstrap';
import './Category.css';
import { useState, useEffect } from 'react';
import CategoryModal from './CategoryModal/CategoryModal';
import axios from 'axios';

const Category = () => {

      // Alert manage
      const [alertMSG, setAlertMSG] = useState({
        msg   : '',
        type  : '',
        status : false
      });

    // Alert Close
    const handleAlertClose = () => {
      setAlertMSG({
        status : false
      });
    } 
  

    // Modal manage
    const [modal, setModal] = useState(false);
    const modalShow = () => setModal(true);
    const modalHide = () => setModal(false);


    // All Data Show
    const [dataShow, setDataShow] = useState([]);

    // Modal type
    const [modalType, setModalType] = useState('category-add');

    // id rendering
    const [dataId, setDataId] = useState('');

    // Add data
    const handleAddData = () => {
 
      setModalType('category-add');
      modalShow();

    }

    // Delete Category
    const handleDeleteData = (id) => {
 
      setDataId(id);
      setModalType('category-delete');
      modalShow();

    }

    // Category View
    const [viewCat, setviewCat] = useState('');
    const handleViewData = (id) => {
      axios.get('http://localhost:8000/Categories/' + id)
      .then(res => setviewCat(res.data));

      setModalType('category-view');
      modalShow();
    }

    // Category edit
    const [editCat, setEditCat] = useState('');
    const handleEditData = (id) => {
      axios.get('http://localhost:8000/Categories/' + id)
      .then(res => setEditCat(res.data));

      setDataId(id);
      setModalType('category-edit');
      modalShow();
    }


    // Get Data
    useEffect( () => {

      axios.get('http://localhost:8000/Categories')
      .then(res => setDataShow(res.data));

    }, []);


    // Table
  return (
      <>
      <CategoryModal dataId={ dataId } modalType={ modalType } alertMSG={ setAlertMSG } show={ modal } hide={ modalHide } autoReload={ setDataShow } viewCat={ viewCat } editCat={ editCat }></CategoryModal>
      <Card>
        <Card.Header>
          <h4 className='text-center'>All Categories</h4>
          {
            (alertMSG.status == true) ? <Alert variant={alertMSG.type} className="d-flex justify-content-between">{ alertMSG.msg }<CloseButton onClick={ handleAlertClose }></CloseButton></Alert> : ''
          }
        </Card.Header>
        <Card.Body className='cat-table shadow'>
            <Table>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Category Name</th>
                      <th>Products</th>
                      <th>Photo</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>

              {
                dataShow.map( (d, i) => 
                
                  <tr>
                      <td>{ i + 1 }</td>
                      <td>{ d.name }</td>
                      <td></td>
                      <td><img src="https://library.kissclipart.com/20180917/yw/kissclipart-shirt-clipart-shirt-suit-tops-dbac158c9901ce8e.png" alt="" /></td>
                      <td>
                      <Button onClick={ () => handleViewData(d.id) } variant='info'> <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> </Button>
                      <Button onClick={ () => handleEditData(d.id) } variant='warning'> <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> </Button>
                      <Button onClick={ () => handleDeleteData(d.id) } variant='danger'> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </Button>
                      </td>
                  </tr> 
                
                )
              }   

              </tbody>
          </Table>
          <Button onClick={ handleAddData } variant="info">New Category</Button>
        </Card.Body>
      </Card>
      
      </>
  );
};

export default Category;
