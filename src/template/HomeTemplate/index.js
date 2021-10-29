import React from "react";
import { Route } from "react-router";

export default function HomeTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={() => {
                return (
                    <>
                        <Component />
                    </>
                );
            }}
        />
    );
}
