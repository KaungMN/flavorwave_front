import React from 'react';
import { Button } from 'react-bootstrap';
import { logout } from '../../../services/logout';
import { getSessionStorage } from '../../../utils';

function Logout() {
    const handleLogout = async () => {
        await logout();
       window.location.reload();
    };
    return <>{getSessionStorage('authToken') && <Button onClick={handleLogout}>Logout</Button>}</>;
}

export default Logout;
