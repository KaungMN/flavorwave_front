import AddTruckModal from '../TruckModal';
import CancelDeliveryModal from '../CancelDelivery';
import Table from 'react-bootstrap/Table';

export default function TableSingleRow({ header, order }) {
    let staffId = JSON.parse(sessionStorage.getItem('staffId'));

    return (
        <Table striped bordered hover responsive="sm">
            <thead>
                <tr>
                    <th>#</th>
                    {header.map((item) => (
                        <th key={item}>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {order.map((item, id) =>
                    item.status === 'approved' ? (
                        <tr key={id}>
                            <td>{id + 1}</td>
                            <td key={item.id}>{item.id}</td>
                            <td key={item.customer_id}>{item.customer_id}</td>
                            <td key={item.address}>{item.city + item.township + item.address}</td>
                            <td></td>
                            <td>{item.quantity}</td>
                            <td></td>
                            <td></td>
                            <td>{item.sub_total}</td>
                            <td>{item.remark}</td>
                            {staffId >= 2 ? (
                                <td>
                                    <AddTruckModal initialData={item} />
                                    <CancelDeliveryModal />
                                </td>
                            ) : null}
                        </tr>
                    ) : null
                )}
            </tbody>
        </Table>
    );
}
