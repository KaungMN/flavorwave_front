import { axios } from './api';

const signup = async (data) => {
    try {
        const res = await axios.post('/api/client-register', data);
        return res;
    } catch (error) {
        // Handle error or log it
        console.error('Error during signup:', error);
        throw error;
    }
};

export { signup };
