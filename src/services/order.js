import { axios } from './api';
// import axios from 'axios';

const useOrder = async (data) => {
    console.log(data);
    const res = await axios.post('http://localhost:8000/api/create-orders', data);
    // return res;
    console.log(res);
};

export { useOrder };
