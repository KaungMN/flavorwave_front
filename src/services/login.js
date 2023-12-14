// import { axios } from './api';

const login = async (data) => {
    try {
        const response = await axios.post('/api/client-login', data);
        // const authToken = response.data.token;
        // console.log(response);
        // console.log('Authentication Token:', authToken);
        const { customer, token } = response.data;

        // Store the token in your preferred state management (e.g., React context, Redux, etc.)
        // For simplicity, storing in local storage here
        sessionStorage.setItem('authToken', token);

        // Do something with the customer data if needed
        console.log('Logged in as:', customer);
        console.log(token);

        // Store authToken in state, local storage, or a cookie for later use
        return response; // Optionally return the entire response if needed
    } catch (error) {
        // Handle error or log it
        console.error('Login failed:', error);
        throw error;
    }
};

export { login };
