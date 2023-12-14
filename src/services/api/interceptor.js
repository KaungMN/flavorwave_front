import axios from 'axios';

// TODO: need to change
axios.defaults.baseURL = 'https://dd8b-2a09-bac5-492b-18c8-00-278-84.ngrok-free.app/api/';

// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        // const token = sessionStorage.getItem('authToken');
        config.headers = {
            Authorization: 'Bearer 40|4Z2rM6Aoagg3USerKzS74A48d3t5kVRt8pFWv3QVa4ea2f48',
            'Content-Type': 'application/json'
        };

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default axios;
