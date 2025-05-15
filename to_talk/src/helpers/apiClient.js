//import axios from 'axios';
//import config from "./../config";


// default
//axios.defaults.baseURL = config.API_URL;

// content type
//axios.defaults.headers.post['Content-Type'] = 'application/json';

// intercepting to capture errors
// axios.interceptors.response.use(function (response) {
//     return response.data ? response.data : response;
// }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     let message;
//     switch (error.status) {
//         case 500: message = 'Internal Server Error'; break;
//         case 401: message = 'Invalid credentials'; break;
//         case 404: message = "Sorry! the data you are looking for could not be found"; break;
//         default: message = error.message || error;
//     }
//     return Promise.reject(message);
// });

/**
 * Sets the default authorization
 * @param {*} token 
 */
const setAuthorization = (token) => {
   console.log("hello")
}


class APIClient {
    /**
     * Fetches data from given url
     */
    get = (url, params) => {
        return null
    }

    /**
     * post given data to url
     */
    create = (url, data) => {
        return null
    }

    /**
     * Updates data
     */
    update = (url, data) => {
        return null
    }

    /**
     * Delete 
     */
    delete = (url) => {
        return null
    }
}

export { APIClient, setAuthorization };