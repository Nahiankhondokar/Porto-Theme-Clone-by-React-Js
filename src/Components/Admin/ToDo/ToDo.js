import React, { useState, useEffect } from 'react';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import './ToDo.css';
import ToDoModal from './ToDoModal/ToDoModal';


const ToDo = () => {

    let index_num = 1;
    const [modalShow, setModalShow] = useState(false);


    // todo Lish Show
    const [todoShow, setTodoShow] = useState([]);
    useEffect(() => {

        let getLSData = localStorage.getItem('todo-data');
        setTodoShow(JSON.parse(getLSData));

    }, []);



    // Modal Manage
    let handleModalShow = () => setModalShow(true);
    let handleModalClose = () => setModalShow(false);


  return (
    <>
    <section className="todo">
        <Card>
            <Card.Header>
            <h4 className='text-center'>ToDo List</h4>
            </Card.Header>
            <Card.Body className='product-table shadow'>
                <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ToDo Name</th>
                        <th>Priority</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        (todoShow == null) ? '' : 
                            todoShow.map((value, index) =>
                                <tr>
                                    <td>{ index_num++ }</td>
                                    <td>{ value.name }</td>
                                    <td>{ value.priority }</td>
                                    <td>{ value.time }</td>
                                    <td>{ value.date }</td>
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
            <Button onClick={ handleModalShow } className='add-todo' variant="info">Add New ToDo</Button>
            </Card.Body>
        </Card>
        
        <ToDoModal showModal={ modalShow } closeModal={ handleModalClose } autoReload={ setTodoShow }></ToDoModal>
    </section>
    </>
  );
};

export default ToDo;
