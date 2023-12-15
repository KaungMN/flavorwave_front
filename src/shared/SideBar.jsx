import { Navbar, Nav, Accordion } from 'react-bootstrap';
import './sidebar.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { menuList, getMenuList } from '../constants';
import LogoutButton from './LogoutButton';
import LoginButtonAdmin from './LoginButtonAdmin';
import { getSessionStorage } from '../utils/index.js';

const Sidebar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    let staffId = getSessionStorage('staffId');
    console.log(staffId);
    return (
        <div className="sidebar">
            <Navbar expand="lg" className="custom-navbar" style={{ marginRight: '25px' }} expanded={expanded}>
                <Navbar.Toggle onClick={handleToggle} aria-controls="responsive-sidebar" />
                <Navbar.Collapse id="responsive-sidebar">
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Navbar.Brand className="mb-2">
                            <Link to="/" className="p-0">
                                <img
                                    alt=""
                                    className="mx-auto d-block"
                                    src="/src/images/Logo (1).png"
                                    width="70"
                                    height="70"
                                />{' '}
                                <span className="mt-2 fs-4">Flavor Wave</span>
                            </Link>
                        </Navbar.Brand>
                        <Accordion>
                            {getMenuList().map((item, index) =>
                                item.subMenu ? (
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
                                ) : (
                                    <Link to={item.route} className="py-5 fs-5">
                                        {item.label}
                                    </Link>
                                )
                            )}
                        </Accordion>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Sidebar;
