import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./shared/SideBar.jsx";
import TableComponent from "./shared/Table.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RouterProvider } from "react-router-dom";
import { router } from "./AppRouter.jsx";

function App() {
  return (
    <div>
      <RouterProvider router={router} />

      <Row>
        <Col xs={3}>
          <Sidebar />
        </Col>
        <Col xs={9}>
          <TableComponent />
          <h1>Hello</h1>
        </Col>
      </Row>
    </div>
  );
}

export default App;
