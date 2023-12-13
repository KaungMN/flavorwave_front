import OrderConfirmModal from "../ConfirmModal";
import OrderRejectModal from "../RejectModal";
import Table from "react-bootstrap/Table";

export default function TableSingleRow({ header, order }) {
  let staffId = JSON.parse(sessionStorage.getItem("staffId"));

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
            {staffId >= 2 ? (
              <td>
                <OrderConfirmModal />
                <OrderRejectModal />
              </td>
            ) : null}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
