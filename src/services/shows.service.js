const constants = require('../helpers/constants');
const axios = require('axios').default;

class ShowsService {
    static async getShows(paramSearchString) {
        try {
            const response = await axios.get(constants.API_URL, {
                params: { q: paramSearchString }
            });
            debugger;
            console.log('HOLA', constants.API_URL);
            return response.data;
        } catch (error) {
            console.log('HOLA', error)
            return null;
        }
    }
}

module.exports = ShowsService;