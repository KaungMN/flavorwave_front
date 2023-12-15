import Edit from '../EditProduct';
import Delete from '../Delete';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

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
                {order?.map((item, id) => (
                    <tr key={id}>
                        <td>{id + 1}</td>
                        <td key={item.name}>{item.name}</td>
                        {item.raw && (
                            <td key={item.raw}>
                                <ol>
                                    {item.raw?.map((r, id) => (
                                        <>
                                            <li key={r.name1}>{r.name1}</li>
                                            <li key={r.name2}>{r.name2}</li>
                                            <li key={r.name3}>{r.name3}</li>
                                            <li key={r.name4}>{r.name4}</li>
                                        </>
                                    ))}
                                </ol>
                            </td>
                        )}
                        <td key={item.price}>{item.price}</td>
                        <td key={item.desc}>{item.desc}</td>
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
