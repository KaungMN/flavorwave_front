import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./shared/SideBar.jsx";
import Current from "./shared/Current.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Routes, Route } from "react-router-dom";
import Customer from "./pages/Customer/Customer.jsx";
import Factory from "./pages/Factory/Factory.jsx";
import Raw from "./pages/Factory/Raw.jsx";
import Sales from "./pages/sales";
import Logstic from "./pages/Logistic/Logstic.jsx";
import Delivery from "./pages/Logistic/Delivery.jsx";
import Warehouse from "./pages/Warehouse";
import Admin from "./pages/Admin/admin.jsx";
import Staff from "./pages/Admin/staff.jsx";
import Budget from "./pages/Admin/budget.jsx";
import CustomerLogin from "./pages/Customer/CustomerLogin.jsx";
import CustomerSignup from "./pages/Customer/CustomerSignup.jsx";
import CustomerOrderHistory from "./pages/Customer/CustomerOrderHistory.jsx";
import CustomerProductPage from "./pages/Customer/CustomerProductPage.jsx";
import NoMatch from "./pages/nomatch.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div>
      <Row
        style={{
          background: "#f5f5f5",
          position: "fixed",
          width: "100%",
          zIndex: "1",
        }}
      >
        <Col xl={3} lg={3} xs={2}></Col>
        <Col xl={9} lg={9} xs={10}>
          <Current />
        </Col>
      </Row>
      <Row>
        <Col xl={3} lg={3} xs={2}>
          <Sidebar />
        </Col>
        <Col style={{ marginTop: "80px" }} xl={9} lg={9} xs={10}>
          <Routes>
            {/* <Route path="/" element={<Sidebar />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/factory" element={<Factory />} />
            <Route path="/factory/raw" element={<Raw />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/staff" element={<Staff />} />
            <Route path="/admin/budget" element={<Budget />} />
            <Route path="/logstic" element={<Logstic />} />
            <Route path="/logstic/delivery" element={<Delivery />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/customer/login" element={<CustomerLogin />} />
            <Route path="/customer/signup" element={<CustomerSignup />} />
            <Route path="/customer/order" element={<CustomerProductPage />} />
            <Route
              path="/customer/history"
              element={<CustomerOrderHistory />}
            />
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
