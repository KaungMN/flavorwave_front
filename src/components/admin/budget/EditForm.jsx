import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function EditForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) =>{
        const transformedData = {
            department_id: data.department_id,
            target_year: data.target_year,
            total_budget: data.total_budget,
            report_budget: {
                
                planned_budget: data.planned_budget,
                spent_budget: data.spent_budget
            }
        };
        console.log(JSON.stringify(transformedData));

    }

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
                                    <option>sale</option>
                                    <option>factory</option>
                                    <option>warehouse</option>
                                    <option>logistic</option>
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
                    <Button type="submit" className="mt-4 d-block mx-auto" variant="success">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}
