require('./styles.scss');
require("regenerator-runtime/runtime");
const React = require('react');
const ReactDOM = require('react-dom');
const { HashRouter, Route, Switch } = require("react-router-dom");
const ShowView = require("./views/showView/show.view");
const ListingView = require("./views/listingView/listing.view");

const App = props => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/shows" component={ListingView} />
                <Route path="/show/:id" component={ShowView} />
            </Switch>
        </HashRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('challenge-app'));