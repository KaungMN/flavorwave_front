import InfoCard from './SingleCard';
import { Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function ApproveDeliveryCard() {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchInfo = async () => {
            const res = await fetch(`http://localhost:8000/api/get-delivery`);
            const data = await res.json();
            setData(data);
        };
        fetchInfo();
    }, []);
    console.log(data);

    return <Row>{data?.map((i) => i.status !== 'approved' && <InfoCard key={i.orderItem} data={i} />)}</Row>;
}
