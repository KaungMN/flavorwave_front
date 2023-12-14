import Paginator from './Pagination';
import { useState, useEffect } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

const heading = [
    'Order Id',
    'Customer Name',
    'Address',
    'Order Item',
    'Qty',
    'each price',
    'Average/item',
    'Total amount',
    'Remark'
];

function TableComponent() {
    let [data, setData] = useState();
    let [filterOrders, setFilterOrders] = useState(data);

    useEffect(() => {
        const fetchInfo = async () => {
            const res = await fetch(`http://localhost:8000/api/getpreorders`);
            const data = await res.json();
            console.log(data);
            setData(data);
        };
        fetchInfo();
    }, []);

    function filterQuantity(quantity) {
        let result = data?.filter((item) => {
            return item.orderQuantity === parseInt(quantity);
        });
        setFilterOrders(result.length > 0 ? result : data);
    }

    return (
        <Container>
            <div className="mb-4">
                <Row>
                    <Col xs={4}>
                        <Form.Label>OrderQuantity: </Form.Label>
                        <Form.Control
                            size="md"
                            type="email"
                            onChange={(e) => {
                                filterQuantity(e.target.value);
                            }}
                        />
                    </Col>
                </Row>
            </div>
            {data ? <Paginator header={heading} data={data} /> : null}
        </Container>
    );
}

export default TableComponent;
