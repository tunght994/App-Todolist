import { Route, Switch } from "react-router-dom";
import PageNotFound from "./template/PageNotFound";
import { renderRouteHome, renderRouteUser } from "./routes/Routes";

function App() {
    return (
        <div className="App">
            <Switch>
                {renderRouteHome()}
                {renderRouteUser()}
                <Route path="" component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
