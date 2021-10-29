import React from "react";
import { Route } from "react-router";
import Sidebar from "./Sidebar";

export default function CreateTeplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(routeProps) => {
                return (
                    <div style={{ display: "flex" }}>
                        <Sidebar />
                        <Component {...routeProps} />
                    </div>
                );
            }}
        />
    );
}
