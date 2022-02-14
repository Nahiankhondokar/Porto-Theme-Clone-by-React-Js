import { React, useState, useEffect } from 'react';
import { Button, Card, CloseButton, Form, Modal } from 'react-bootstrap';
import './ProductAddModal.css';
import axios from 'axios';


const ProductAddModal = (props) => {

    // Get Category & Brands
    const [brand, setBrand] = useState([]);
    const [category, setCategory] = useState([]);


    useEffect(() => {

        axios.get('http://localhost:8000/Brands').then(res => setBrand(res.data));
        axios.get('http://localhost:8000/Categories').then(res => setCategory(res.data));
    
    }, []);

    // Update Data
    const handleFormUpdate = (e) => {
      e.preventDefault();

      let form_data = new FormData(e.target);
      let data = Object.fromEntries(form_data.entries());


      axios.put('http://localhost:8000/Products/' + props.dataId, {
        id          : null,
        categoryId  : data.cat,
        brandId     : data.brand,
        name        : data.product_name,
        desc        : data.desc,
        price       : data.price,
        sprice      : data.sprice,
        stock       : data.stock,
        img         : data.img

      })
      .then( (res) => {
        
        props.alert({
          msg : 'Product Updated Successfully',
          type : 'success',
          status : true
        });

      });

      // Data Get For autoreload
      axios.get('http://localhost:8000/Products').then(res => props.autoReload(res.data.reverse()));
      props.closeModal();

    }
    
    // Data Delete
    const handleDataDelete = () => {

        axios.delete('http://localhost:8000/Products/' + props.dataId)
        .then(res => {

            axios.get('http://localhost:8000/Products')
            .then(res => props.autoReload(res.data.reverse()));
            props.closeModal();
            props.alert({
              msg : 'Product Deleted Successfully',
              type : 'danger',
              status : true
            });

        });

    }




  // Get Form Data
  let handleFormData = (e) => {
      e.preventDefault();

      let form_data = new FormData(e.target);
      let data = Object.fromEntries(form_data.entries());
      
      axios.post('http://localhost:8000/products', {

          id          : null,
          categoryId  : data.cat,
          brandId     : data.brand,
          name        : data.product_name,
          desc        : data.desc,
          price       : data.price,
          sprice      : data.sprice,
          stock       : data.stock,
          img         : data.img

      }).then( (res) => {

          props.alert({
            msg : 'Product Added Successfully',
            type : 'success',
            status : true
          });

      axios.get('http://localhost:8000/Products')
      .then(res => props.autoReload(res.data.reverse()));

      });

      // Data Get For autoreload
      props.closeModal();

  }

 




  // Modal Rendering Dependes on the Type
  if(props.type == 'product-form'){
    return (
        <>
          <Modal show={ props.showModal } onHide={ props.closeModal } >
            <Modal.Header>
              <h3>Add New Product</h3>
              <CloseButton onClick={ props.closeModal } className='d-flex justify-content-between'></CloseButton>
              
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={ handleFormData } method="POST">
  
                  <Form.Group>
                      <Form.Label>Product Name</Form.Label>
                      <Form.Control name="product_name"></Form.Control>
                  </Form.Group>
  
                  <Form.Group>
                      <Form.Label>Sale Price</Form.Label>
                      <input type="number" className='form-control' name="sprice" />
                  </Form.Group>
  
                  <Form.Group>
                      <Form.Label>Regular Price</Form.Label>
                      <input type="number" className='form-control' name="price" />
                  </Form.Group>
  
                  <Form.Group>
                      <Form.Label className='d-block'>Brand</Form.Label>
                      <Form.Select name="brand">
                          <option value="">- select -</option>
                          {
                              brand.map((d, i)=>
                                  <option value={ d.id }>{ d.name }</option>
                              )
                          }
                      </Form.Select>
                  </Form.Group>
  
                  <Form.Group>
                      <Form.Label className='d-block'>Category</Form.Label>
                      <Form.Select name="cat">
                          <option value="">-select-</option>
                          {
                              category.map((d, i)=>
                                  <option value={ d.id }>{ d.name }</option>
                              )
                          }
                      </Form.Select>
                  </Form.Group>
  
                  <Form.Group>
                      <Form.Label>Product Stock</Form.Label>
                      <input type="number" className='form-control' name="stock" />
                  </Form.Group>
  
                  <Form.Group>
                      <Form.Label className='d-block'>Product Photo</Form.Label>
                      <input type="text" className='form-control' name="img" />
                  </Form.Group>
  
                  <Form.Group>
                      <Form.Label>Product Description</Form.Label>
                      <textarea name="desc" id="" cols="30" rows="2"></textarea>
                  </Form.Group>
  
                  <Button type='submit' variant='info' className='mt-3'>Submit</Button>
  
              </Form>
            </Modal.Body>
          </Modal>
        </>
    );
  }else if(props.type == 'product-delete'){
    return (
        <>
          <Modal show={ props.showModal } onHide={ props.closeModal } centered>
            <Modal.Header>
              <h3>Do you want to Delete ? </h3>
              <CloseButton onClick={ props.closeModal } className='d-flex justify-content-between'></CloseButton>
            </Modal.Header>
            <Modal.Body className='text-center'>
              <Button onClick={ props.closeModal } variant='success'>Cancle</Button>&nbsp;
              <Button onClick={ handleDataDelete } variant='danger'>Delete</Button>
            </Modal.Body>
          </Modal>
        </>
    );
  }else if(props.type == 'product-view'){
    return (
        <>
          <Modal show={ props.showModal } onHide={ props.closeModal } centered>
            <Modal.Header>
              <h3>{ props.viewData.name } </h3>
              <CloseButton onClick={ props.closeModal } className='d-flex justify-content-between'></CloseButton>
            </Modal.Header>
            <Modal.Body className='text-center'>
                <img style={{ height: '100px' }} src={ props.viewData.img } alt="" />
                <hr />
                <h3>Name : { props.viewData.name }</h3>
                <h4>Price : { props.viewData.price }</h4>
                <h4>Sale Price : { props.viewData.sprice }</h4>
                <h4>Stock : { props.viewData.stock }</h4>
            </Modal.Body>
          </Modal>
        </>
    );
  }if(props.type == 'product-edit'){
    return (
        <>
          <Modal show={ props.showModal } onHide={ props.closeModal } >
            <Modal.Header>
              <h3>Product Edit</h3>
              <CloseButton onClick={ props.closeModal } className='d-flex justify-content-between'></CloseButton>
              
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={ handleFormUpdate } method="PUT">
  
                  <Form.Group>
                      <Form.Label>Product Name</Form.Label>
                      <Form.Control name="product_name" value={ props.editData.name }></Form.Control>
                  </Form.Group>
  
                  <Form.Group>
                      <Form.Label>Sale Price</Form.Label>
                      <input type="number" className='form-control' name="sprice" value={ props.editData.sprice }/>
                  </Form.Group>
  
                  <Form.Group>
                      <Form.Label>Regular Price</Form.Label>
                      <input type="number" className='form-control' name="price" value={ props.editData.price }/>
                  </Form.Group>
  
                  <Form.Group>
                      <Form.Label className='d-block'>Brand</Form.Label>
                      <Form.Select name="brand">
                          <option value="">-select-</option>
                          {
     
                              brand.map((d, i)=>
                               
                                (d.id == props.editData.brandId) ? 
                                <option value={ d.id } selected>{ d.name }</option> 
                                : 
                                <option value={ d.id }>{ d.name }</option>

                              )
                          }
                      </Form.Select>
                  </Form.Group>
  
                  <Form.Group>
                      <Form.Label className='d-block'>Category</Form.Label>
                      <Form.Select name="cat">
                          <option value="">{props.editData.categoryId}</option>
                          {
                              category.map((d, i) =>
                                  (props.editData.categoryId == d.id) ? 
                                  <option value={ d.id } selected>{ d.name }</option>
                                  : 
                                  <option value={ d.id }>{ d.name }</option>
                              )
                          }
                      </Form.Select>
                  </Form.Group>
  
                  <Form.Group>
                      <Form.Label>Product Stock</Form.Label>
                      <input type="number" className='form-control' name="stock" value={ props.editData.stock }/>
                  </Form.Group>
  
                  <Form.Group>
                      <Form.Label className='d-block'>Product Photo</Form.Label>
                      <input type="text" className='form-control' name="img" value={ props.editData.img }/>
                  </Form.Group>
  
                  <Form.Group>
                      <Form.Label>Product Description</Form.Label>
                      <textarea name="desc" id="" cols="30" rows="2" value={ props.editData.desc }></textarea>
                  </Form.Group>
  
                  <Button type='submit' variant='info' className='mt-3'>Submit</Button>
  
              </Form>
            </Modal.Body>
          </Modal>
        </>
    );
  }
};

export default ProductAddModal;
