const React = require('react');
const ShowsService = require('../../services/shows.service');
const  { useParams } = require('react-router-dom');
const { useEffect, useState } = require('react');
const ShowDescription = require('../../components/showDescription/showDescription.component');

const ShowView = props => {
    const initialState = {
        showInfo: null,
        error: false, 
        lookup: true,   
    };

    const { id } = useParams();
    

    const [showState, setShowState] = useState(initialState);

    useEffect(() => {
        
        showState.lookup && ShowsService.getShowById(id)
            .then(response => {
                if (response === null) {
                    throw new Error('fetching shows error');
                }
                console.log(response)
                setShowState({ ...showState, ...{ showInfo: response, lookup: false } });
            })
            .catch(() => {
                setShowState({ ...showState, error: 'fetching', lookup: false });
            });
    });

    if (showState.showInfo) {
        return (
            <section>
                <ShowDescription {...showState.showInfo} />
            </section>
        );
    }

    return <section />;
}

module.exports = ShowView;