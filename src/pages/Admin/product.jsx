import TableComponent from '../../components/admin/product/table/Table';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function product() {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchInfo = async () => {
            const res = await fetch(`http://localhost:8000/api/get-products`);
            const data = await res.json();
            console.log(data);
            setData(data);
        };
        fetchInfo();
    }, []);

    return (
        <Container>
            <h2>Product</h2>
            {data && <TableComponent order={data} />}
        </Container>
    );
}

export default product;
