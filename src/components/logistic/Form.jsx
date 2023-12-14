import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const truck = ['Suzuki', 'Mercedes', 'Toyota', 'Honda'];

export default function EditForm({ initialData, setShow }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const res = await axios.post(`http://localhost:8000/api/post-delivery`, {
            truck_id: data.truck_id,
            preorder_id: initialData.id,
            delivery_date: "2023-12-13",
            status: 'pending'
        });

        const datas = res.data;
        console.log(datas);
    };

    return (
        <div className="contact-form-section" style={{ textAlign: 'left', maxWidth: '500px' }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <Row>
                        <Col>
                            <Form.Label>Order Quantity: </Form.Label>
                            <Form.Control
                                defaultValue={initialData.totalQuantity}
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
                                {...register('truck_id', { required: true })}
                            >
                                <option disabled selected value={''}>
                                    Choose Truck
                                </option>
                                {truck.map((t, id) => (
                                    <option key={t} value={id + 1}>
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
