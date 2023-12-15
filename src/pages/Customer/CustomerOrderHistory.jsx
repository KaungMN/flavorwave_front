import TableComponent from '../../components/customers/historytable/table/Table';
import Spinner from 'react-bootstrap/Spinner';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ReloadingContext } from '../../actions/ReloadContext';

function CustomerOrderHistory() {
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
            <h2>Order History</h2>
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

export default CustomerOrderHistory;
