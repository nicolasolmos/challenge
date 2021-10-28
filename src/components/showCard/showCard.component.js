const React = require('react');

const ShowCard = props => {
    return (
        <section>
            <div className="show-card__info">
                <p>{props.name}</p>
                <GenresPills genres={props.genres} />
            </div>
            <img className="show-card__image" src={props.image.medium} />
        </section>
    );
};

module.exports = ShowCard;