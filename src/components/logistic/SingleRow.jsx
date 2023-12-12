import AddTruckModal from "./TruckModal";
import Table from "react-bootstrap/Table";

export default function TableSingleRow({ header, order }) {
  return (
    <Table striped bordered hover>
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
          <tr key={id}>
            <td>{id + 1}</td>
            <td key={item.orderItem}>{item.orderItem}</td>
            <td key={item.orderQuantity}>{item.orderQuantity}</td>
            <td key={item.salesPermit}>{item.salesPermit}</td>
            <td>
              <AddTruckModal initialData={item} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
