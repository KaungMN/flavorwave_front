import { Button, Col, Form, Modal, ModalHeader, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../../services/login';
import { useState, useEffect } from 'react';
import { CUSTOMER_ORDER_ROUTE, CUSTOMER_SIGN_UP_ROUTE, DEFAULT_ROUTE } from '../../constants/routes';
import { getSessionStorage } from '../../utils';

function CustomerLogin() {
    const [showError, setShowError] = useState();
    const [isLoginSuccessful, setLoginSuccessful] = useState();
    const history = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const res = await login(data);
        if (!res) return;
        window.location.reload();
    };

    useEffect(() => {
        const isAuthToken = getSessionStorage('authToken');
        if (!isAuthToken) return;
        history(DEFAULT_ROUTE);
    }, []);

    console.log(watch('example'));
    return (
        <div className="contact-form-section" style={{ textAlign: 'left', margin: '50px auto', maxWidth: '500px' }}>
            <h2>Log-in</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <Row>
                        <Col>
                            <Form.Control
                                //   disabled
                                //   readOnly
                                size="md"
                                type="email"
                                placeholder="Email*"
                                required
                                {...register('email', { required: true })}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                size="md"
                                type="password"
                                placeholder="Password*"
                                required
                                {...register('password', { required: true })}
                            />
                        </Col>
                    </Row>
                </div>
                <Button type="submit"> Submit </Button>
            </Form>
            <p className="mt-3 text-center">
                Don't have an account? <Link to={CUSTOMER_SIGN_UP_ROUTE}>Signup</Link>
            </p>
            {showError && (
                <Modal show={showError} onHide={() => setShowError(false)}>
                    <ModalHeader>Error!</ModalHeader>
                    <Modal.Body>
                        <p>Invalid credentials. Please try again.</p>
                        <Button onClick={() => setShowError(false)}>Close</Button>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
}

export default CustomerLogin;
