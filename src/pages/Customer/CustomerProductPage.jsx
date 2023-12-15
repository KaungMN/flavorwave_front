import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import { items } from '../../components/customers/Products.jsx';
import AddOrder from './components/OrderForm.jsx';
import CartModal from './components/CartModal.jsx';
import { getProducts } from '../../services/loadProduct.js';
import Spinner from 'react-bootstrap/Spinner';
import { getSessionStorage } from '../../utils/index.js';
import { CUSTOMER_LOGIN_ROUTE } from '../../constants/routes.js';
import { useNavigate } from 'react-router-dom';
import Logout from './components/Logout.jsx';

function CustomerProductPage() {
    const history = useNavigate();
    const [items, setItems] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts();
            setItems(data);
        };

        fetchData();
    }, []);

    const [cartList, setCartList] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isOpenCartModal, setIsOpenCartModal] = useState(false);
    const [isOpenAddress, setIsAddressModal] = useState(false);
    const [isOpenConfirm, setIsOpenConfirm] = useState(false);

    const toggleModal = () => setIsOpenCartModal((prev) => !prev);

    const addToCart = (product) => {
        const isAuthToken = getSessionStorage('authToken');
        if (!isAuthToken) {
            history(CUSTOMER_LOGIN_ROUTE);
            return;
        }
        toggleModal();
        // Check if the item is already in the cartList
        const existingItem = cartList.find((item) => item.id === product.id);
        if (existingItem) {
            // If the item is already in the cartList, update the quantity
            const updatedCart = cartList.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartList(updatedCart);
        } else {
            // If the item is not in the cartList, add it with quantity 1
            const updatedCart = [...cartList, { ...product, quantity: 1 }];
            setCartList(updatedCart);
        }
        calculateTotalPrice(cartList);
    };

    const calculateTotalPrice = (cartListItems) => {
        const total = cartListItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(total);
    };

    const handleClose = () => {
        toggleModal();
    };
    const handleCloseAddress = () => {
        setIsAddressModal(false);
    };

    const handleOpenAddress = () => {
        setIsAddressModal(true);
    };
    const handleOpenConfirm = () => {
        setIsOpenConfirm(true);
    };

    const handleNewOrderData = (newData) => {
        console.log('Received new order data in parent:', newData);
    };
    useEffect(() => {
        calculateTotalPrice(cartList);
    }, [cartList]);

    const increment = (productId) => {
        const updatedCart = cartList.map((item) =>
            item.id === productId
                ? { ...item, quantity: item.quantity + 1, subTotalPrice: (item.quantity + 1) * item.price }
                : { ...item, subTotalPrice: item.quantity * item.price }
        );
        setCartList(updatedCart);
    };

    const decrement = (productId) => {
        const updatedCart = cartList
            .map((item) =>
                item.id === productId && item.quantity > 0
                    ? { ...item, quantity: item.quantity - 1, subTotalPrice: (item.quantity - 1) * item.price }
                    : { ...item, subTotalPrice: item.quantity * item.price }
            )
            .filter((item) => item.quantity > 0);
        setCartList(updatedCart);
    };
    const listToForm = cartList.map(({ id, name, quantity, price, subTotalPrice }) => ({
        id,
        name,
        quantity,
        price,
        subTotalPrice
    }));

    return (
        <div>
            <h1>Products</h1>
            <Row>
                {items && 
                    items.map((item) => (
                        <Col key={item.id} xs={12} md={6} lg={4} className="p-3">
                            <Card className="h-100">
                                <Card.Img
                                    style={{
                                        objectFit: 'cover',
                                        height: '30vh',
                                        overflow: 'hidden'
                                    }}
                                    src={item.image_url}
                                    alt="product image"
                                />
                                <Card.Body>
                                    <Card.Title>{item.name} </Card.Title>
                                    <Card.Text>
                                        {item.description}
                                        <p>
                                            <strong>Price:</strong> ${item.price.toFixed(2)}
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="card-footer">
                                    <Button variant="primary" onClick={() => addToCart(item)}>
                                        Add to Cart
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
            </Row>

            <CartModal
                isOpen={isOpenCartModal}
                cartList={cartList}
                handleClose={handleClose}
                increment={increment}
                decrement={decrement}
                totalPrice={totalPrice}
                listToForm={listToForm}
                openToAddress={handleOpenAddress}
            />
            <AddOrder
                isOpen={isOpenAddress}
                setIsAddressModal={setIsAddressModal}
                handleClose={handleCloseAddress}
                openToConfirm={handleOpenConfirm}
                orderData={listToForm}
                totalPrice={totalPrice}
                listToForm={listToForm}
                onNewOrder={handleNewOrderData}
            />
            <Logout />
        </div>
    );
}

export default CustomerProductPage;
