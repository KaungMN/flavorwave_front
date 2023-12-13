import { axios } from './api';
// import axios from 'axios';

const useOrder = async (data) => {
    try {
        const res = await axios.post('/api/createorders', data, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
        return res;
    } catch (error) {
        console.error('Error during order:', error);
        console.log('Error response:', error.response); // Log the response details

    }
};

export { useOrder };
