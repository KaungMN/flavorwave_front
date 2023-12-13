import { Navbar, Nav, Accordion } from "react-bootstrap";
import "./sidebar.css"; // Import your custom CSS file
import { Link } from "react-router-dom";
import { useState } from "react";
let menu = [
  { main: "admin", sub: ["staff", "budget"] },
  { main: "logstic", sub: ["delivery"] },
  {
    main: "customer",
    sub: ["login", "signup", "order"],
  },
  { main: "factory", sub: ["raw"] },
  { main: "warehouse" },
  { main: "sales" },
];

sessionStorage.setItem("staffId", "3");
let staffId = JSON.parse(sessionStorage.getItem("staffId"));
sessionStorage.setItem("dept", "admin");
let dept = sessionStorage.getItem("dept");

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="sidebar">
      <Navbar
        expand="lg"
        className="custom-navbar"
        style={{ marginRight: "25px" }}
        expanded={expanded}
      >
        <Navbar.Toggle
          onClick={handleToggle}
          aria-controls="responsive-sidebar"
        />
        <Navbar.Collapse id="responsive-sidebar">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Navbar.Brand className="my-3">
              <Link to="/" style={{ fontSize: 22, color: "white" }}>
                <img
                  alt=""
                  className="me-2"
                  src="/src/images/Logo (1).png"
                  width="70"
                  height="70"
                />{" "}
                <span className="mt-2">FlavorWave</span>
              </Link>
            </Navbar.Brand>
            <Accordion>
              {menu.map((item, id) =>
                item.main.includes(dept) || dept === "admin" ? (
                  <Accordion.Item key={item.main} eventKey={id}>
                    <Accordion.Header>
                      <Link
                        to={"/" + item.main}
                        style={{ fontSize: 20, textTransform: "Capitalize" }}
                      >
                        {item.main}
                      </Link>
                    </Accordion.Header>
                    <Accordion.Body style={{ fontSize: 18 }}>
                      <ul
                        className="ps-2"
                        style={{ textTransform: "Capitalize" }}
                      >
                        {item.sub
                          ? item.sub.map((i) => (
                              <li key={i}>
                                <Link to={"/" + item.main + "/" + i}>{i}</Link>
                              </li>
                            ))
                          : null}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                ) : null
              )}
            </Accordion>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Sidebar;
