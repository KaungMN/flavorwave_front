import { Navbar, Nav, Accordion } from "react-bootstrap";
import "./sidebar.css"; // Import your custom CSS file
import { Link } from "react-router-dom";
import { useState } from "react";
let menu = [
  { main: "Admin" },
  { main: "logstic", sub: ["delivery"] },
  {
    main: "customer",
    sub: ["customer/login", "customer/signup", "customer/order"],
  },
  { main: "factory" },
  { main: "warehouse" },
  { main: "sales" },
];
const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="sidebar">
      <Navbar expand="lg" className="custom-navbar" style={{marginRight: "25px"}} expanded={expanded}>
        <Navbar.Toggle
          onClick={handleToggle}
          aria-controls="responsive-sidebar"
        />
        <Navbar.Collapse id="responsive-sidebar">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Navbar.Brand className="my-3">
              <Link to="/" style={{ fontSize: 22, color: "white" }}>
                <img alt="" src="/src/images/logo.svg" width="50" height="50" />{" "}
                <span className="mt-2">FlavorWave</span>
              </Link>
            </Navbar.Brand>
            <Accordion>
              {menu.map((item, id) => (
                <Accordion.Item key={item.main} eventKey={id}>
                  <Accordion.Header>
                    <Link to={"/" + item.main} style={{ fontSize: 20 }}>
                      {item.main}
                    </Link>
                  </Accordion.Header>
                  <Accordion.Body style={{ fontSize: 18 }}>
                    <ul className="ps-2">
                      {item.sub
                        ? item.sub.map((i) => (
                            <li key={i}>
                              <Link to={"/" + i}>
                                {item.main === "customer" ? i.slice(9) : i}
                              </Link>
                            </li>
                          ))
                        : null}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Sidebar;
