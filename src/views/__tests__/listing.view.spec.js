const React = require('react');
const { render, fireEvent, screen } = require('@testing-library/react');
const ListingView = require('../listing.view');
const userEvent = require('@testing-library/user-event').default;


describe('Listing View', () => {

    test('search a term and displays the results ', async () => {
        render(<ListingView />);
        
        userEvent.type(screen.getByTestId('search-input'), 'girls');
        userEvent.click(screen.getByTestId('search-button'));

        const cards = await screen.findAllByTestId('genre-pill');

        expect(cards).toBeTruthy();
    });

    test('search an invalid term and does not shows the cards', async () => {
        render(<ListingView />);
        
        userEvent.type(screen.getByTestId('search-input'), '{space}');
        userEvent.click(screen.getByTestId('search-button'));

        expect(screen.queryAllByTestId('genre-pill')).toHaveLength(0);
    });

})