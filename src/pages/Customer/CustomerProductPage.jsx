import React, { useEffect, useState } from "react";
import { products } from "../../components/customers/Products.jsx";
import { Button, Card, Col, Row } from "react-bootstrap";
import ProductImg from "../../../public/product_img/burmese_bliss_2.png";

function CustomerProductPage() {
  const items = products;
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run after every render
    console.log(`Count: ${count}`);

    // Clean-up function (optional)
    return () => {
      console.log("Clean-up");
    };
  });

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Products</h1>
      <Row>
        {items.map((item) => (
          <Col xs={12} md={6} lg={4}>
            <Card key={item.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ProductImg} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.description}
                  <p>
                    <strong>Price:</strong> ${item.price.toFixed(2)}
                  </p>
                </Card.Text>
                <div>
                  <Button
                    className="round-button"
                    variant="primary"
                    onClick={increment}
                  >
                    +
                  </Button>
                  <Button
                    className="round-button"
                    variant="primary"
                    onClick={decrement}
                  >
                    -
                  </Button>
                  <p className="product-counter">{count} Boxes</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center">
        <Button variant="primary">Place Order</Button>
      </div>
    </div>
  );
}

export default CustomerProductPage;
