import Edit from '../EditStaff';
import Delete from '../Delete';
import axios from "axios"
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
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
                  <TableRow key={id} item={item} id={id} handleDelete={handleDelete}/>  
                ))}
            </tbody>
        </Table>
    );
}
