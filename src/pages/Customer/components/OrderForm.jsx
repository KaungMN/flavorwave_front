import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Cities, Townships } from '../../../datas/CitiesAndTownship';
import OrderItemsDropDown from '../../../components/customers/OrderItems';

function AddOrder({ orderData, totalPrice }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    // let test = { a: "1", b: "2", c: "3" };
    // let newTest = { ...test, d: "4" };
    // console.log(newTest)
    console.log(orderData);

    const onSubmit = (data) => {
        const newData = { ...data, order: orderData, totalPrice: totalPrice };
        console.log(newData);
    };

    return (
        <div className="contact-form-section" style={{ textAlign: 'left', margin: '50px auto', maxWidth: '500px' }}>
            <h2>Order Form</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <h4 className="text-center">Your Order History</h4>
                    {orderData.map((order, index) => (
                        <Row key={index}>
                            <Col>{order.name}</Col>
                            <Col>{order.quantity}</Col>
                            <Col>
                                {order.subTotalPrice && order.subTotalPrice.toFixed(2)} <span>$</span>
                            </Col>
                        </Row>
                    ))}
                    <h3>Confirm Your Address</h3>
                    <Row>
                        <Col>
                            <Form.Control
                                size="md"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name*"
                                {...register('name', { required: true })}
                            />
                        </Col>
                        <Col>
                            <Form.Control size="md" type="email" placeholder="Email*" />
                        </Col>
                    </Row>
                </div>
                <div className="mb-4">
                    <Row>
                        <Col>
                            <Form.Select
                                id="customerType"
                                name="customerType"
                                size="md"
                                required
                                defaultValue="Customer Type"
                                {...register('customerType', { required: true })}
                            >
                                <option disabled>Customer Type</option>
                                <option>Keyholder</option>
                                <option>Distributor</option>
                                <option>Wholesale</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select
                                id="city"
                                name="city"
                                size="md"
                                required
                                defaultValue="Cities"
                                {...register('city', { required: true })}
                            >
                                <option disabled>Cities</option>
                                {Cities.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Row>
                </div>
                <div className="mb-4">
                    <Row>
                        <Col>
                            <Form.Select
                                id="township"
                                name="township"
                                size="md"
                                required
                                defaultValue="Townships"
                                {...register('township', { required: true })}
                            >
                                <option disabled>Townships</option>
                                {Townships.map((township) => (
                                    <option key={township} value={township}>
                                        {township}
                                    </option>
                                ))}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Control
                                id="address"
                                name="address"
                                size="md"
                                type="text"
                                placeholder="Address"
                                {...register('address', { required: true })}
                            />
                        </Col>
                    </Row>
                </div>
                <div className="mb-4">
                    <Row>
                        <Col>
                            <Form.Control
                                id="phone"
                                name="phone"
                                size="md"
                                type="text"
                                placeholder="Phone Number"
                                {...register('phone', { required: true })}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                id="remark"
                                name="remark"
                                size="md"
                                type="text"
                                placeholder="Remark"
                                {...register('remark', { required: true })}
                            />
                        </Col>
                    </Row>
                </div>
                <Button type="submit"> Submit </Button>
            </Form>
        </div>
    );
}

export default AddOrder;
