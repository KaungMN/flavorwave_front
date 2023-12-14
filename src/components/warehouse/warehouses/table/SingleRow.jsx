import Edit from '../EditProduct';
import Delete from '../Delete';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

export default function TableSingleRow({ heading, order, handleDelete }) {
    let staffId = JSON.parse(sessionStorage.getItem('staffId'));

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    {heading.map((item) => (
                        <th key={item}>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {order.map((item, id) => (
                    <tr key={id}>
                        <td>{id + 1}</td>
                        <td key={item.orderItem}>{item.orderItem}</td>
                        <td key={item.orderQuantity}>{item.orderQuantity}</td>
                        <td key={item.salesPermit}>{item.salesPermit}</td>
                        {staffId >= 2 ? (
                            <td>
                                <Edit initialData={item} />
                                <Delete handleDelete={handleDelete} id={item.orderItem} />
                            </td>
                        ) : null}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
