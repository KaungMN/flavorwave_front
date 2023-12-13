import { axios } from './api';

export const login = async (data) => {
    const request = {
        username: data.username,
        password: data.password
    };
    const res = await axios.post('/api/client-login', request);
    return res;
};

