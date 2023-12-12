import { Link } from "react-router-dom";
import "./customer.css";

function customer() {
  return (
    <>
      <div>
        <Link className="login-link" to="/customer/login">
          Login
        </Link>
        <h1>Welcome to Our Store!</h1>
        <p>Explore our featured products and find great deals.</p>
        <h2>Quick Links</h2>
        <Link to="/customer/order">All Products</Link>
        <br />
        <Link to="/customer/history">Your Orders</Link> <br />
        <Link to="/customer/account">Account Settings</Link>
      </div>
    </>
  );
}

export default customer;
