import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function ApproveDeliveryModal({ initialData }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(initialData);

    const handleClick = async () => {
        const res = await axios.post(`http://localhost:8000/api/change-deli-status`, {
            preorder_id: initialData.preorder_id,
            id: initialData.id,
            status: 'approved'
        });
        setShow(false);

        const datas = res.data;
        console.log(datas);
    };

    return (
        <>
            <Button className="me-2" variant="outline-success" onClick={handleShow}>
                Approve
            </Button>

            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton className="border-0"></Modal.Header>
                <Modal.Body className="pt-0 px-5">
                    <h5 style={{ fontWeight: 600 }} className="mb-3 text-center">
                        Are you sure you want to approve this order's delivery?
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
