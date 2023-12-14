import ApproveDeliveryCard from '../../components/logistic/ApproveCard';
import { useState, useEffect, useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import { ReloadingContext } from '../../actions/ReloadContext';

function Delivery() {
    const [data, setData] = useState();
    const { reload } = useContext(ReloadingContext);

    const fetchInfo = async () => {
        // const res = await fetch(`http://localhost:8000/api/get-delivery`);
        // const data = await res.json();
        const res = await axios.get('http://localhost:8000/api/get-delivery');
        const data = res.data;
        setData(data);
    };

    useEffect(() => {
        fetchInfo();
    }, [reload]);
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
