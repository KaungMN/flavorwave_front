import OrderConfirmModal from '../ConfirmModal';
import OrderRejectModal from '../RejectModal';
import { useEffect, useState } from 'react';

const list = {
    listStyle: 'none',
    paddingLeft: '0'
};

export default function TableRow({ item, id }) {
    const [cusData, setCusData] = useState();
    let staffId = JSON.parse(sessionStorage.getItem('staffId'));

    useEffect(() => {
        const fetchInfo = async () => {
            const res = await fetch(`http://localhost:8000/api/get-customer/${item.customer_id}`);
            const data = await res.json();
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
            <td>
                <ul style={list}>
                    {JSON.parse(item.products).map((i) => (
                        <li>{i.subTotalPrice / i.quantity}</li>
                    ))}
                </ul>
            </td>
            <td>
                <ul style={list}>
                    {JSON.parse(item.products).map((i) => (
                        <li>{i.subTotalPrice}</li>
                    ))}
                </ul>
            </td>

            <td>{item.sub_total}</td>
            <td>{item.remark}</td>
            {item.status !== 'approved' ? (
                staffId >= 2 ? (
                    <td>
                        <OrderConfirmModal preorderId={item.id} />
                        <OrderRejectModal />
                    </td>
                ) : null
            ) : (
                <td>Order Confirmed</td>
            )}
        </tr>
    );
}
