import { Button, Col, Form, Row } from "react-bootstrap";
import { Townships, Cities } from "../../shared/CitiesAndTownship";

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
    </div>
  );
}

export default CustomerLogin;
