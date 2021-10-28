const { BrowserRouter } = require("react-router-dom");
const ShowView = require("./views/show.view");
const ListingView = require("./views/shows.view");

const App = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/shows">
                    <ListingView />
                </Route>
                <Route path="/show">
                    <ShowView />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

ReactDOM.render(<App />, document.getElementsById('challenge-app'));