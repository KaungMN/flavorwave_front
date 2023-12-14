import { getSessionStorage, setSessionStorage } from '../utils';
import { axios } from './api';

const login = async (data) => {
    const response = await axios.post('client-login', data);

    const { customer, token } = response.data;

    setSessionStorage('authToken', token);
    setSessionStorage('customer', customer);

    return customer;
};

export { login };
