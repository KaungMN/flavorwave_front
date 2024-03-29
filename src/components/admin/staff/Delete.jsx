import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function OrderConfirmModal({handleDelete ,id}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="me-2 btn-outline-danger" variant="outline-secondary" onClick={handleShow}>
                Disable
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="border-0"></Modal.Header>
                <Modal.Body className="pt-0 px-5">
                    <h5 style={{ fontWeight: 600 }} className="mb-3 text-center">
                        Are you sure you want to disable this staff?
                    </h5>
                    <div className="mx-auto my-3 d-flex justify-content-center">
                        <Button className="me-2 mx-3" variant="outline-success"
                        onClick={()=>handleDelete(id)}
                        >
                            Yes
                        </Button>

                        <Button
                            className="me-2"
                            variant="outline-secondary"
                            onClick={() => setShow(false)}
                        >
                            Cancel
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}