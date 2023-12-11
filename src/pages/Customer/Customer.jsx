import { Link } from "react-router-dom";
import "../../components/customers/customer.css";

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
        <ul>
          <li>
            <Link to="/customer/order">All Products</Link>
          </li>
          <li>
            <Link to="/customer/orders">Your Orders</Link>
          </li>
          <li>
            <Link to="/customer/account">Account Settings</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default customer;
