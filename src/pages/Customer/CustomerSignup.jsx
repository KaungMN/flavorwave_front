import { Button, Col, Form, Row } from 'react-bootstrap';
import { Cities, Townships } from '../../datas/CitiesAndTownship';
import { useForm } from 'react-hook-form';
import { signup } from '../../services/signup';

function CustomerSignup() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        signup(data);
    };

    console.log(watch('example'));
    return (
        <>
            <div className="contact-form-section" style={{ textAlign: 'left', margin: '50px auto', maxWidth: '500px' }}>
                <h2>Signup</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <Row>
                            <Col>
                                <Form.Control
                                    size="md"
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Name*"
                                    required
                                    {...register('name', { required: true })}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    size="md"
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password*"
                                    required
                                    {...register('password', { required: true })}
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className="mb-4">
                        <Row>
                            <Col>
                                <Form.Control
                                    size="md"
                                    type="email"
                                    required
                                    placeholder="Email*"
                                    {...register('email', { required: true })}
                                />
                            </Col>
                            <Col>
                                <Form.Select
                                    id="customerType"
                                    name="customerType"
                                    size="md"
                                    required
                                    defaultValue={''}
                                    {...register('customerType', { required: true })}
                                >
                                    <option disabled selected value={''}>
                                        Customer Type
                                    </option>
                                    <option>Keyholder</option>
                                    <option>Distributor</option>
                                    <option>Wholesale</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </div>
                    <div className="mb-4">
                        <Row>
                            <Col>
                                <Form.Select
                                    id="city"
                                    name="city"
                                    size="md"
                                    required
                                    {...register('city', { required: true })}
                                >
                                    <option disabled selected value={''}>
                                        City
                                    </option>
                                    {Cities.map((city) => (
                                        <option key={city} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Select
                                    id="township"
                                    name="township"
                                    size="md"
                                    required
                                    {...register('township', { required: true })}
                                >
                                    <option disabled selected value={''}>
                                        Townships
                                    </option>
                                    {Townships.map((township) => (
                                        <option key={township} value={township}>
                                            {township}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                    </div>
                    <div className="mb-4">
                        <Row>
                            <Col>
                                <Form.Control
                                    id="address"
                                    name="address"
                                    size="md"
                                    type="text"
                                    placeholder="Address"
                                    required
                                    {...register('address', { required: true })}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    id="phone"
                                    name="phone"
                                    size="md"
                                    type="number"
                                    placeholder="Phone Number"
                                    required
                                    {...register('phone', { required: true })}
                                />
                            </Col>
                        </Row>
                    </div>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        </>
    );
}

export default CustomerSignup;
