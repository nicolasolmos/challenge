require('./showCard.component.scss');
const React = require('react');
const GenresPills = require('../GenresPills/genresPills.component');


const ShowCard = props => {

    let imageElement;

    if (props.show.image) {
        imageElement =  <img className="show-card__image" src={props.show.image.original} />;
    }

    const dangerousHTMLInjection = {
        __html: props.show.summary,
    };

    return (
        <section className="show-card">
            <div className="show-card__info">
                <p className="show-card__name">{props.show.name}</p>
                <span dangerouslySetInnerHTML={dangerousHTMLInjection} />
                <GenresPills genres={props.show.genres} />
            </div>    
            {imageElement}
        </section>
    );
};

module.exports = ShowCard;