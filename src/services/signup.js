import { axios } from './api';

const signup = async (data) => {
    const request = {
        data
    };
    const res = await axios.post('/api/login', request);
    return res;
};

export { signup };
