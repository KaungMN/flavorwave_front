import { Button, Col, Form, Modal, ModalBody, ModalHeader, ModalTitle, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Cities, Townships } from '../../../datas/CitiesAndTownship';
import { useOrder } from '../../../services/order';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function AddressForm({ isOpen, orderData, totalPrice }) {
    const [isOpenOrderConfirm, setIsOpenOrderConfirm] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    // let test = { a: "1", b: "2", c: "3" };
    // let newTest = { ...test, d: "4" };
    // console.log(newTest)

    const onSubmit = async (data) => {
        // console.log(data);
        console.log(orderData);
        const newData = {
            ...data,
            quantity: 2,
            orderType: 'wholesale',
            status: 'pending',
            products: JSON.stringify({ id: 1, name: 'name' }),
            totalPrice: totalPrice,
            customer_id: 1
        };
        console.log(newData);
        const res = await axios.post('http://localhost:8000/api/create-orders', newData);
        const datas = res.data;
        // console.log(data);
    };

    return (
        <Modal show={isOpen}>
            <ModalHeader closeButton>
                <ModalTitle>Order & Address</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div
                    className="contact-form-section"
                    style={{ textAlign: 'left', margin: '50px auto', maxWidth: '500px' }}
                >
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <>
                                {orderData &&
                                    orderData.map((order, index) => (
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
                                {/* Rest of your form code remains unchanged */}
                            </>

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
                                        id="customerType"
                                        name="customerType"
                                        size="md"
                                        required
                                        {...register('customerType', { required: true })}
                                    >
                                        <option disabled selected value={''}>
                                            Customer Type
                                        </option>
                                        <option>Keyholder</option>
                                        <option>Distributor</option>
                                        <option>Wholesale</option>
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
                                        placeholder="Remark"
                                        required
                                        {...register('remark', { required: true })}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <Button type="submit"> Submit </Button>
                    </Form>
                </div>
            </ModalBody>
        </Modal>
    );
}

export default AddressForm;
