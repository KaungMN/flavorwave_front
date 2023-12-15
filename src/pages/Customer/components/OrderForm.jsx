import { Button, Col, Form, Modal, ModalHeader, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Cities, Townships } from '../../../datas/CitiesAndTownship';
import { useOrder } from '../../../services/order';
import axios from 'axios';
import { useState } from 'react';
import { customerOrder } from '../../../services/order';
import { DEFAULT_ROUTE } from '../../../constants/routes';
import { useNavigate } from 'react-router-dom';

function AddOrder({ isOpen, setIsAddressModal, handleClose, orderData, totalPrice }) {
    const nagivate = useNavigate();
    const [isOpenConfirm, setIsOpenConfirm] = useState(false);
    const [newOrderData, setNewOrderData] = useState({});

    const handleCloseConfirm = () => {
        setIsOpenConfirm(false);
        setIsAddressModal(true);
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        handleClose();
        setIsOpenConfirm(true);
        const newData = {
            ...data,
            quantity: 2,
            orderType: 'wholesale',
            status: 'pending',
            products: JSON.stringify(orderData),
            totalPrice: totalPrice,
            customer_id: 1
        };
        setNewOrderData(newData);
    };

    const handleConfirm = async () => {
        await customerOrder(newOrderData);
        setIsOpenConfirm(false);
        nagivate(DEFAULT_ROUTE);
    };

    const CustomCloseButton = (
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
        </button>
    );
    return (
        <>
            <Modal show={isOpen} onHide={handleClose}>
                <ModalHeader closeButton={CustomCloseButton}>
                    <Modal.Title>Cart List</Modal.Title>
                </ModalHeader>
                <div className="contact-form-section p-4">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <Row>
                                <Col>Item</Col>
                                <Col>Boxes</Col>
                                <Col>Price</Col>
                            </Row>
                            {orderData.map((order, index) => (
                                <Row key={index}>
                                    <Col>{order.name}</Col>
                                    <Col>{order.quantity}</Col>
                                    <Col>
                                        {order.price
                                            ? order.price
                                            : order.subTotalPrice && order.subTotalPrice.toFixed(2)}{' '}
                                        <span>$</span>
                                    </Col>
                                </Row>
                            ))}
                            <Row className="mt-2">
                                <Col className="col-sm\-8">Total Price</Col>
                                <Col className="col-sm-4">
                                    {totalPrice && totalPrice.toFixed(2)}
                                    <span>$</span>
                                </Col>
                            </Row>
                            <hr />
                            <h5 className="mt-3">Confirm Your Contact</h5>
                            <Row>
                                <Col>
                                    <Form.Control
                                        size="md"
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Name*"
                                        required
                                        {...register('name', { required: true })}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control size="md" type="email" placeholder="Email*" />
                                </Col>
                            </Row>
                        </div>
                        <div className="mb-4">
                            <Row>
                                <Col>
                                    <Form.Select
                                        id="orderType"
                                        name="orderType"
                                        size="md"
                                        required
                                        {...register('orderType', { required: true })}
                                    >
                                        <option disabled selected value={''}>
                                            Order Type
                                        </option>
                                        <option>Delivery</option>
                                        <option>Pickup</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Select
                                        id="city"
                                        name="city"
                                        size="md"
                                        required
                                        {...register('city', { required: true })}
                                    >
                                        <option disabled selected value={''}>
                                            Cities
                                        </option>
                                        {Cities.map((city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                            </Row>
                        </div>
                        <div className="mb-4">
                            <Row>
                                <Col>
                                    <Form.Select
                                        id="township"
                                        name="township"
                                        size="md"
                                        required
                                        {...register('township', { required: true })}
                                    >
                                        <option disabled selected value={''}>
                                            Townships
                                        </option>
                                        {Townships.map((township) => (
                                            <option key={township} value={township}>
                                                {township}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Control
                                        id="address"
                                        name="address"
                                        size="md"
                                        type="text"
                                        placeholder="Address"
                                        required
                                        {...register('address', { required: true })}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div className="mb-4">
                            <Row>
                                <Col>
                                    <Form.Control
                                        id="phone"
                                        name="phone"
                                        size="md"
                                        type="number"
                                        placeholder="Phone Number"
                                        required
                                        {...register('phone', { required: true })}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        id="remark"
                                        name="remark"
                                        size="md"
                                        type="text"
                                        as="textarea"
                                        placeholder="Remark"
                                        required
                                        {...register('remark', { required: true })}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <Button type="submit"> Submit </Button>
                        </div>
                    </Form>
                </div>
            </Modal>
            <Modal show={isOpenConfirm} onHide={handleCloseConfirm}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure to order?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConfirm}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddOrder;
