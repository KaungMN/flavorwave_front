import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function AddForm({ heading, data, setShow }) {
    const [selectedItems, setSelectedItems] = useState([]);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => console.log(data);

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
                                    id="name"
                                    name="name"
                                    defaultValue={data.orderItem}
                                    size="md"
                                    type="text"
                                    required
                                    {...register('name', { required: true })}
                                />
                            </Form.Group>
                            <Form.Label>Raw Material</Form.Label>
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
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    id="price"
                                    name="price"
                                    size="md"
                                    type="number"
                                    required
                                    {...register('price', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    id="description"
                                    name="description"
                                    defaultValue={data.orderQuantity}
                                    size="md"
                                    type="number"
                                    rows={4}
                                    required
                                    {...register('description', { required: true })}
                                />
                            </Form.Group>
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
