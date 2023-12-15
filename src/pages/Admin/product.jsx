import TableComponent from '../../components/admin/product/table/Table';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

function product() {
    const [data, setData] = useState();

    async function getProducts() {
        const res = await axios.get('http://localhost:8000/api/get-products');
        const datas = res.data;
        console.log(res);
        console.log(datas);
        setData(datas);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container>
            <h2>Product</h2>
            {data ? (
                <TableComponent order={data} />
            ) : (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </Container>
    );
}

export default product;
