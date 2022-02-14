import React from 'react';
import { Modal } from 'bootstrap';
import './SingleStudentModal.css';



const SingleStudentModal = (props) => {
  return (
      <>
        <Modal show={props.modalShow}>
          <Modal.Header>
            <h3>Single Student Data</h3>
          </Modal.Header>
          <Modal.Body>

          </Modal.Body>
        </Modal>
      </>
  );
};

export default SingleStudentModal;
