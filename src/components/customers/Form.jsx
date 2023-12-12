import { Form, Row, Col, Button } from "react-bootstrap";

const truck = ["Suzuki", "Mercedes", "Toyota", "Honda"];

export default function EditForm({ data }) {
  return (
    <div
      className="contact-form-section"
      style={{ textAlign: "left", maxWidth: "500px" }}
    >
      <Form>
        <div className="mb-4">
          <Row>
            <Col>
              <Form.Label>OrderItem: </Form.Label>
              <Form.Control
                disabled
                readOnly
                defaultValue={data.orderItem}
                size="sm"
                type="email"
              />
            </Col>
            <Col>
              <Form.Label>OrderQuantity: </Form.Label>
              <Form.Control
                disabled
                readOnly
                defaultValue={data.orderQuantity}
                size="sm"
                type="email"
              />
            </Col>
          </Row>
        </div>
        <div className="mb-4">
          <Row>
            <Col>
              <Form.Label>SalesPermit: </Form.Label>
              <Form.Control
                disabled
                readOnly
                defaultValue={data.salesPermit}
                size="sm"
                type="email"
              />
            </Col>
            <Col>
              <Form.Label>Choose Truck: </Form.Label>
              <Form.Select size="sm" required defaultValue="Choose Truck">
                <option disabled>Choose Truck</option>
                {truck.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
          <Button className="mt-4 d-block mx-auto" variant="success">
            Success
          </Button>
        </div>
      </Form>
    </div>
  );
}
