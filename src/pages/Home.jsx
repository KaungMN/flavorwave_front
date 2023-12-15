import React from 'react';
import BlogFront from '../images/Banner Image.jpg';
import { Carousel, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CUSTOMER_ORDER_ROUTE } from '../constants/routes';
import coursel_1 from '../images/coursel (1).png';
import coursel_2 from '../images/coursel (2).png';
import coursel_3 from '../images/coursel (3).png';

function Home() {
    const isAuthToken = getSessionStorage('authToken');

    const loginLogoutButton = () => {
        if (!isAuthToken) {
            return (
                <Link to={CUSTOMER_LOGIN_ROUTE}>
                    <Button className="header-button">Login</Button>
                </Link>
            );
        } else {
            return (
                <Link to={CUSTOMER_LOGIN_ROUTE}>
                    <Button className="header-button">Logout</Button>
                </Link>
            );
        }
    };
    const nagivate = useNavigate();
    return (
        <>
            <header className="home-header">
                <div className="header-content">
                    <h1>Welcome to Flavor Wave</h1>
                    <p class="fs-5">Your Trusted Partner in Wholesale Solutions</p>
                </div>
                <div>{loginLogoutButton()}</div>
            </header>
            <img src={BlogFront} className="img-fluid mt-3 d-block " alt="blog front" />
            <div className="ms-5 px-5">
                <section className="text-start p-5">
                    <h2>Explore Our Wholesale Platform</h2>
                    <ul>
                        <li>Browse our extensive catalog featuring a diverse range of high-quality products.</li>
                        <li>
                            Take advantage of exclusive wholesale pricing and bulk discounts tailored for your business.
                        </li>
                    </ul>

                    <h2>Effortless Ordering Process</h2>
                    <ol>
                        <li>
                            <strong>Browse:</strong> Discover a wide selection of products across different categories.
                        </li>
                        <li>
                            <strong>Order:</strong> Easily place bulk orders through our user-friendly online platform.
                        </li>
                        <li>
                            <strong>Customize:</strong> Tailor your orders to meet specific requirements with
                            customizable options.
                        </li>
                    </ol>
                    <div>
                        <Carousel>
                            <Carousel.Item
                                className="carousel"
                                style={{ objectFit: 'cover', height: '50vh', overflow: 'hidden' }}
                            >
                                <Image
                                    src={coursel_1}
                                    text="First slide"
                                    onClick={() => nagivate(CUSTOMER_ORDER_ROUTE)}
                                />
                                <Carousel.Caption>
                                    <h3>Burmese Bliss</h3>
                                    <p>Experience the blissful taste of Burma with this exquisite tea.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item
                                className="carousel"
                                style={{ objectFit: 'cover', height: '50vh', overflow: 'hidden' }}
                            >
                                <Image
                                    src={coursel_2}
                                    text="Second slide"
                                    onClick={() => nagivate(CUSTOMER_ORDER_ROUTE)}
                                />
                                <Carousel.Caption>
                                    <h3>Golden Sunshine Tea</h3>
                                    <p>Brighten your day with the warmth of golden sunshine in every sip.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item
                                className="carousel"
                                style={{ objectFit: 'cover', height: '50vh', overflow: 'hidden' }}
                            >
                                <Image
                                    src={coursel_3}
                                    text="Third slide"
                                    onClick={() => nagivate(CUSTOMER_ORDER_ROUTE)}
                                />
                                <Carousel.Caption>
                                    <h3>Mango Tango Delight</h3>
                                    <p>Dance into delight with the tropical flavors of mango tango.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <h2 className="mt-3">Why Choose Us?</h2>
                    <ul>
                        <li>
                            <strong>Reliable Suppliers:</strong> Partner with trusted suppliers to ensure the quality of
                            your products.
                        </li>
                        <li>
                            <strong>Efficient Logistics:</strong> Benefit from a streamlined logistics process for
                            timely deliveries.
                        </li>
                        <li>
                            <strong>Dedicated Support:</strong> Our customer support team is here to assist you at every
                            step.
                        </li>
                    </ul>

                    <h2>From Order to Arrival</h2>
                    <ol>
                        <li>
                            <strong>Order Confirmation:</strong> Receive instant confirmation of your order upon
                            submission.
                        </li>
                        <li>
                            <strong>Processing:</strong> Our team works swiftly to process and prepare your order for
                            shipment.
                        </li>
                        <li>
                            <strong>Shipment:</strong> Track your packages as they are dispatched and make their way to
                            your destination.
                        </li>
                        <li>
                            <strong>Arrival:</strong> Experience the satisfaction of receiving your wholesale goods on
                            time and in perfect condition.
                        </li>
                    </ol>

                    <h2>Get Started</h2>
                    <ul>
                        <li>
                            <a href={CUSTOMER_SIGN_UP_ROUTE}>Register</a> for a wholesale account to unlock exclusive
                            benefits.
                        </li>
                        <li>Explore our current promotions and discounts to maximize your savings.</li>
                    </ul>
                </section>
            </div>
            <footer>&copy; 2023 Your Wholesale Business. All rights reserved.</footer>
        </>
    );
}

export default Home;
