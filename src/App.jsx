import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./shared/SideBar.jsx";
import Form from "./shared/Form.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Routes, Route } from "react-router-dom";
import Customer from "./pages/Customer/Customer.jsx";
import Factory from "./pages/factory";
import Sales from "./pages/sales";
import Logstic from "./pages/Logistic/Logstic.jsx";
import Delivery from "./pages/Logistic/Delivery.jsx";
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
        <Col xl={3} lg={3} xs={2}>
          <Sidebar />
        </Col>
        <Col xl={9} lg={9} xs={10}>
          <Form />
          <Routes>
            {/* <Route path="/" element={<Sidebar />} /> */}
            <Route path="/factory" element={<Factory />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/logstic" element={<Logstic />} />
            <Route path="/delivery" element={<Delivery />} />
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
