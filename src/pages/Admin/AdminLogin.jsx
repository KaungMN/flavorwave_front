import { Button, Col, Form, Modal, ModalBody, ModalHeader, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../../services/adminLogin';
import { useState } from 'react';

function AdminLogin() {
    const [showError, setShowError] = useState();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        await login(data);
    };
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
                Don't have an account? <Link to="/customer/signup">Signup</Link>
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

export default AdminLogin;
