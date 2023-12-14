// import { axios } from './api';

const login = async (data) => {
    try {
        const res = await axios.post('/api/client-login', data);
        return res;
    } catch (error) {
        // Handle error or log it
        console.error('Error during login:', error);
        throw error;
    }
};

export { login };
