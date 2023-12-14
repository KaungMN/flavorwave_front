import TableComponent from '../../components/warehouse/manufactured/table/Table';
import { useState } from 'react';
import { Button, Row, Col, Container, Form, InputGroup } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const order = [
    {
        orderItem: 'Product A',
        orderQuantity: 5,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product B',
        orderQuantity: 10,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product C',
        orderQuantity: 8,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product D',
        orderQuantity: 15,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product E',
        orderQuantity: 3,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product F',
        orderQuantity: 7,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product G',
        orderQuantity: 12,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product H',
        orderQuantity: 4,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product I',
        orderQuantity: 6,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product J',
        orderQuantity: 9,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product K',
        orderQuantity: 11,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product L',
        orderQuantity: 13,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product M',
        orderQuantity: 2,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product N',
        orderQuantity: 14,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product O',
        orderQuantity: 20,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product P',
        orderQuantity: 18,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product Q',
        orderQuantity: 16,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product R',
        orderQuantity: 1,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product S',
        orderQuantity: 17,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    },
    {
        orderItem: 'Product T',
        orderQuantity: 19,
        salesPermit: 'approved',
        sales: 'app',
        Permit: 'roved'
    }
];


function manufactured() {
    const [data, setData] = useState(order);
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
            <h1 className="mb-4">Manufactured Porducts</h1>
            { !data &&
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
            { data && 
            <><Row className="mb-4">
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
            <TableComponent data={data}/>
        </Row></>
            }
        </Container>
    );
}

export default manufactured;
