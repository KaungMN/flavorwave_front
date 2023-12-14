import TableComponent from '../components/sales/table/Table.jsx';
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import axios from 'axios';

function sales() {
    let [data, setData] = useState();

    useEffect(() => {
        const fetchInfo = async () => {
            // const res = await fetch(`http://localhost:8000/api/getpreorders`);
            // const data = await res.json();
            const res = await axios.get('http://localhost:8000/api/getpreorders');
            const data = res.data;
            setData(data);
        };
        fetchInfo();
    }, []);
    return (
        <div>
            <h2>sales</h2>
            {data ? (
                <TableComponent data={data} />
            ) : (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </div>
    );
}

export default sales;
