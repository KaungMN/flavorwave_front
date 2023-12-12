import React from "react";
import BlogFront from "../images/Blog_Front.png";

function Home() {
  return (
    <>
      <header>
        <h1>Welcome to Your Wholesale Business</h1>
        <p>Your Trusted Partner in Wholesale Solutions</p>
      </header>
      <img
        src={BlogFront}
        className="img-fluid mt-3 d-block "
        alt="blog front"
      />
      <section>
        <h2>Explore Our Wholesale Platform</h2>
        <ul>
          <li>
            Browse our extensive catalog featuring a diverse range of
            high-quality products.
          </li>
          <li>
            Take advantage of exclusive wholesale pricing and bulk discounts
            tailored for your business.
          </li>
        </ul>

        <h2>Effortless Ordering Process</h2>
        <ol>
          <li>
            <strong>Browse:</strong> Discover a wide selection of products
            across different categories.
          </li>
          <li>
            <strong>Order:</strong> Easily place bulk orders through our
            user-friendly online platform.
          </li>
          <li>
            <strong>Customize:</strong> Tailor your orders to meet specific
            requirements with customizable options.
          </li>
        </ol>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Reliable Suppliers:</strong> Partner with trusted suppliers
            to ensure the quality of your products.
          </li>
          <li>
            <strong>Efficient Logistics:</strong> Benefit from a streamlined
            logistics process for timely deliveries.
          </li>
          <li>
            <strong>Dedicated Support:</strong> Our customer support team is
            here to assist you at every step.
          </li>
        </ul>

        <h2>From Order to Arrival</h2>
        <ol>
          <li>
            <strong>Order Confirmation:</strong> Receive instant confirmation of
            your order upon submission.
          </li>
          <li>
            <strong>Processing:</strong> Our team works swiftly to process and
            prepare your order for shipment.
          </li>
          <li>
            <strong>Shipment:</strong> Track your packages as they are
            dispatched and make their way to your destination.
          </li>
          <li>
            <strong>Arrival:</strong> Experience the satisfaction of receiving
            your wholesale goods on time and in perfect condition.
          </li>
        </ol>

        <h2>Get Started</h2>
        <ul>
          <li>
            Register for a wholesale account to unlock exclusive benefits.
          </li>
          <li>
            Explore our current promotions and discounts to maximize your
            savings.
          </li>
        </ul>
      </section>

      <footer>&copy; 2023 Your Wholesale Business. All rights reserved.</footer>
    </>
  );
}

export default Home;
