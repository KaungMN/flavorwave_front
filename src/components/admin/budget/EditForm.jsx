import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function EditForm({ heading, data }) {
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
                                <Form.Label>Department Id</Form.Label>
                                <Form.Control
                                    id="departmentId"
                                    name="departmentId"
                                    size="md"
                                    type="text"
                                    required
                                    {...register('productName', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Target Year</Form.Label>
                                <Form.Control
                                    id="targetYear"
                                    name="targetYear"
                                    size="md"
                                    type="number"
                                    required
                                    {...register('box', { required: true })}
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
                                <Form.Label>Report Budget</Form.Label>
                                <Form.Control
                                    id="reportBudget"
                                    name="reportBudget"
                                    size="md"
                                    type="number"
                                    required
                                    {...register('piece', { required: true })}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Total Budget</Form.Label>
                                <Form.Control
                                    id="totalBudget"
                                    name="totalBudget"
                                    size="md"
                                    type="number"
                                    required
                                    {...register('piece', { required: true })}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit" className="mt-4 d-block mx-auto" variant="success">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}
