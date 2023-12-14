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
                                <Form.Label>Truck Name</Form.Label>
                                <Form.Control
                                    id="truck_name"
                                    name="truck_name"
                                    defaultValue={data.truck_name}
                                    size="md"
                                    type="text"
                                    required
                                    {...register('truck_name', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Capacity</Form.Label>
                                <Form.Control
                                    id="capacity"
                                    name="capacity"
                                    defaultValue={data.capacity}
                                    size="md"
                                    type="number"
                                    rows={1}
                                    required
                                    {...register('capacity', { required: true })}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Truck Number</Form.Label>
                                <Form.Control
                                    id="truck_number"
                                    name="truck_number"
                                    defaultValue={data.truck_number}
                                    size="md"
                                    type="text"
                                    required
                                    {...register('truck_number', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Staff Id</Form.Label>
                                <Form.Control
                                    id="staff_id"
                                    name="staff_id"
                                    defaultValue={data.staff_id}
                                    size="md"
                                    type="text"
                                    required
                                    {...register('staff_id', { required: true })}
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
