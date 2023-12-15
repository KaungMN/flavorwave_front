import { Button, Col, Form, Modal, ModalBody, ModalHeader, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../../services/adminLogin';
import { useState, useEffect } from 'react';
import { getSessionStorage } from '../../utils';
import { STAFF_ROUTE } from '../../constants/routes.js';
import { MANUFACTURED_ROUTE, RAW_ROUTE, ADMIN_ROUTE, LOGISTIC_ROUTE, SALES_ROUTE } from '../../constants/routes.js';
import Bg from '../../images/bg.jpg';

export default function AdminLogin() {
    const history = useNavigate();
    const [showError, setShowError] = useState();

    const refresh = () => window.location.reload(true);

    let staffId = getSessionStorage('staffId');
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        await login(data);
        console.log(staffId);
        if (staffId === 1) {
            history(ADMIN_ROUTE);
            setTimeout(() => {
                refresh();
            }, 2000);
        } else if (staffId === 2) {
            history(SALES_ROUTE);
            setTimeout(() => {
                refresh();
            }, 2000);
        } else if (staffId === 3) {
            history(LOGISTIC_ROUTE);
            setTimeout(() => {
                refresh();
            }, 2000);
        } else if (staffId === 4) {
            history(MANUFACTURED_ROUTE);
            setTimeout(() => {
                refresh();
            }, 2000);
        } else if (staffId === 5) {
            history(RAW_ROUTE);
            setTimeout(() => {
                refresh();
            }, 2000);
        }
        // window.location.reload();
    };

    useEffect(() => {
        const isStaffToken = getSessionStorage('staffToken');
        if (!isStaffToken) return;
        history(STAFF_ROUTE);
    }, []);

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
                    </div>
                    <Button
                        variant="light"
                        className="login-button"
                        style={{ fontSize: '18px', color: 'white', display: 'block', margin: '20px auto' }}
                        type="submit"
                    >
                        {' '}
                        Submit{' '}
                    </Button>
                </Form>

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
