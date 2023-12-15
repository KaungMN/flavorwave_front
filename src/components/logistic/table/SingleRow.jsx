import TableRow from './TableRow';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

export default function TableSingleRow({ header, order }) {
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
                    item.status === 'approved' ? <TableRow key={id} item={item} id={id} /> : null
                )}
            </tbody>
        </Table>
    );
}
