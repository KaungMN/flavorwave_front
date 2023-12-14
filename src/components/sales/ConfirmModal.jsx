import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function OrderConfirmModal({ preorderId }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = async () => {
        const res = await axios.post(`http://localhost:8000/api/post-preorder/${preorderId}`, {
            preorder_ids: preorderId,
            staff_id: 3
        });

        const datas = res.data;
        console.log(datas);
        console.log(preorderId);

        const response = await axios.post(`http://localhost:8000/api/change-status`, {
            id: preorderId,
            status: 'approved'
        });
    };
    return (
        <>
            <Button className="me-2" variant="outline-success" onClick={handleShow}>
                Confrim
            </Button>

            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton className="border-0"></Modal.Header>
                <Modal.Body className="pt-0 px-5">
                    <h5 style={{ fontWeight: 600 }} className="mb-3 text-center">
                        Are you sure you want to confirm this order?
                    </h5>
                    <div className="mx-auto my-3 d-flex justify-content-center">
                        <Button className="me-2 mx-3" variant="outline-success" onClick={handleClick}>
                            Yes
                        </Button>
                        <Button className="me-2" variant="outline-secondary" onClick={() => setShow(false)}>
                            Cancel
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
