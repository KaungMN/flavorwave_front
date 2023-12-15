import { Row, Col, Card, Button } from "react-bootstrap";
import BuyProductModal from "./BuyProduct";
import logo from "../../images/Logo (1).png";

export default function SinlgeRawCard({ data }) {
  let staffId = JSON.parse(sessionStorage.getItem("staffId"));

  return (
    <Card style={{ width: "360px", height: "160px", margin: "30px auto" }}>
      <Row>
        <Col xs={4}>
          <img className="mt-4" src={logo} width="110" height="110" />
        </Col>
        <Col xs={8}>
          <Card.Body className="my-3 mx-auto">
            <Card.Title>Order Data</Card.Title>
            <Card.Text className="d-block  text-start px-4">
              <div>Raw Material :{data.rawMaterial}</div>
            </Card.Text>
            {staffId >= 2 ? <BuyProductModal /> : null}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
