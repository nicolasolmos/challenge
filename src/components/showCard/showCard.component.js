const React = require('react');
const GenresPills = require('../GenresPills/genresPills.component');
//<img className="show-card__image" src={props.image.original} />

const ShowCard = props => {
    return (
        <section>
            <div className="show-card__info">
                <p>{props.show.name}</p>
                <GenresPills genres={props.show.genres} />
            </div>    
        </section>
    );
};

module.exports = ShowCard;