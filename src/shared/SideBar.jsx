import { Nav, Accordion } from "react-bootstrap";
import "./sidebar.css"; // Import your custom CSS file

const Sidebar = () => {
  let menu = ["admin", "service", "role"];

  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        {menu.map((item) => (
          <Accordion key={item}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Nav.Link href={"/" + item}>{item}</Nav.Link>
              </Accordion.Header>
              <Accordion.Body style={{ color: "#555555", fontSize: 14 }}>
                <ul>
                  <li>
                    <a >Service 1</a>
                  </li>
                  <li>
                    <a>Service 2</a>
                  </li>
                  <li>
                    <a >All Services</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;
