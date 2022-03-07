import axios from 'axios';

const BASE_URL = 'https://api.audioboom.com/';

export const METHOD = {
    PUT: 'put',
    POST: 'post',
    GET: 'get',
    DEL: 'delete',
}

/**
 *  
 * @param {string} method property of METHOD object
 * @param {string} route property of Routes
 * @param {object|null} config {data, params}
 * @param {string} errorType "message", "response", "request" 
 * @returns {object}  {response, status, data, error}
 */
export async function axiosRequest(
    method,
    route,
    config = {},
    errorType = 'message',
) {
    try {
        const response = await axios({
            method: method,
            url: BASE_URL.concat(route),
            data: config?.data,
            params: config?.params,
        });
        return { response: response, status: response?.status, data: response?.data, error: null };
    } catch (error) {
        console.log(`Error in ${route}`);
        console.log(`Error - Status: ${error?.status}`);
        console.log(`${errorType} - ${error?.[errorType]}`);
        return { response: null, status: null, data: null, error: error };
    }
}