import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function CartModal({ isOpen, cartList, handleClose }) {
    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Your Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartList &&
                    cartList.length > 0 &&
                    cartList.map((item) => (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <p>${(item.price * item.quantity).toFixed(2)}</p>
                            <div>
                                <Button
                                    className="round-button me-3"
                                    variant="primary"
                                    onClick={() => increment(item.id)}
                                >
                                    +
                                </Button>
                                <Button className="round-button" variant="primary" onClick={() => decrement(item.id)}>
                                    -
                                </Button>
                                {/* <p className="product-counter">
                                    {cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0} Boxes
                                </p> */}
                            </div>
                            <hr />
                        </div>
                    ))}
                {/* <p>Total Price: ${totalPrice.toFixed(2)}</p> */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        console.log(listToForm);
                    }}
                >
                    Place Order
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CartModal;
