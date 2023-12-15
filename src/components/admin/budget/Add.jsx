import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddForm from './AddForm';
import Button from 'react-bootstrap/Button';

export default function AddStaff() {
    const [show, setShow] = useState(false);
    const [data, setData] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="me-2 float-right mt-3" variant="outline-success" onClick={handleShow}>
                Add Budget
            </Button>

            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton className="border-0"></Modal.Header>
                <Modal.Body className="pt-0 px-5">
                    <h5 style={{ fontWeight: 600 }} className="mb-3 text-center">
                        Add Budget
                    </h5>
                    <AddForm />
                </Modal.Body>
            </Modal>
        </>
    );
}
