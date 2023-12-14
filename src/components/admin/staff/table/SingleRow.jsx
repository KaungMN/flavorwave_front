import Edit from '../EditStaff';
import Delete from '../Delete';
import axios from "axios"
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const heading = ['Name', 'Email', 'Phone', 'Role', 'Department', 'salary', 'Entry Date'];


export default function TableSingleRow({ order, handleDelete }) {
    let staffId = JSON.parse(sessionStorage.getItem('staffId'));

    const [role,setRole] = useState(null);
    const [department,setDepartment] = useState(null);

    const getRole = async(id) => {
        const res = await axios.get('http://localhost::8000/api/get-role/'+id);
        const datas = res.data;
        setRole(datas.name)
    }

    const getDepartment = async(id) => {
        const res = await axios.get('http://localhost::8000/api/get-department/'+id);
        const datas = res.data;
        setDepartment(datas.name)
    }

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
                        <td key={item.name}>{item.name}</td>
                        <td key={item.email}>{item.email}</td>
                        <td key={item.phone}>{item.phone}</td>
                        <td key={item.role_id}>{getRole(item.role_id) && role}</td>
                        <td key={item.department_id}>{getDepartment(item.department_id) && department}</td>
                        <td key={item.salary}>{item.salary}</td>
                        <td key={item.entry_date}>{item.entry_date}</td>
                        <td></td>
                        <td></td>
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
