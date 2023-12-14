import TableComponent from '../../components/warehouse/warehouses/table/Table';
import { useState, useEffect } from 'react';
import { Button, Row, Col, Container, Form, InputGroup } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

function warehouse() {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchInfo = async () => {
            const res = await fetch(`http://localhost:8000/api/get-warehouses`);
            const data = await res.json();
            console.log(data);
            setData(data);
        };
        fetchInfo();
    }, []);

    return (
        <Container>
            <h1 className="mb-4">WareHouse</h1>
            {data ? (
                <Row>
                    <TableComponent data={data} />
                </Row>
            ) : (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </Container>
    );
}

export default warehouse;
