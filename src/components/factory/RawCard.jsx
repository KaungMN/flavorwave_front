import SingleRawCard from "./SingleRaw";
import { Form, Row, Col, Container } from 'react-bootstrap';

export default function RawCard() {
  const order = [
    {
      rawId: 1,
      rawMaterial: "Rice",
    },
    {
      rawId: 2,
      rawMaterial: "Bread",
    },
    {
      rawId: 3,
      rawMaterial: "Wheat",
    },
    {
      rawId: 4,
      rawMaterial: "Bread",
    },
    {
      rawId: 5,
      rawMaterial: "wheat",
    },
  ];

  return (
      <Row>
          <Row>
              <Col>
                  <Form style={{ maxWidth: '300px', margin: '0 auto' }}>
                      <Form.Label>Search Product Name: </Form.Label>
                      <Form.Control
                          size="md"
                          type="text"
                          onChange={(e) => {
                              filterQuantity(e.target.value);
                          }}
                      />
                  </Form>
              </Col>
              <Col>
                  <Form style={{ maxWidth: '300px', margin: '0 auto' }}>
                      <Form.Label>Search Supplier Name: </Form.Label>
                      <Form.Control
                          size="md"
                          type="text"
                          onChange={(e) => {
                              filterQuantity(e.target.value);
                          }}
                      />
                  </Form>
              </Col>
          </Row>
          {order.map((i) => (
              <SingleRawCard key={i.orderItem} data={i} />
          ))}
      </Row>
  );
  
}
