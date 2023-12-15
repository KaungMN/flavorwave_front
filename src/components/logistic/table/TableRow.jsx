import AddTruckModal from '../TruckModal';
import CancelDeliveryModal from '../CancelDelivery';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ReloadingContext } from '../../../actions/ReloadContext';

const list = {
    listStyle: 'none',
    paddingLeft: '0'
};

export default function TableRow({ item, id }) {
    const [cusData, setCusData] = useState();
    const [deliveryData, setDeliveryData] = useState();
    const { reload } = useContext(ReloadingContext);
    // let staffId = JSON.parse(sessionStorage.getItem('staffId'));

    const fetchInfo = async () => {
        // const res = await fetch(`http://localhost:8000/api/get-customer/${item.customer_id}`);
        // const data = await res.json();
        const res = await axios.get(`http://localhost:8000/api/get-customer/${item.customer_id}`);
        const data = res.data;
        setCusData(data);

        const response = await axios.get('http://localhost:8000/api/get-delivery');
        const datas = response.data;
        setDeliveryData(datas);
    };

    useEffect(() => {
        fetchInfo();
    }, [reload]);

    let deli;
    if (deliveryData) {
        deli = deliveryData.filter((p) => p.preorder_id === item.id);
        if (deli.length > 0) {
            console.log("it's in delivery table");
        }
    }

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
            {deli && deli.length > 0 ? (
                <td>Truck Assigned</td>
            ) : (
                <td>
                    <AddTruckModal initialData={item} />
                </td>
            )}
        </tr>
    );
}
