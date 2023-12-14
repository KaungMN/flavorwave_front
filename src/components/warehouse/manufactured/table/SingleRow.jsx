import Edit from '../EditProduct';
import Table from 'react-bootstrap/Table';

export default function TableSingleRow({ heading, order, handleDelete }) {
    let staffId = JSON.parse(sessionStorage.getItem('staffId'));
    console.log(order);

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
                        <td>{item.product_id}</td>
                        <td>{item.raw_material_id}</td>
                        <td>{item.product_price}</td>
                        <td>{item.total_quantity}</td>
                        <td>{item.release_date}</td>
                        {/* <td>{item.expire_date}</td>
                        <td>{item.warehouse_id}</td>
                        <td>{item.location}</td> */}
                        {staffId >= 2 ? (
                            <td>
                                <Edit initialData={item} />
                            </td>
                        ) : null}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
