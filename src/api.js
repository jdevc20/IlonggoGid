import axios from 'axios';

const API_URL = 'http://localhost:1337/'; // Replace this with your actual API URL

const api = axios.create({
    baseURL: API_URL,
});

const errorHandler = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Response error:', error.response.data);
        return Promise.reject(error.response.data);
    } else if (error.request) {
        // The request was made but no response was received
        console.error('Request error:', error.request);
        return Promise.reject('Request error:', error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
        return Promise.reject(error.message);
    }
};

api.interceptors.response.use((response) => response.data, errorHandler);

export default api;
