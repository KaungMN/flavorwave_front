import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddForm from './addForm';
import Button from 'react-bootstrap/Button';

export default function AddStaff({ initialData }) {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(initialData);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="me-2 float-end mt-3" variant="outline-success" onClick={handleShow}>
                Add Staff
            </Button>

            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton className="border-0"></Modal.Header>
                <Modal.Body className="pt-0 px-5">
                    <h5 style={{ fontWeight: 600 }} className="mb-3 text-center">
                        Add Staff
                    </h5>
                    <AddForm data={data} setShow={setShow} />
                </Modal.Body>
            </Modal>
        </>
    );
}
