import Edit from '../EditStaff';
import Delete from '../Delete';
import { useEffect, useState } from 'react';

const list = {
    listStyle: 'none',
    paddingLeft: '0'
};
    let staffId = JSON.parse(sessionStorage.getItem('staffId'));

export default function TableRow({ item, id, handleDelete }) {
    const [role,setRole] = useState(null);
    const [department,setDepartment] = useState(null);
    console.log(item.role_id);

    // const getRole = async() => {
    //     const res = await axios.get('http://localhost::8000/api/get-role/'+item.role_id);
    //     const datas = res.data;
    //     console.log(datas)
    //     setRole(datas.name)
    // }

    // const getDepartment = async(id) => {
    //     const res = await axios.get('http://localhost::8000/api/get-department/'+item.department_id);
    //     const datas = res.data;
    //     console.log(datas)
    //     setDepartment(datas.name)
    // }

    const getRole = (roleId) => {
        switch(roleId){
            case 1: 
                return "admin";
            case 2:
                return "manager";
            case 3:
                return "senior staff";
            case 4:
                return "junior staff"
        }
    }

    const getDepartment = (departmentId) => {
        switch(departmentId){
            case 1: 
                return "admin";
            case 2:
                return "sales";
            case 3:
                return "logistics";
            case 4:
                return "warehouse";
            case 5:
                return "factory"

        }
    }

   
    return (
        <tr key={id}>
                        <td>{id + 1}</td>
                        <td key={item.name}>{item.name}</td>
                        <td key={item.email}>{item.email}</td>
                        <td key={item.phone}>{item.phone}</td>
                        <td key={item.role_id}>{getRole(item.role_id)}</td>
                        <td key={item.department_id}>{getDepartment(item.department_id)}</td>
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
    );
}
