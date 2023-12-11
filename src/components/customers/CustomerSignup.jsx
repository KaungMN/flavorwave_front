// import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function CustomerSignup() {
  // const [input, setInput] = useState({});
  // const handleOnChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInput((prev) => ({ ...prev, [name]: value }));
  // };
  // const handleSubmit = () => {
  //   console.log(input);
  // };
  return (
    <>
      <div
        className="contact-form-section"
        style={{ textAlign: "left", margin: "50px auto", maxWidth: "500px" }}
      >
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
                <Form.Control size="sm" type="email" placeholder="Email*" />
              </Col>
            </Row>
          </div>
          <div className="mb-4">
            <Row>
              <Col>
                <Form.Select size="sm" required defaultValue="Choose Truck">
                  <option disabled>Customer Type</option>
                  <option>Keyholder</option>
                  <option>Distributor</option>
                  <option>Wholesale</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select size="sm" required defaultValue="Choose Truck">
                  <option disabled>Townships</option>
                  <option>Yangon</option>
                  <option>Mandalay</option>
                  <option>Bago</option>
                </Form.Select>
              </Col>
            </Row>
          </div>
          <div className="mb-4">
            <Row>
              <Col>
                <Form.Select size="sm" required defaultValue="Choose Truck">
                  <option disabled>Townships</option>
                  <option>Yangon</option>
                  <option>Mandalay</option>
                  <option>Bago</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Control size="sm" type="text" placeholder="Address" />
              </Col>
            </Row>
          </div>
          <Button type="submit"> Submit </Button>
        </Form>
      </div>
    </>
  );
}

export default CustomerSignup;
