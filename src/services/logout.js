import { clearSessionStorage } from '../utils';
import { axios } from './api';

const clearKeyList = ['authToken', 'customer'];

const logout = async () => {
    const res = await axios.post('client-logout');
    clearKeyList.forEach((key) => {
        clearSessionStorage(key);
    });

    return res;
};

export { logout };
