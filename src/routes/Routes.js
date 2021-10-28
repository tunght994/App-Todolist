import React from "react";
import { Route, Switch } from "react-router";
import Home from "../components/Home";
import Sheet from "../components/Sheet";

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/home' component={Home} />
            <Route path="/sheet" component={Sheet} />
        </Switch>
    );
};

export default Routes;
