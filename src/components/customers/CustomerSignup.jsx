// import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Cities, Townships } from "../../shared/CitiesAndTownship";

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
        <h2>Signup</h2>
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
                <Form.Control
                  size="sm"
                  type="password"
                  placeholder="Password*"
                />
              </Col>
            </Row>
          </div>
          <div className="mb-4">
            <Row>
              <Col>
                <Form.Control size="sm" type="email" placeholder="Email*" />
              </Col>
              <Col>
                <Form.Select size="sm" required defaultValue="Customer Type">
                  <option disabled>Customer Type</option>
                  <option>Keyholder</option>
                  <option>Distributor</option>
                  <option>Wholesale</option>
                </Form.Select>
              </Col>
            </Row>
          </div>
          <div className="mb-4">
            <Row>
              <Col>
                <Form.Select size="sm" required defaultValue="Cities">
                  <option disabled>Cities</option>
                  {Cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select size="sm" required defaultValue="Townships">
                  <option disabled>Townships</option>
                  {Townships.map((township) => (
                    <option key={township} value={township}>
                      {township}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </div>
          <div className="mb-4">
            <Row>
              <Col>
                <Form.Control size="sm" type="text" placeholder="Address" />
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Phone Number"
                />
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
