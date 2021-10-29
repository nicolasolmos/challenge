const constants = require('../helpers/constants');
const axios = require('axios').default;

class ShowsService {
    static async getShows(paramSearchString) {
        try {

            if (!paramSearchString) throw new Error('invalid parameter provided: ' + paramSearchString);

            const response = await axios.get(constants.API_URL, {
                params: { q: paramSearchString }
            });
            
            return response.data;
        } catch (error) {
            return null;
        }
    }
}

module.exports = ShowsService;