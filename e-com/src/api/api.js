import axios from "axios";

const Api = axios.create({
    baseURL : 'http://localhost:5000', 
});

// Api.defaults.headers.common['Authorization'] = `Bearer${config.API_KEY}`;
Api.defaults.headers.common['Accept'] = 'application/json';
    
export default Api;  