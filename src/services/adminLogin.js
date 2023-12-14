import { axios } from './api';

const Login = async (data) => {
    try {
        const res = await axios.post('/api/admin-login', data);
        return res;
    } catch (error) {
        // Handle error or log it
        console.error('Error during login:', error);
        throw error;
    }
};

export { Login };
