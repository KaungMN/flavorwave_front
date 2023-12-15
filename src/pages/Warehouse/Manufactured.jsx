import TableComponent from '../../components/warehouse/manufactured/table/Table';
import { useState, useEffect } from 'react';
import { Button, Row, Col, Container, Form, InputGroup } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

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
    
    const fetchInfo = async () => {
        // const res = await fetch(`http://localhost:8000/api/get-products`);
        // const data = await res.json();
        const res = await axios.get('http://localhost:8000/api/check-stock');
        const data = res.data;
        setData(data);
        console.log(data);
    };

    useEffect(() => {
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

export default manufactured;
