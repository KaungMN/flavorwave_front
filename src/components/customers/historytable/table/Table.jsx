import Paginator from './Pagination';
import { useState, useEffect } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const heading = [
    'Order Id',
    'Customer Name',
    'Address',
    'Order Item',
    'Qty',
    'Each Price',
    'Sub Total',
    'Total amount',
    'Remark',
    'Delivery Status'
];

function TableComponent({ data }) {
    let [filterData, setFilterData] = useState();

    function filterId(id) {
        let result = data?.filter((item) => {
            return item.id === parseInt(id);
        });
        setFilterData(result.length > 0 ? result : data);
    }

    // function filterStatus(status) {
    //     let result = data.filter((item) => {
    //         return item.status === status;
    //     });
    //     console.log(result);
    //     setFilterData(result.length > 0 ? result : data);
    // }

    return (
        <Container>
            {data ? (
                <>
                    <div className="mb-4">
                        <Row>
                            <Col xs={4}>
                                <Form.Label>Order Id: </Form.Label>
                                <Form.Control
                                    size="md"
                                    type="email"
                                    onChange={(e) => {
                                        filterId(e.target.value);
                                    }}
                                />
                            </Col>
                            {/* <Col xs={4}>
                                <Form.Label>Status: </Form.Label>
                                <Form.Select
                                    id="product"
                                    name="product"
                                    size="md"
                                    onChange={(e) => {
                                        filterStatus(e.target.value);
                                    }}
                                >
                                    <option disabled selected value={''}>
                                        Choose Status
                                    </option>
                                    {['pending', 'approved'].map((t) => (
                                        <option key={t} value={t}>
                                            {t}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Col> */}
                        </Row>
                    </div>
                    {data ? <Paginator header={heading} data={filterData ? filterData : data} /> : null}{' '}
                </>
            ) : (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </Container>
    );
}

export default TableComponent;
