require('./listing.view.scss');
const React = require('react');
const { useState, useEffect } = require('react');
const ShowCard = require('../../components/showCard/showCard.component');
const ShowsService = require('../../services/shows.service');

const ListingView = props => {
    const initialState = {
        shows: [],
        error: null,
        searchString: '',
        lookup: false,
    };

    const [ showsState, setShowStates ] = useState(initialState);

    const setSearchString = event => {
        setShowStates({ ...showsState, ...{searchString: event.target.value} });
    };

    const fetchSearchResults = () => {
        setShowStates({ ...showsState, lookup: true });
    };

    useEffect(() => {
        if (showsState.lookup) {
            setShowStates({ ...showsState, lookup: false });
            ShowsService.getShows(showsState.searchString)
                .then(response => {
                    if (response === null) {
                        throw new Error('fetching shows error');
                    }
                    setShowStates({ ...showsState, ...{ shows: response, lookup: false } });
                })
                .catch(() => {
                    setShowStates({ ...showsState, error: 'fetching', lookup: false });
                });
        }
    });

    let showCards;

    if(showsState.shows.length > 0) {
        showCards = showsState.shows.map(show => <ShowCard key={show.show.id} show={show.show} />);
    }

    return (
        <section className="listing-view">
            <header className="listing-view__header">
                <input data-testid="search-input" type="text" className="listing-view__input" onChange={setSearchString} />
                <button data-testid="search-button" type="button" onClick={fetchSearchResults}>Buscar!</button>
            </header>
            <section className="listing-view__list">
                {showCards}
            </section>
        </section>
    );
}

module.exports = ListingView;