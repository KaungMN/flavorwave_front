import { axios } from './api';

const logout = async () => {
    try {
        const res = await axios.post('/api/client-logout');
        return res;
    } catch (error) {
        // Handle error or log it
        console.error('Error during logout:', error);
        throw error;
    }
};

export { logout };
