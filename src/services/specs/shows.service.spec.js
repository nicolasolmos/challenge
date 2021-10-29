const ShowsService = require('../shows.service');

describe('shows service', () => {
    test('gets all shows for the specified search term', async () => {
        const searchTerm = 'girls';
        const result = await ShowsService.getShows(searchTerm);
        expect(result).not.toHaveLength(0);
    });

    test('returns null when there is an error fetching data', async () => {
        const searchTerm = null;
        const result = await ShowsService.getShows(searchTerm);
        expect(result).toBe(null);
    });


})