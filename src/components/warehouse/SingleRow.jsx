import Edit from "./EditProduct";
import Table from "react-bootstrap/Table";

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
            <td>
              <Edit initialData={item} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
