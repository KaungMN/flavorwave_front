import { Link } from "react-router-dom";

function customer() {
  return (
    <>
      <div>
        <h1>Welcome to Our Store!</h1>
        <p>Explore our featured products and find great deals.</p>

        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link to="/customer/products">All Products</Link>
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
