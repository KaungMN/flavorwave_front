import { clearSessionStorage } from '../utils';
import { axios } from './api';

const clearKeyList = ['authToken', 'customer'];

const logout = async (data) => {
    const res = await axios.post('staff-logout', data);
    clearKeyList.forEach((key) => {
        clearSessionStorage(key);
    });
    return res;
};

export { logout };
