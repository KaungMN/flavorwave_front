import InfoCard from "./SingleCard";
import { Row } from "react-bootstrap";

export default function ApproveDeliveryCard() {
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

  return (
    <Row>
      {order.map((i) => (
        <InfoCard key={i.orderItem} data={i} />
      ))}
    </Row>
  );
}
