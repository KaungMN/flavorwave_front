import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const truck = ['Suzuki', 'Mercedes', 'Toyota', 'Honda'];

export default function EditForm({ data, setShow }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => console.log(data);
    console.log(data)

    return (
        <div className="contact-form-section" style={{ textAlign: 'left', maxWidth: '500px' }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <Row>
                        <Col>
                            <Form.Label>Order Quantity: </Form.Label>
                            <Form.Control
                                defaultValue={data.totalQuantity}
                                id="salesPermit"
                                name="salesPermit"
                                disabled
                                readOnly
                                size="md"
                                type="text"
                            />
                        </Col>
                        <Col>
                            <Form.Label>Choose Truck: </Form.Label>
                            <Form.Select
                                id="truck"
                                name="truck"
                                size="md"
                                required
                                {...register('truck', { required: true })}
                            >
                                <option disabled selected value={''}>
                                    Choose Truck
                                </option>
                                {truck.map((t) => (
                                    <option key={t} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Row>
                    <div className="mx-auto my-3 d-flex justify-content-center">
                        <Button type="submit" className="me-2 mx-3" variant="success">
                            Submit
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
