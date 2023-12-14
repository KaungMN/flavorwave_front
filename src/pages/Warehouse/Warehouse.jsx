import TableComponent from '../../components/warehouse/warehouses/table/Table';
import { useState } from 'react';
import { Button, Row, Col, Container, Form, InputGroup } from 'react-bootstrap';

function warehouse() {
    const [data, setData] = useState(null);
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

    const fetchAllData = async () => {
        console.log('fetching all data');
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    return (
        <Container>
            <h1 className="mb-4">Ware House</h1>
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
                <TableComponent />
            </Row>
        </Container>
    );
}

export default warehouse;
