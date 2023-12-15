import { setSessionStorage } from '../utils';
import { axios } from './api';

const login = async (data) => {
    const res = await axios.post('staff-login', data);
    setSessionStorage('staffToken', res.data.token);
    setSessionStorage('staff', res.data.staff);
    return res;
};

export { login };
