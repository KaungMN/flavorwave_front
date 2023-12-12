import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import { items } from "../../components/customers/Products.jsx";

function CustomerProductPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
    setShowCart(true);
  };

  const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const handleClose = () => setShowCart(false);

  useEffect(() => {
    calculateTotalPrice(cart);
  }, [cart]);

  const increment = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
  };
  const decrement = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
  };

  return (
    <div>
      <h1>Products</h1>
      <Row>
        {items.map((item) => (
          <Col key={item.id} xs={12} md={6} lg={4}>
            <Card>
              <Card.Img class="product-image" variant="top" src={item.image} />
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
                    onClick={() => increment(item.id)}
                  >
                    +
                  </Button>
                  <Button
                    className="round-button"
                    variant="primary"
                    onClick={() => decrement(item.id)}
                  >
                    -
                  </Button>
                  <p className="product-counter">
                    {cart.find((cartItem) => cartItem.id === item.id)
                      ?.quantity || 0}{" "}
                    Boxes
                  </p>
                </div>
                <Button variant="primary" onClick={() => addToCart(item)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center">
        <Button
          variant="primary"
          onClick={() => console.log("Place Order clicked")}
        >
          Place Order
        </Button>
      </div>
      <Modal show={showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <hr />
            </div>
          ))}
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => console.log("Place Order clicked")}
          >
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CustomerProductPage;
