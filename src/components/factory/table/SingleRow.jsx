import Edit from "../EditProduct";
import Delete from "../Delete";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const heading = [
  "Product Name",
  "Box",
  "Pcs",
  "Price",
  "expire-date",
  "Location",
];

export default function TableSingleRow({ order }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Raw Material</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {order.map((item, id) => (
          <tr key={id}>
            <td>{id + 1}</td>
            <td key={item.id}>{item.rawMaterial}</td>
            <td>
              <Edit initialData={item} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
