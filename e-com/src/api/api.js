import axios from "axios";
import config from './config';

console.log("config", config);
const Api = axios.create({
    baseURL : config.API_HOST
});

// Api.defaults.headers.common['Authorization'] = `Bearer${config.API_KEY}`;
Api.defaults.headers.common['Accept'] = 'application/json';

export default Api;