import React, { useEffect, useState } from "react";
import { products } from "../../components/customers/Products.jsx";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import ProductImg from "../../../public/product_img/burmese_bliss_2.png";

function CustomerProductPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
    setShowCart(true);
  };

  const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  const handleClose = () => setShowCart(false);

  useEffect(() => {
    calculateTotalPrice(cart);
  }, [cart]);
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
      <Modal show={showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
              <hr />
            </div>
          ))}
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CustomerProductPage;
