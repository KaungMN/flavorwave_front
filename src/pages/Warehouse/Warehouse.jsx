import TableComponent from '../../components/warehouse/warehouses/table/Table';
import { useState } from 'react';
import { Button, Row, Col, Container, Form, InputGroup } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const order = [
    {
        sales_id:2,
        name: "warehouse 1",
        address: "somewhere 1",
        phone: 84544,
    },
    {
        sales_id:2,
        name: "warehouse 1",
        address: "somewhere 3",
        phone: 84544,
    },,
    {
        sales_id:2,
        name: "warehouse 5",
        address: "somewhere 5",
        phone: 84544,
    },
    {
        sales_id:2,
        name: "warehouse 1",
        address: "somewhere else",
        phone: 84544,
    },
];

function warehouse() {
    const [data, setData] = useState(order);

    return (
        <Container>
            <h1 className="mb-4">WareHouse</h1>
            {data ? <Row>
                <TableComponent data={data} />
            </Row> :
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }

        </Container>
    );
}

export default warehouse;
