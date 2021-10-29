import React from "react";
import { Route } from "react-router";

export default function HomeTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(routeProps) => {
                console.log(routeProps)
                return (
                    <>
                        <Component {...routeProps} />
                    </>
                );
            }}
        />
    );
}
