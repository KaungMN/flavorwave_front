// import { axios } from './api';
import axios from "axios"

const signup = async (data) => {
    try {
        const res = await axios.post('http://localhost:8000/api/client-register', data,{
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        });
        return res;
    } catch (error) {
        // Handle error or log it
        console.error('Error during signup:', error);
        throw error;
    }
};

export { signup };
