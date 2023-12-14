import AddTruckModal from '../TruckModal';
import CancelDeliveryModal from '../CancelDelivery';
import { useEffect, useState } from 'react';
import axios from 'axios';

const list = {
    listStyle: 'none',
    paddingLeft: '0'
};

export default function TableRow({ item, id }) {
    const [cusData, setCusData] = useState();
    let staffId = JSON.parse(sessionStorage.getItem('staffId'));

    useEffect(() => {
        const fetchInfo = async () => {
            // const res = await fetch(`http://localhost:8000/api/get-customer/${item.customer_id}`);
            // const data = await res.json();
            const res = await axios.get(`http://localhost:8000/api/get-customer/${item.customer_id}`);
            const data = res.data;
            console.log(data);
            setCusData(data);
        };
        fetchInfo();
    }, []);

    return (
        <tr key={id}>
            <td>{id + 1}</td>
            <td key={item.id}>{item.id}</td>
            <td key={item.customer_id}>{cusData?.name}</td>
            <td key={item.address}>
                {item.city + item.township} <br /> {item.address}
            </td>
            <td>
                <ol>
                    {JSON.parse(item.products).map((i) => (
                        <li>{i.name}</li>
                    ))}
                </ol>
            </td>
            <td>
                <ul style={list}>
                    {JSON.parse(item.products).map((i) => (
                        <li>{i.quantity}</li>
                    ))}
                </ul>
            </td>
            <td>{item.quantity}</td>
            <td>{item.remark}</td>
            {staffId >= 2 ? (
                <td>
                    <AddTruckModal initialData={item} />
                    <CancelDeliveryModal />
                </td>
            ) : null}
        </tr>
    );
}
