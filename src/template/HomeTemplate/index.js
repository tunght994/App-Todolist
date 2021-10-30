import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import SideBar from "./../../components/SideBar";
export default function HomeTemplate({ Component, ...props }) {
    const { userLogin } = useSelector((state) => state.userReducer);

    return (
        <Route
            {...props}
            render={(routeProps) => {
                if (userLogin) {
                    return (
                        <>
                            <div>
                                <div style={{ display: "flex" }}>
                                    <SideBar />
                                    <Component {...routeProps} />
                                </div>
                            </div>
                        </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
}
