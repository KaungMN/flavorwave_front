import React from 'react';
import { Button } from 'react-bootstrap';
import { logout } from '../services/logout';

function LogoutButton() {
    return <Button onClick={logout}>Logout</Button>;
}

export default LogoutButton;
