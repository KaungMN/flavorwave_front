import { Row, Col, Card, Button } from "react-bootstrap";
import ApproveDeliveryModal from "./ApproveDelivery";
import CancelDeliveryModal from "./CancelDelivery";
import logo from "../../images/Logo (1).png";

function InfoCard({ data }) {
  // let staffId = JSON.parse(sessionStorage.getItem("staffId"));

  return (
    <Card style={{ width: "450px", height: "220px", margin: "30px auto" }}>
      <Row>
        <Col xs={5}>
          <img className="mt-4" src={logo} width="150" height="150" />
        </Col>
        <Col>
          <Card.Body className="my-3 mx-auto">
            <Card.Title style={{ paddingRight: "41px" }}>Order Data</Card.Title>
            <Card.Text className="d-block  text-start px-4">
              <div>Order Item :{data.orderItem}</div>
              <div>Order Quantity :{data.orderQuantity}</div>
              <div>Total Price :{data.orderQuantity}</div>
            </Card.Text>
            <ApproveDeliveryModal />
            <CancelDeliveryModal />
            {/* {staffId >= 2 ?  : null} */}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default InfoCard;
