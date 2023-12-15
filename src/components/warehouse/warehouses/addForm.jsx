import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddForm({ setShow }) {
    // const [products, setProducts] = useState([]);
    // const [currentProduct, setCurrentProduct] = useState([]);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const res = await axios.post('http://localhost:8000/api/store-warehouse', data);
        const datas = res.data;
        console.log(datas);
        setShow(false);
    };

    return (
        <div className="contact-form-section" style={{ textAlign: 'left', maxWidth: '500px' }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    id="name"
                                    name="name"
                                    size="md"
                                    type="text"
                                    required
                                    {...register('name', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    id="address"
                                    name="address"
                                    size="md"
                                    type="text"
                                    required
                                    {...register('address', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    id="phone"
                                    name="phone"
                                    size="md"
                                    type="number"
                                    required
                                    {...register('phone', { required: true })}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="mx-auto my-3 d-flex justify-content-center">
                        <Button type="submit" className="me-2 mx-3" variant="outline-success">
                            Yes
                        </Button>
                        <Button className="me-2" variant="outline-secondary" onClick={() => setShow(false)}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}
