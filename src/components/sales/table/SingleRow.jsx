import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';

const list = {
    listStyle: 'none',
    paddingLeft: '0'
};

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
                {order.map((item, id) => (
                    <TableRow key={id} item={item} id={id} />
                ))}
            </tbody>
        </Table>
    );
}
