import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./customer.css";

function CustomerProducts() {
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
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
    </>
  );
}

export default CustomerProducts;
