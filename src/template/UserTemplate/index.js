import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function UserTemplate({ Component, ...props }) {
    const { userLogin } = useSelector((state) => state.userReducer);
    return (
        <Route
            {...props}
            render={(routeProps) => {
                if (!userLogin) {
                    return (
                        <>
                            <Component {...routeProps} />
                        </>
                    );
                } else {
                    return <Redirect to="/" />;
                }
            }}
        />
    );
}
