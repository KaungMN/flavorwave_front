import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddForm({ setShow }) {
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState([]);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    async function getProducts() {
        const res = await axios.get('http://localhost:8000/api/get-products');
        const datas = res.data;
        setProducts(datas);
    }

    useEffect(() => {
        getProducts();
    }, []);
    console.log(products);

    const onSubmit = async (data) => {
        const res = await axios.post('http://localhost:8000/api/post-product', { ...data, raw_material_id: rawId });
        const datas = res.data;
        console.log(datas);
        setShow(false);
    };

    let rawId;
    if (currentProduct.length > 0) {
        currentProduct.map((p) => p.raw.map((r) => (rawId = r.id)));
    }
    console.log(rawId);

    const handleChange = (e) => {
        console.log(e.target.value);
        let result = products?.filter((item) => {
            return item.id === parseInt(e.target.value);
        });
        setCurrentProduct(result);
        console.log(result);
    };

    return (
        <div className="contact-form-section" style={{ textAlign: 'left', maxWidth: '500px' }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Choose Products: </Form.Label>
                                <Form.Select
                                    id="product"
                                    name="product"
                                    size="md"
                                    required
                                    {...register('product_id', { required: true })}
                                    onChange={handleChange}
                                >
                                    <option disabled selected value={''}>
                                        Choose Products
                                    </option>
                                    {products &&
                                        products.map((p) => (
                                            <option key={p.id} value={p.id}>
                                                {p.name}
                                            </option>
                                        ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Raw Materials</Form.Label>
                                <ul>
                                    {currentProduct.map((p) =>
                                        p.raw.map((r) => (
                                            <>
                                                <li key={r.name1}>{r.name1}</li>
                                                <li key={r.name2}>{r.name2}</li>
                                                <li key={r.name3}>{r.name3}</li>
                                                <li key={r.name4}>{r.name4}</li>
                                            </>
                                        ))
                                    )}
                                </ul>
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
                                    type="date"
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
                        <Button type="submit" className="me-2 mx-3" variant="outline-success">
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
