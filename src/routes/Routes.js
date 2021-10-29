import React from "react";
import Home from "../page/Home/Home";
import Create from "../page/Create";
import CreateTeplate from "../template/CreateTemplate";
import HomeTemplate from "../template/HomeTemplate";

const routeHome = [
    {
        path: "/home",
        exact: true,
        Component: Home,
    },
];

const routeCreate = [
    {
        path: "/add",
        exact: true,
        Component: Create,
    },
];

export const renderRouteHome = () => {
    return routeHome.map((page, index) => {
        return (
            <HomeTemplate
                key={index}
                Component={page.Component}
                exact={page.exect}
                path={page.path}
            />
        );
    });
};

export const renderRouteCreate = () => {
    return routeCreate.map((page, index) => {
        return (
            <CreateTeplate
                key={index}
                Component={page.Component}
                exact={page.exect}
                path={page.path}
            />
        );
    });
};
