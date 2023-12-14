import { axios } from './api';

const useOrder = async (data) => {

    const sessionToken = sessionStorage.getItem('authToken');
    console.log(sessionToken);
    const res = await axios.post('/api/createorders', data, {
        headers: {
            'Authorization': `Bearer ${sessionToken}`,
            'Content-Type': 'application/json',
        },
    });
    return res;

};

export { useOrder };
