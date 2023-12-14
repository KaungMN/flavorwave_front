import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function EditForm({ data, setShow }) {
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
                                    disabled
                                    readOnly
                                    id="product_id"
                                    name="product_id"
                                    defaultValue={data.product_id}
                                    size="md"
                                    type="text"
                                    required
                                    {...register('product_id', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Raw Materials</Form.Label>
                                <Form.Control
                                    disabled
                                    readOnly
                                    as="textarea"
                                    id="raw_material_id"
                                    name="raw_material_id"
                                    defaultValue={data.raw_material_id}
                                    size="md"
                                    type="number"
                                    rows={5}
                                    required
                                    {...register('raw_material_id', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Warehouse</Form.Label>
                                <Form.Control
                                    id="warehouse"
                                    name="warehouse"
                                    defaultValue={data.warehouse_id}
                                    size="md"
                                    type="text"
                                    required
                                    {...register('warehouse_id', { required: true })}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Total Quantity</Form.Label>
                                <Form.Control
                                    disabled
                                    readOnly
                                    id="total_quantity"
                                    name="total_quantity"
                                    defaultValue={data.total_quantity}
                                    size="md"
                                    type="number"
                                    required
                                    {...register('total_quantity', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Release Date</Form.Label>
                                <Form.Control
                                    disabled
                                    readOnly
                                    id="release_date"
                                    name="release_date"
                                    defaultValue={data.release_date}
                                    size="md"
                                    type="text"
                                    required
                                    {...register('release_date', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    id="product_price"
                                    name="product_price"
                                    defaultValue={data.product_price}
                                    size="md"
                                    type="number"
                                    required
                                    {...register('product_price', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    id="location"
                                    name="location"
                                    defaultValue={data.location}
                                    size="md"
                                    type="text"
                                    required
                                    {...register('location', { required: true })}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="mx-auto my-3 d-flex justify-content-center">
                        <Button className="me-2 mx-3" variant="outline-success" onClick={() => setShow(false)}>
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
