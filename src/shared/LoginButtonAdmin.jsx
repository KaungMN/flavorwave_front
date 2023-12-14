import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ADMIN_LOGIN_ROUTE } from '../constants/routes';

function LoginButtonAdmin() {
    const navigate = useNavigate();
    return <Button onClick={navigate(ADMIN_LOGIN_ROUTE)}> Login </Button>;
}

export default LoginButtonAdmin;
