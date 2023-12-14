import ApproveDeliveryCard from '../../components/logistic/ApproveCard';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

function Delivery() {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchInfo = async () => {
            // const res = await fetch(`http://localhost:8000/api/get-delivery`);
            // const data = await res.json();
            const res = await axios.get('http://localhost:8000/api/get-delivery');
            const data = res.data;
            setData(data);
        };
        fetchInfo();
    }, []);
    console.log(data);

    return (
        <div className="mx-auto">
            <h1>delivery</h1>
            {data ? (
                <ApproveDeliveryCard data={data} />
            ) : (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </div>
    );
}

export default Delivery;
