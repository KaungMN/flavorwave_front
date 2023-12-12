import { Form, Row, Col, Button } from "react-bootstrap";

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
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Box</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" >
                <Form.Label>Box</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Box</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" >
                <Form.Label>Box</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Button className="mt-4 d-block mx-auto" variant="success">Submit</Button>
        </div>
      </Form>
    </div>
  );
}
