import Edit from "../EditStaff";
import Delete from "../Delete";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const heading = ["Product Name", "Box", "Pcs", "Price", "expire-date"];

export default function TableSingleRow({ order, handleDelete }) {
  let staffId = JSON.parse(sessionStorage.getItem("staffId"));

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
            <td key={item.orderItem}>{item.orderItem}</td>
            <td key={item.orderQuantity}>{item.orderQuantity}</td>
            <td key={item.salesPermit}>{item.salesPermit}</td>
            <td key={item.sales}>{item.sales}</td>
            <td key={item.Permit}>{item.Permit}</td>
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
