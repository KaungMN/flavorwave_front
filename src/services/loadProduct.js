import { axios } from './api';

const getProducts = async () => {
    try {
        const res = await axios.get('/api/product');
        return res.data;
    } catch (error) {
        console.error('Error during order:', error);
        console.log('Error response:', error.response); // Log the response details

    }
};

export { getProducts };
