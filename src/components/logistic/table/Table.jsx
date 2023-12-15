import Paginator from './Pagination';
import { useState, useEffect } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

const heading = ['Order Id', 'Customer Name', 'Address', 'Order Item', 'Qty', 'Total Qty', 'Remark'];

function TableComponent({ data }) {
    let [filterData, setFilterData] = useState();

    function filterQuantity(quantity) {
        let result = data.filter((item) => {
            return parseInt(item.quantity) === parseInt(quantity);
        });
        console.log(result);
        setFilterData(result.length > 0 ? result : data);
    }

    function filterAddress(address) {
        let result = data.filter((item) => {
            console.log(item);
            console.log(item.city.toLowerCase().includes(address.toLowerCase()));
            return item.city.toLowerCase().includes(address.toLowerCase());
        });
        console.log(result);
        setFilterData(result.length > 0 ? result : data);
    }

    return (
        <Container>
            <div className="mb-4">
                <Row>
                    <Col xs={4}>
                        <Form.Label>OrderQuantity: </Form.Label>
                        <Form.Control
                            size="md"
                            type="text"
                            onChange={(e) => {
                                filterQuantity(e.target.value);
                            }}
                        />
                    </Col>
                    <Col xs={4}>
                        <Form.Label>Address: </Form.Label>
                        <Form.Control
                            size="md"
                            type="text"
                            onChange={(e) => {
                                filterAddress(e.target.value);
                            }}
                        />
                    </Col>
                </Row>
            </div>
            {data ? <Paginator header={heading} data={filterData ? filterData : data} /> : null}
        </Container>
    );
}

export default TableComponent;
