import TableComponent from '../components/sales/table/Table.jsx';
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ReloadingContext } from '../actions/ReloadContext';

function sales() {
    let [data, setData] = useState();
    const { reload } = useContext(ReloadingContext);

    const fetchInfo = async () => {
        // const res = await fetch(`http://localhost:8000/api/getpreorders`);
        // const data = await res.json();
        const res = await axios.get('http://localhost:8000/api/getpreorders');
        const data = res.data;
        setData(data);
    };

    useEffect(() => {
        fetchInfo();
    }, [reload]);

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
