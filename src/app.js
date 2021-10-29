require('./styles.scss');

const React = require('react');
const { Route, Switch } = require("react-router-dom");
const ShowView = require("./views/showView/show.view");
const ListingView = require("./views/listingView/listing.view");

const App = props => {
    return (
        <Switch>
            <Route path="/shows" component={ListingView} />
            <Route path="/show/:id" component={ShowView} />
        </Switch>
    );
};

module.exports = App;