import { axios } from './api';

const staffSignup = async (data) => {
    try {
        const res = await axios.post('/api/staff-register', data);
        return res;
    } catch (error) {
        // Handle error or log it
        console.error('Error during staffSignup:', error);
        throw error;
    }
};

export { staffSignup };
