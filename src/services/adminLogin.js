import { setSessionStorage, getSessionStorage } from '../utils';
import { axios } from './api';

const login = async (data) => {
    const res = await axios.post('staff-login', data);
    // console.log(res.data.staff.department_id);
    setSessionStorage('staffId', res.data.staff.department_id);
    setSessionStorage('staff', res.data.staff);
    return res;
};

export { login };
