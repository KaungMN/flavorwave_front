import { axios } from './api';

const logout = async () => {
    const res = await axios.post('client-logout');
    return res;
};

export { logout };
