// import Edit from '../EditProduct';
import Table from 'react-bootstrap/Table';
// import { useState, useEffect } from 'react';
import TableRow from './TableRow';

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
                    <TableRow item={item} key={id} id={id}/>
                ))}
            </tbody>
        </Table>
    );
}
