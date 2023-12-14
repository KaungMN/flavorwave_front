import TableComponent from '../../components/logistic/table/Table.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

function logstic() {
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
    console.log(data);

    return (
        <div>
            <h1>logstic</h1>
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

export default logstic;
