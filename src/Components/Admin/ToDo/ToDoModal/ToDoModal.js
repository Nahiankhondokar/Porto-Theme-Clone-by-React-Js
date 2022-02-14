import React, { useState } from 'react';
import { Alert, Button, CloseButton, Form, Modal } from 'react-bootstrap';
import './ToDoModal.css';

const ToDoModal = (props) => {


    const [alert, setAlert] = useState({
        msg : '',
        type : '',
        status : false
    });



    // Form Submit
    let handleModalData = (e) => {
        e.preventDefault();

        let form_data = new FormData(e.target);
        let data = Object.fromEntries(form_data.entries(e.target.value));

        // Validation
        if( data.todo == '' || data.priority == '' || data.time == '' ||  data.date == '' ){
            setAlert({
                msg : 'All Feilds Are Required !',
                type : 'danger',
                status : true
            });
        }else{

            let getLSData = localStorage.getItem('todo-data');
            let todo_data_arr;

            if(getLSData){
                todo_data_arr = JSON.parse(getLSData);
            }else{
                todo_data_arr = [];
            }

            todo_data_arr.push({
                name : data.todo,
                priority : data.priority,
                date : data.date,
                time : data.time
            });

            localStorage.setItem('todo-data', JSON.stringify(todo_data_arr));
            props.closeModal();
            props.autoReload(todo_data_arr);

        }

    } 


    // Alert Close Button
    let handleAlertClose = () =>{
        setAlert({
            status : false
        });
    }


  return (
      <>
      <Modal show={ props.showModal } onHide={ props.closeModal } onSubmit={ handleModalData }>
            <Modal.Header>
                <h3>Add ToDo List</h3>
                <CloseButton onClick={ props.closeModal }></CloseButton>
            </Modal.Header>
            <Modal.Body>

                {
                    (alert.status) ? <Alert className='d-flex justify-content-between' variant={ alert.type }> { alert.msg } <CloseButton onClick={ handleAlertClose }></CloseButton></Alert> : ''
                }

                <Form>

                    <Form.Group>
                        <Form.Label>ToDo Name</Form.Label>
                        <Form.Control name="todo"></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>ToDo Priority</Form.Label>
                        <select className="form-control" name="priority">
                            <option value="">- Select -</option>
                            <option value="Important">Important</option>
                            <option value="Less Important">Less Important</option>
                            <option value="Ignore">Ignore</option>
                        </select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>ToDo Date</Form.Label>
                        <input type="date" className='form-control' name="date" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>ToDo Time</Form.Label>
                        <input type="time" className='form-control' name="time" />
                    </Form.Group>

                    <Button type='submit' variant='info' className='mt-3'>Submit</Button>

                </Form>
            </Modal.Body>
        </Modal>
      </>
  );
};

export default ToDoModal;
