import axios from 'axios';

/**
 * @param {any} type
 * @param {any} params
 */
async function api(type, params) {
    try {
        const resp = await axios.get(import.meta.env.VITE_URL + '/api/' + type + '?' + params, {
            headers: {
                'Authorization': 'Bearer ' + import.meta.env.VITE_TOKEN
            }});
        return resp;
    } catch(e) {
        console.log("Error {}", e)
    }
}

export default api;