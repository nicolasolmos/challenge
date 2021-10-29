const React = require('react');

const ShowDescription = props => {
    const dangerousHTMLInjection = {
        __html: props.summary,
    };

    let imageElement;

    if (props.image) {
        imageElement = <img className="show-description__image" src={props.image.original} />;
    }

    return (
        <section className="show-description">
            <div className="show-description__info">
                <p className="show-description__name">{props.name}</p>
                <p dangerouslySetInnerHTML={dangerousHTMLInjection} />
                <div className="show-description__metadata">
                    <span className="show-description__metadata-item">{props.language}</span>
                    <span className="show-description__metadata-item">{props.status}</span>
                    <span className="show-description__metadata-item">{props.type}</span>
                </div>
            </div>
            {imageElement}
        </section>
    );
};

module.exports = ShowDescription;