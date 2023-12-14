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
                                <Form.Label>Warehouse Name</Form.Label>
                                <Form.Control
                                    id="name"
                                    name="name"
                                    defaultValue={data.name}
                                    size="md"
                                    type="text"
                                    required
                                    {...register('name', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    id="phone_no"
                                    name="phone_no"
                                    defaultValue={data.phone}
                                    size="md"
                                    type="number"
                                    rows={1}
                                    required
                                    {...register('phone', { required: true })}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    id="address"
                                    name="address"
                                    defaultValue={data.address}
                                    size="md"
                                    type="text"
                                    required
                                    {...register('address', { required: true })}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="mx-auto my-3 d-flex justify-content-center">
                        <Button className="me-2 mx-3" variant="outline-success">
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
