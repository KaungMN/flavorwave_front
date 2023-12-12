import { Form, Row, Col, Button } from "react-bootstrap";

export default function EditForm({ heading, data }) {
  return (
    <div
      className="contact-form-section"
      style={{ textAlign: "left", maxWidth: "500px" }}
    >
      <Form>
        <div className="mb-4">
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Amount in grams" />
              </Form.Group>
              <Form.Select size="sm" required defaultValue="Supplier Name">
                <option disabled selected>Supplier Name</option>
                <option>Keyholder</option>
                <option>Distributor</option>
                <option>Wholesale</option>
              </Form.Select>
            </Col>
          </Row>
          <Button className="mt-4 d-block mx-auto" variant="success">
            Done
          </Button>
        </div>
      </Form>
    </div>
  );
}
