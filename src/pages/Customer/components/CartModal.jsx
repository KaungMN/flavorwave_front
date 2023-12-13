import React, { useContext } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

function CartModal({ isOpen, cartList, handleClose, increment, decrement, totalPrice, listToForm }) {
    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Your Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table responsive className="table-borderless">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Boxes</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    {cartList &&
                        cartList.length > 0 &&
                        cartList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>

                                <td>
                                    <Button
                                        className="round-button"
                                        variant="primary"
                                        onClick={() => increment && increment(item.id)}
                                    >
                                        <div className="d-flex justify-content-center align-items-center">+</div>
                                    </Button>
                                    <p className="product-counter">
                                        {cartList.find((cartListItem) => cartListItem.id === item.id)?.quantity || 0}{' '}
                                    </p>
                                    <Button variant="primary" onClick={() => decrement && decrement(item.id)}>
                                        -
                                    </Button>
                                </td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                    <tr>
                        <td colSpan={2}>Total Price:</td>
                        <td>${totalPrice && totalPrice.toFixed(2)}</td>
                    </tr>
                </Table>
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
