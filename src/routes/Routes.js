import React from "react";
import { Route, Switch } from "react-router";
import Sheet from "../components/Sheet";

const Routes = () => {
    return (
        <Switch>
            <Route path="/sheet" component={Sheet} />
        </Switch>
    );
};

export default Routes;
