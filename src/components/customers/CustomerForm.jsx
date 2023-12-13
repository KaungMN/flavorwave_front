// import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function CustomerForm() {
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
                  disabled
                  readOnly
                  size="md"
                  type="email"
                  placeholder="Name*"
                />
              </Col>
              <Col>
                <Form.Control size="md" type="email" placeholder="Email*" />
              </Col>
            </Row>
          </div>
          <div className="mb-4">
            <Row>
              <Col>
                <Form.Control size="md" type="email" placeholder="Phone" />
              </Col>
              <Col>
                <Form.Control size="md" type="email" placeholder="Subject" />
              </Col>
            </Row>
          </div>
          <Button type="submit"> Submit </Button>
        </Form>
      </div>
    </>
  );
}

export default CustomerForm;
