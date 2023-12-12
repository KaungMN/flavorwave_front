import { Row, Col, Card, Button } from "react-bootstrap";
import ApproveDeliveryModal from "./ApproveDelivery";
import logo from "../../images/Logo (1).png";

function InfoCard({ data }) {
  return (
    <Card style={{ width: "550px", height: "220px", margin: "30px auto" }}>
      <Row>
        <Col>
          <img className="mt-4" src={logo} width="150" height="150" />
        </Col>
        <Col>
          <Card.Body className="my-3 mx-auto">
            <Card.Title>Order Data</Card.Title>
            <Card.Text className="d-block  text-start px-4">
              <div>Order Item :{data.orderItem}</div>
              <div>Order Quantity :{data.orderQuantity}</div>
              <div>Total Price :{data.orderQuantity}</div>
            </Card.Text>
            <ApproveDeliveryModal />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default InfoCard;
