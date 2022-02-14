import React from 'react';
import { Button, CloseButton, Form, Modal } from 'react-bootstrap';
import './BrandModal.css';
import axios from 'axios';

const BrandModal = (props) => {
 
    // form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        

        let form_data = new FormData(e.target);
        let data = Object.fromEntries(form_data.entries());

        axios.post('http://localhost:8000/Brands', {
            id      : null,
            name    : data.name,
            img     : data.img
        })
        .then(res => {

            axios.get('http://localhost:8000/Brands')
            .then(res => props.reload(res.data.reverse()));

            props.alert({
                msg     : 'Brand Added Successfully',
                type    : 'success',
                status  : true
            })

        });

        props.hide();

    }

    // Brand delete
    const handleBrandDelete = () => {

        axios.delete('http://localhost:8000/Brands/' + props.brandId)
        .then(res => {

            axios.get('http://localhost:8000/Brands')
            .then( res => props.reload(res.data.reverse()));

             props.alert({
                msg     : 'Brand Deleted Successfully',
                type    : 'danger',
                status  : true
            })

            props.hide();

        });

        
    }


    // Brand Update
    const handleFormUpdate = (e) => {
        e.preventDefault();

        let form_data = new FormData(e.target);
        let data = Object.fromEntries(form_data.entries());

        axios.put('http://localhost:8000/Brands/' + props.brandId, {
            id      : null,
            name    : data.name
        })
        .then( (res) => {

            axios.get('http://localhost:8000/Brands')
            .then(res => props.reload(res.data.reverse()));

            props.alert({
                msg     : 'Brand Updated Successfully',
                type    : 'success',
                status  : true
            })


        });

        props.hide();

    }




  // Modal Rendering
  if(props.modalType === 'brand-add'){
    return (
        <>
            <Modal show={props.show} onHide={props.hide} centered>
                <Modal.Header>
                    <h3>Add Category</h3>
                    <CloseButton onClick={ props.hide }></CloseButton>
                </Modal.Header>
                <Modal.Body>
    
                    <Form onSubmit={ handleFormSubmit } method="POST">
    
                        <Form.Group>
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control name="name"></Form.Control>
                        </Form.Group>
    
                        <Form.Group>
                            <Form.Label>Brand Photo</Form.Label>
                            <Form.Control name="img"></Form.Control>
                        </Form.Group>
    
                        <Button type='submit' variant='info' className='mt-3'>Submit</Button>
    
                    </Form>

                </Modal.Body>
            </Modal>
        </>
      )
  }else if(props.modalType === 'brand-delete'){
    return (
        <>
            <Modal show={props.show} onHide={props.hide} centered>
                <Modal.Header>
                    <h3>Do you want to Delete ?</h3>
                    <CloseButton onClick={ props.hide }></CloseButton>
                </Modal.Header>
                <Modal.Body className='d-flex justify-content-end'>
                    <Button onClick={ props.hide } variant="success">Cancel</Button>&nbsp;
                    <Button onClick={ handleBrandDelete } variant="danger">Delete</Button>
                </Modal.Body>
            </Modal>
        </>
      )
  }else if(props.modalType === 'brand-edit'){
    return (
        <>
            <Modal show={props.show} onHide={props.hide} centered>
                <Modal.Header>
                    <h3>Brand Edit</h3>
                    <CloseButton onClick={ props.hide }></CloseButton>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={ handleFormUpdate } method="PUT">
    
                        <Form.Group>
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control value={props.editBrand.name} name="name"></Form.Control>
                        </Form.Group>

                        <Button type='submit' variant='info' className='mt-3'>Update</Button>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
      )
  }else if(props.modalType === 'brand-view'){
    return (
        <>
            <Modal show={props.show} onHide={props.hide} centered>
                <Modal.Header>
                    <h3>Single Brand</h3>
                    <CloseButton onClick={ props.hide }></CloseButton>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-around s-brand">
                    <h3>{ props.viewBrand.name }</h3>
                    <img src={ props.viewBrand.img } alt="" />
                </Modal.Body>
            </Modal>
            
        </>
      )
  }
}

export default BrandModal;