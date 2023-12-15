import React from 'react';
import { Button } from 'react-bootstrap';
import { logout } from '../../../services/logout';
import { getSessionStorage } from '../../../utils';
import { DEFAULT_ROUTE } from '../../../constants/routes';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const nagivate = useNavigate();
    const handleLogout = async () => {
        await logout();
        nagivate(DEFAULT_ROUTE);
    };
    return <>{getSessionStorage('authToken') && <Button onClick={handleLogout}>Logout</Button>}</>;
}

export default Logout;
