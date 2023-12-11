import { Nav, Accordion } from "react-bootstrap";
import "./sidebar.css"; // Import your custom CSS file
import { Link } from "react-router-dom";

const Sidebar = () => {
  let menu = ["admin", "logstic", "customer", "factory", "warehouse", "sales"];

  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Accordion>
          {menu.map((item, id) => (
            <Accordion.Item key={item} eventKey={id}>
              <Accordion.Header>
                <Link to={"/" + item}>{item}</Link>
              </Accordion.Header>
              <Accordion.Body style={{ color: "#555555", fontSize: 14 }}>
                <ul>
                  <li>
                    <a>Service 1</a>
                  </li>
                  <li>
                    <a>Service 2</a>
                  </li>
                  <li>
                    <a>All Services</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Nav>
    </div>
  );
};

export default Sidebar;
