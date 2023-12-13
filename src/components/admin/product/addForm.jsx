import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function AddForm({ heading, data, setShow }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="contact-form-section" style={{ textAlign: 'left', maxWidth: '500px' }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    id="productName"
                                    name="productName"
                                    defaultValue={data.orderItem}
                                    size="md"
                                    type="text"
                                    required
                                    {...register('productName', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Box</Form.Label>
                                <Form.Control
                                    id="box"
                                    name="box"
                                    defaultValue={data.orderQuantity}
                                    size="md"
                                    type="number"
                                    required
                                    {...register('box', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Piece</Form.Label>
                                <Form.Control
                                    id="piece"
                                    name="piece"
                                    defaultValue={data.salesPermit}
                                    size="md"
                                    type="number"
                                    required
                                    {...register('piece', { required: true })}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    id="price"
                                    name="price"
                                    defaultValue={data.sales}
                                    size="md"
                                    type="number"
                                    required
                                    {...register('price', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Expire Date</Form.Label>
                                <Form.Control
                                    id="expireDate"
                                    name="expireDate"
                                    defaultValue={data.Permit}
                                    size="md"
                                    type="text"
                                    required
                                    {...register('expireDate', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    id="location"
                                    name="location"
                                    defaultValue={data.Permit}
                                    size="md"
                                    type="text"
                                    required
                                    {...register('location', { required: true })}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="mx-auto my-3 d-flex justify-content-center">
                        <Button type="submit" className="me-2 mx-3" variant="success">
                            Done
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
