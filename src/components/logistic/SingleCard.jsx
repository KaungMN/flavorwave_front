import { Row, Col, Card, Button } from "react-bootstrap";

function InfoCard({ data }) {
  return (
    <Card style={{ width: "600px", height: "200px", margin: "0 auto" }}>
      <Row>
        <Col>
          
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default InfoCard;
