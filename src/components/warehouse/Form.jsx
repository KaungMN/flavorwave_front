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
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  defaultValue={data.orderItem}
                  size="sm"
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Box</Form.Label>
                <Form.Control
                  defaultValue={data.orderQuantity}
                  size="sm"
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Box</Form.Label>
                <Form.Control
                  defaultValue={data.salesPermit}
                  size="sm"
                  type="text"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Box</Form.Label>
                <Form.Control defaultValue={data.sales} size="sm" type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Box</Form.Label>
                <Form.Control
                  defaultValue={data.Permit}
                  size="sm"
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Box</Form.Label>
                <Form.Control
                  defaultValue={data.Permit}
                  size="sm"
                  type="text"
                />
              </Form.Group>
            </Col>
          </Row>
          <Button className="mt-4 d-block mx-auto" variant="success">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
