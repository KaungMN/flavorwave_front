import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useState } from "react";

export default function AddForm({ setShow }) {
    const [selectedItems, setSelectedItems] = useState([]);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        // console.log(data);
        console.log(orderData);
        const newData = {
            ...data,
        };
        console.log(newData);
        const res = await axios.post('http://localhost:8000/api/create-orders', newData);
        const datas = res.data;
        // console.log(data);
    };

    const handleCheckboxChange = (event, item) => {
        const selectedIndex = selectedItems.indexOf(item);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selectedItems, item);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selectedItems.slice(1));
        } else if (selectedIndex === selectedItems.length - 1) {
            newSelected = newSelected.concat(selectedItems.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selectedItems.slice(0, selectedIndex),
                selectedItems.slice(selectedIndex + 1)
            );
        }
        setSelectedItems(newSelected);
    };

    const isSelected = (item) => selectedItems.indexOf(item) !== -1;

    console.log(selectedItems);

    return (
        <div className="contact-form-section" style={{ textAlign: 'left', maxWidth: '500px' }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    id="product_id"
                                    name="product_id"
                                    size="md"
                                    type="text"
                                    required
                                    {...register('product_id', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Raw Materials</Form.Label>
                                {['abcd', 'efgh', 'ijk', 'lmno'].map((item, id) => (
                                    <Form.Check
                                        key={item}
                                        value={id}
                                        label={item}
                                        checked={isSelected(id)}
                                        onChange={(event) => {
                                            handleCheckboxChange(event, id);
                                        }}
                                        type="checkbox"
                                    />
                                ))}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Total Quantity</Form.Label>
                                <Form.Control
                                    id="total_quantity"
                                    name="total_quantity"
                                    size="md"
                                    type="number"
                                    required
                                    {...register('total_quantity', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Release Date</Form.Label>
                                <Form.Control
                                    id="release_date"
                                    name="release_date"
                                    size="md"
                                    type="text"
                                    required
                                    {...register('release_date', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    id="product_price"
                                    name="product_price"
                                    size="md"
                                    type="number"
                                    required
                                    {...register('product_price', { required: true })}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="mx-auto my-3 d-flex justify-content-center">
                        <Button className="me-2 mx-3" variant="outline-success" onClick={() => setShow(false)}> 
                            Yes
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
