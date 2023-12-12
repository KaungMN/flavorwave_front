import { axios } from './api';

const login = async (data) => {
    const request = {
        username: data.username,
        password: data.password
    };
    const res = await axios.post('/api/login', request);
    return res;
};

export default {
    login
};
