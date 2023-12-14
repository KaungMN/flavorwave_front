import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Edit from './EditProduct';
import Delete from './Delete';
const heading = ['Truck Name', 'Truck Number', 'Capacity', 'Staff Id'];

export default function TableSingleRow({ order, handleDelete }) {
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
                        <td >{item.truck_name}</td>
                        <td >{item.truck_number}</td>
                        <td >{item.capacity}</td>
                        <td >{item.staff_id}</td>
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
