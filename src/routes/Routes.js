import React from "react";
import Home from "../page/HomePage/Home";
import Create from "../page/HomePage/Create";
import HomeTemplate from "../template/HomeTemplate";
import Login from "../page/UserPage/Login";
import UserTemplate from "../template/UserTemplate";
import Register from "../page/UserPage/Register";

const routeHome = [
    {
        path: "/",
        exact: true,
        Component: Home,
    },
    {
        path: "/home",
        exact: false,
        Component: Home,
    },
    {
        path: "/add",
        exact: false,
        Component: Create,
    },
];

const routeUser = [
    {
        path: "/login",
        exact: true,
        Component: Login,
    },
    {
        path: "/register",
        exact: true,
        Component: Register,
    },
];

export const renderRouteHome = () => {
    return routeHome.map((page, index) => {
        return (
            <HomeTemplate
                key={index}
                Component={page.Component}
                exact={page.exact}
                path={page.path}
            />
        );
    });
};
export const renderRouteUser = () => {
    return routeUser.map((page, index) => {
        return (
            <UserTemplate
                key={index}
                Component={page.Component}
                exact={page.exact}
                path={page.path}
            />
        );
    });
};
