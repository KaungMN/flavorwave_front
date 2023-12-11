import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./shared/SideBar.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Routes, Route } from "react-router-dom";
import Customer from "./pages/Customer/Customer.jsx";
import Factory from "./pages/factory";
import Sales from "./pages/sales";
import Logstic from "./pages/logstic";
import Warehouse from "./pages/warehouse";
import Admin from "./pages/admin";
import CustomerLogin from "./pages/Customer/CustomerLogin.jsx";
import CustomerSignup from "./pages/Customer/CustomerSignup.jsx";
import CustomerProductPage from "./pages/Customer/CustomerProductPage.jsx";
import NoMatch from "./pages/nomatch.jsx";

function App() {
  return (
    <div>
      <Row>
        <Col xs={3}>
          <Sidebar />
        </Col>
        <Col xs={9}>
          <Routes>
            <Route path="/" element={<Sidebar />} />
            <Route path="/factory" element={<Factory />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/logstic" element={<Logstic />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/customer/login" element={<CustomerLogin />} />
            <Route path="/customer/signup" element={<CustomerSignup />} />
            <Route path="/customer/order" element={<CustomerProductPage />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default App;
