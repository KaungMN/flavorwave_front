import { axios } from './api';

const login = async (data) => {
    const response = await axios.post('client-login', data);

    const { customer, token } = response.data;
    console.log(response.data);
    // sessionStorage.setItem('authToken', token);

    return customer;
};

export { login };
