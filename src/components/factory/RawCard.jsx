import SingleRawCard from "./SingleRaw";
import { Row, Col } from "react-bootstrap";

export default function RawCard() {
  const order = [
    {
      rawId: 1,
      rawMaterial: "Rice",
    },
    {
      rawId: 2,
      rawMaterial: "Bread",
    },
    {
      rawId: 3,
      rawMaterial: "Wheat",
    },
    {
      rawId: 4,
      rawMaterial: "Bread",
    },
    {
      rawId: 5,
      rawMaterial: "wheat",
    },
  ];

  return (
    <Row>
      {order.map((i) => (
        <SingleRawCard key={i.orderItem} data={i} />
      ))}
    </Row>
  );
  
}
