import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomerLogin() {
  return (
    <div
      className="contact-form-section"
      style={{ textAlign: "left", margin: "50px auto", maxWidth: "500px" }}
    >
      <h2>Log-in</h2>
      <Form>
        <div className="mb-4">
          <Row>
            <Col>
              <Form.Control
                //   disabled
                //   readOnly
                size="sm"
                type="text"
                placeholder="Name*"
              />
            </Col>
            <Col>
              <Form.Control size="sm" type="password" placeholder="Password*" />
            </Col>
          </Row>
        </div>
        <Button type="submit"> Submit </Button>
      </Form>
      <p className="mt-3 text-center">
        Don't have an account? <Link to="/customer/signup">Signup</Link>
      </p>
    </div>
  );
}

export default CustomerLogin;
