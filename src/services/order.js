import { axios } from './api';

const useOrder = async (data) => {
    const request = {
        data
    };
    const res = await axios.post('/api/login', request);
    return res;
};

export { useOrder };
