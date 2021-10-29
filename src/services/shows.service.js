const constants = require('../helpers/constants');
const axios = require('axios').default;

class ShowsService {
    static async getShows(paramSearchString) {
        try {

            if (!paramSearchString) throw new Error('invalid parameter provided: ' + paramSearchString);

            const response = await axios.get(constants.API_URL_ALL_SHOWS, {
                params: { q: paramSearchString }
            });
            
            return response.data;
        } catch (error) {
            return null;
        }
    }

    static async getShowById(paramId) {
        try {
            if (!paramId) throw new Error('invalid id parameter provided: ' + paramId);

            const finalUrl = constants.API_URL_SHOW_BY_ID + paramId;
            const response = await axios.get(finalUrl);
            
            return response.data;
        } catch (error) {
            return null;
        }
    }
}

module.exports = ShowsService;