import axios from 'axios';
import React from 'react';
import { Button, CloseButton, Form, Modal } from 'react-bootstrap';
import './CategoryModal.css';

const CategoryModal = (props) => {


    // Submit Form Data
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let form_data = new FormData(e.target);
        let data = Object.fromEntries(form_data.entries());

        axios.post('http://localhost:8000/Categories', {
            id      : null,
            name    : data.name
        })
        .then((res) => {

            props.alertMSG({
                msg     : 'Category Added Successfully',
                type    : 'success',
                status  : true
            });

            axios.get('http://localhost:8000/Categories')
            .then(res => props.autoReload(res.data.reverse()));

        });

        

        props.hide();


    }

    // Category Delete
    const handleCategoryDelete = () => {

        axios.delete('http://localhost:8000/Categories/' + props.dataId)
        .then((res) => {

            props.alertMSG({
                msg : 'Category Deleted Successfully',
                type : 'danger',
                status : true
            })

            axios.get('http://localhost:8000/Categories')
            .then(res => props.autoReload(res.data.reverse()));

        });

        props.hide();

    }


    // Category Form Update
    const handleFormUpdate = (e) => {
        e.preventDefault();

        let form_data = new FormData(e.target);
        let data = Object.fromEntries(form_data.entries());

        axios.put('http://localhost:8000/Categories/' + props.dataId, {

            id      : null,
            name    : data.name
    
        })
        .then( (result) => {

            axios.get('http://localhost:8000/Categories')
            .then( result => props.autoReload(result.data.reverse()));
            
            props.alertMSG({
                msg : 'Category Updated Successfully',
                type : 'success',
                status : true
            });
        });

        props.hide();

    }



    // Modal Rendering
  if(props.modalType == 'category-add'){
    return (
        <>
          <Modal show={ props.show } onHide={ props.hide } centered>
              <Modal.Header>
                  <h3>Add Category</h3>
                  <CloseButton onClick={ props.hide }></CloseButton>
              </Modal.Header>
              <Modal.Body>
  
                  <Form onSubmit={ handleFormSubmit } method="POST">
  
                      <Form.Group>
                          <Form.Label>Category Name</Form.Label>
                          <Form.Control name="name"></Form.Control>
                      </Form.Group>
  
                      <Button type='submit' variant='info' className='mt-3'>Submit</Button>
  
                  </Form>
              </Modal.Body>
          </Modal>
        </>
    );
  }else if(props.modalType == 'category-view'){
    return (
        <>
          <Modal show={ props.show } onHide={ props.hide } centered>
              <Modal.Header>
                  <h3>Single Category</h3>
                  <CloseButton onClick={ props.hide }></CloseButton>
              </Modal.Header>
              <Modal.Body className="d-flex justify-content-around s-category">
                <h3>{ props.viewCat.name }</h3>
                <img src="https://library.kissclipart.com/20180917/yw/kissclipart-shirt-clipart-shirt-suit-tops-dbac158c9901ce8e.png" alt="" />
              </Modal.Body>
          </Modal>
        </>
    );
  }else if(props.modalType == 'category-edit'){
    return (
        <>
          <Modal show={ props.show } onHide={ props.hide } centered>
              <Modal.Header>
                  <h3>Edit Category</h3>
                  <CloseButton onClick={ props.hide }></CloseButton>
              </Modal.Header>
              <Modal.Body>
  
                  <Form onSubmit={ handleFormUpdate } method="PUT">
  
                      <Form.Group>
                          <Form.Label>Category Name</Form.Label>
                          <Form.Control name="name" value={props.editCat.name}></Form.Control>
                      </Form.Group>
  
                      <Button type='submit' variant='info' className='mt-3'>Update</Button>
  
                  </Form>
              </Modal.Body>
          </Modal>
        </>
    );
  }else if(props.modalType == 'category-delete'){
    return (
        <>
          <Modal show={ props.show } onHide={ props.hide } centered>
              <Modal.Header>
                  <h3>Do you want to Delete ? </h3>
                  <CloseButton onClick={ props.hide }></CloseButton>
              </Modal.Header>
              <Modal.Body className='d-flex justify-content-end'>
  
                <Button onClick={ props.hide } variant='success'>Cancle</Button>&nbsp;
                <Button onClick={ handleCategoryDelete } variant='danger'>Delete</Button>
                  
              </Modal.Body>
          </Modal>
        </>
    );
  }
};

export default CategoryModal;
