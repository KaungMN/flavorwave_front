import TableComponent from '../../components/warehouse/manufactured/table/Table';
import { useState } from 'react';
import { Button, Row, Col, Container, Form, InputGroup } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const order = [
    {
        raw_material_id: 'Product A',
        product_id : 5,
        product_price:654,
        total_quantity : 57,
        release_date: 'roved',
        expire_date : 4355,
        warehouse_id : 2 ,
        location : "here"
    },
    {
        raw_material_id: 'Product A',
        product_id : 6,
        product_price: 5654,
        total_quantity : 56,
        release_date: 'roved',
        expire_date : 4355,
        warehouse_id : 2 ,
        location : "here"
    },
    {
        raw_material_id: 'Product A',
        product_id : 66,
        product_price: 4555,
        total_quantity : 4,
        release_date: 'roved',
        expire_date : 4355,
        warehouse_id : 2 ,
        location : "here"
    },
    {
        raw_material_id: 'Product A',
        product_id : 90,
        product_price: 700,
        total_quantity : 43,
        release_date: 'roved',
        expire_date : 4355,
        warehouse_id : 2 ,
        location : "here"
    }  ,  {
        raw_material_id: 'Product A',
        product_id : 5,
        product_price: 76,
        total_quantity : 3,
        release_date: 'roved',
        expire_date : 4355,
        warehouse_id : 2 ,
        location : "here"
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
