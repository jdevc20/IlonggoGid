const API_URL = 'https://ilonggogid-api.onrender.com'; // Replace this with your actual API URL

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

const api = {
    get: async (url) => {
        try {
            const response = await fetch(API_URL + url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            return errorHandler(error);
        }
    },
    post: async (url, data) => {
        try {
            const response = await fetch(API_URL + url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            return errorHandler(error);
        }
    },
    // Add other HTTP methods (put, delete, etc.) as needed
};

export default api;
