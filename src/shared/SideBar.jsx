import { Navbar, Nav, Accordion } from 'react-bootstrap';
import './sidebar.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { menuList } from '../constants';

const Sidebar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };
    return (
        <div className="sidebar">
            <Navbar expand="lg" className="custom-navbar" style={{ marginRight: '25px' }} expanded={expanded}>
                <Navbar.Toggle onClick={handleToggle} aria-controls="responsive-sidebar" />
                <Navbar.Collapse id="responsive-sidebar">
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Navbar.Brand className="my-3">
                            <Link to="/">
                                <img alt="" className="me-2" src="/src/images/Logo (1).png" width="70" height="70" />{' '}
                                <span className="mt-2 fs-4">Flavor Wave</span>
                            </Link>
                        </Navbar.Brand>
                        <Accordion>
                            {menuList.map((item, index) => (
                                <Accordion.Item key={index} eventKey={index}>
                                    <Accordion.Header>
                                        <Link to={item.route} className="fs-5">
                                            {item.label}
                                        </Link>
                                    </Accordion.Header>
                                    <Accordion.Body className="fs-6">
                                        <ul className="ps-2">
                                            {item.subMenu
                                                ? item.subMenu.map((subMenu, index) => (
                                                      <li key={index}>
                                                          <Link to={subMenu.route}>{subMenu.label}</Link>
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
