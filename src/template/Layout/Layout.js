import React from "react";
import SideBar from "../../components/SideBar";
import { renderRouteCreate, renderRouteHome } from "../../routes/Routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "../PageNotFound";

const Layout = () => {
    return (
        <BrowserRouter>
            <div>
                <div style={{ display: "flex" }}>
                    <SideBar />
                    <Switch>
                        {renderRouteHome()}
                        {renderRouteCreate()}

                        <Route path="" component={PageNotFound} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Layout;
