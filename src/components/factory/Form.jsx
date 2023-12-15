import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from "axios"

export default function EditForm({ heading, data, setShow }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    //   useForm({
    //   defaultValues: async () => fetch('/api-endpoint')
    // })

    const onSubmit = (data) => console.log(data);
    const [suppliers,setSuppliers] = useState(null);

    

    return (
        <div className="contact-form-section" style={{ textAlign: 'left', maxWidth: '500px' }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <Row>
                        <Col>
                            <InputGroup size="md" className="mb-3">
                                <Form.Control
                                    id="amount"
                                    name="amount"
                                    type="number"
                                    size="md"
                                    required
                                    placeholder="Amount in grams"
                                    {...register('amount', { required: true })}
                                />
                                <InputGroup.Text size="md">g</InputGroup.Text>
                            </InputGroup>
                            <Form.Select size="md" required {...register('supplier', { required: true })}>
                                <option disabled selected value={''}>
                                    Supplier Name
                                </option>
                                {

                                }
                            </Form.Select>
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
