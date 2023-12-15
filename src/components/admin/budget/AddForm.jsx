import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function EditForm({ setShow }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const transformedData = {
            department_id: data.department_id,
            target_year: data.target_year,
            total_budget: data.total_budget,
            report_budget: JSON.stringify({
                planned_budget: data.planned_budget,
                spent_budget: data.spent_budget
            })
        };
        const res = await axios.post('http://localhost:8000/api/store-budgets', transformedData);
        const datas = await res.data;
        setShow(false);
        console.log(datas);
    };

    return (
        <div className="contact-form-section" style={{ textAlign: 'left', maxWidth: '500px' }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Department</Form.Label>
                                <Form.Select
                                    id="departmentId"
                                    name="departmentId"
                                    size="md"
                                    required
                                    {...register('department_id', { required: true })}
                                >
                                    <option disabled selected value={''}>
                                        choose
                                    </option>
                                    <option value={2}>sale</option>
                                    <option value={5}>factory</option>
                                    <option value={4}>warehouse</option>
                                    <option value={3}>logistic</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Planned Budget</Form.Label>
                                <Form.Control
                                    id="plannedBudget"
                                    name="targetYear"
                                    size="md"
                                    type="number"
                                    required
                                    {...register('planned_budget', { required: true })}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Target Year</Form.Label>
                                <Form.Control
                                    id="targetYear"
                                    name="targetYear"
                                    size="md"
                                    type="number"
                                    required
                                    {...register('target_year', { required: true })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Spent Budget</Form.Label>
                                <Form.Control
                                    id="spentBudget"
                                    name="spentBudget"
                                    size="md"
                                    type="number"
                                    required
                                    {...register('spent_budget', { required: true })}
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
                                    {...register('total_budget', { required: true })}
                                />
                            </Form.Group>
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
