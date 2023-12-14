import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ConfirmationModal({ isOpen, handleClose, orderData, totalPrice, onNewOrder }) {
    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure to order?</p>
                {onNewOrder}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary">Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmationModal;
