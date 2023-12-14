import TableComponent from '../../components/warehouse/manufactured/table/Table';
import { useState, useEffect } from 'react';
import { Button, Row, Col, Container, Form, InputGroup } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

function manufactured() {
    const [data, setData] = useState();
    const [date, setDate] = useState('');

    const fetchDataByDate = async (e) => {
        e.preventDefault();
        console.log(date);
        // try {
        //   const response = await axios.get(API_ENDPOINT ? date = ${ date });
        //   setFetchedData(response.data);
        // } catch (error) {
        //   console.error('Error fetching data:', error);
        // }
    };

    useEffect(() => {
        const fetchInfo = async () => {
            const res = await fetch(`http://localhost:8000/api/get-products`);
            const data = await res.json();
            console.log(data);
            setData(data);
        };
        fetchInfo();
    }, []);

    const fetchAllData = async () => {
        console.log('fetching all data');
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    return (
        <Container>
            <h1 className="mb-4">Manufactured Porducts</h1>
            {!data && (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
            {data && (
                <>
                    <Row className="mb-4">
                        <Col>
                            <Form style={{ maxWidth: '500px' }} onSubmit={(e) => fetchDataByDate(e)}>
                                <InputGroup>
                                    <Form.Control
                                        type="date"
                                        value={date}
                                        onChange={handleDateChange}
                                        required
                                        className="p-1"
                                    />
                                    <Button type="submit">Data By Date</Button>
                                </InputGroup>
                            </Form>
                        </Col>
                        <Col sm={4}>
                            <Button style={{ float: 'right', marginRight: '50px' }} onClick={fetchAllData}>
                                All Data
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <TableComponent data={data} />
                    </Row>
                </>
            )}
        </Container>
    );
}

export default manufactured;
