import { getSessionStorage } from '../utils';
import { axios } from './api';

const useOrder = async (data) => {
    const res = await axios.post('createorders', data);
    console.log(res);
    return res;
};

const customerOrder = async (data) => {
    const customer = getSessionStorage('customer');
    data.email = customer.email;
    const res = await axios.post('createorders', data);
    console.log(res);
};

export { useOrder, customerOrder };
