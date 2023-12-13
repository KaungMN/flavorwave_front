// import { axios } from './api';
import axios from "axios"

const useOrder = async (data) => {
    const request = {
        data
    };
    const res = await axios.post('http://localhost:8000/api/create-orders', request,{
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    });
    return res;
};

export { useOrder };
