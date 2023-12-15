import { Button, Col, Form, Modal, ModalHeader, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../../services/login';
import { useState, useEffect } from 'react';
import { CUSTOMER_ORDER_ROUTE, CUSTOMER_SIGN_UP_ROUTE, DEFAULT_ROUTE } from '../../constants/routes';
import { getSessionStorage } from '../../utils';
import Bg from '../../images/bg.jpg';

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
        <div
            style={{
                backgroundImage: `url(${Bg})`,
                width: '100%',
                position: 'relative',
                backgroundSize: 'cover',
                height: '530px'
            }}
        >
            <div
                className="contact-form-section"
                style={{
                    textAlign: 'center',
                    maxWidth: '500px',
                    position: 'absolute',
                    top: '35%',
                    left: '35%'
                }}
            >
                <h2 className="login-header">Log In</h2>
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
                        <Button
                            variant="light"
                            className="login-button"
                            style={{ fontSize: '18px', color: 'white', display: 'block', margin: '20px auto' }}
                            type="submit"
                        >
                            {' '}
                            Submit{' '}
                        </Button>
                    </div>
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
        </div>
    );
}

export default CustomerLogin;
