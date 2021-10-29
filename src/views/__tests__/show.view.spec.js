const React = require('react');
const { render, screen } = require('@testing-library/react');
const { Router } = require('react-router-dom');
const App = require('../../app');
const { createMemoryHistory } = require('history');

describe('ShowView', () => {
    test('gets the show information when a correct parameter is recevied', () => {
        const history = createMemoryHistory();
        history.push('/show/34063');
        render(<Router history={history}><App /></Router>);
        expect(screen.findByTestId('show-description')).toBeTruthy();
    });
});