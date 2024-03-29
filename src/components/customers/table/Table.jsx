import Paginator from "./Pagination";
import { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";

const heading = ["orderItem", "orderQuantity", "salesPermit"];
const order = [
  { orderItem: "Product A", orderQuantity: 5, salesPermit: "approved" },
  { orderItem: "Product B", orderQuantity: 10, salesPermit: "approved" },
  { orderItem: "Product C", orderQuantity: 8, salesPermit: "approved" },
  { orderItem: "Product D", orderQuantity: 15, salesPermit: "approved" },
  { orderItem: "Product E", orderQuantity: 3, salesPermit: "approved" },
  { orderItem: "Product F", orderQuantity: 7, salesPermit: "approved" },
  { orderItem: "Product G", orderQuantity: 12, salesPermit: "approved" },
  { orderItem: "Product H", orderQuantity: 4, salesPermit: "approved" },
  { orderItem: "Product I", orderQuantity: 6, salesPermit: "approved" },
  { orderItem: "Product J", orderQuantity: 9, salesPermit: "approved" },
  { orderItem: "Product K", orderQuantity: 11, salesPermit: "approved" },
  { orderItem: "Product L", orderQuantity: 13, salesPermit: "approved" },
  { orderItem: "Product M", orderQuantity: 2, salesPermit: "approved" },
  { orderItem: "Product N", orderQuantity: 14, salesPermit: "approved" },
  { orderItem: "Product O", orderQuantity: 20, salesPermit: "approved" },
  { orderItem: "Product P", orderQuantity: 18, salesPermit: "approved" },
  { orderItem: "Product Q", orderQuantity: 16, salesPermit: "approved" },
  { orderItem: "Product R", orderQuantity: 1, salesPermit: "approved" },
  { orderItem: "Product S", orderQuantity: 17, salesPermit: "approved" },
  { orderItem: "Product T", orderQuantity: 19, salesPermit: "approved" },
];

function TableComponent() {
  let [filterOrders, setFilterOrders] = useState(order);

  function filterQuantity(quantity) {
    let result = order.filter((item) => {
      return item.orderQuantity === parseInt(quantity);
    });
    setFilterOrders(result.length > 0 ? result : order);
  }

  return (
    <Container>
      <div className="mb-4">
        <Row>
          <Col xs={3}>
            <Form.Label>OrderQuantity: </Form.Label>
            <Form.Control
              size="md"
              type="text"
              onChange={(e) => {
                filterQuantity(e.target.value);
              }}
            />
          </Col>
        </Row>
      </div>
      <Paginator header={heading} data={filterOrders} />
    </Container>
  );
}

export default TableComponent;
