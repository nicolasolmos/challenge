require('./genresPills.component.scss');
const React = require('react');

const GenresPills = props => {
    if (props.genres.length === 0) {
        return <div></div>;
    }

    return (
        <div className="genres-pills">
            {props.genres.map(genre => {
                return <span key={genre} className="genres-pills__pill" data-testid="genre-pill">{genre}</span>
            })}
        </div>
    );
};

module.exports = GenresPills;