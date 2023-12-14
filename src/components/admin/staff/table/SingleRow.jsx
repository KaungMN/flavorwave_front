// import Edit from '../EditStaff';
// import Delete from '../Delete';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';

const heading = ['Name', 'Email', 'Phone', 'Role', 'Department', 'salary', 'Entry Date'];

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
                    <TableRow item={item} key={id} id={id} />
                ))}
            </tbody>
        </Table>
    );
}
