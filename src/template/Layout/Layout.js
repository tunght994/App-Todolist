import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SideBar from "../../components/SideBar";
import Routes from "../../routes/Routes";

const Layout = () => {
    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <div>
                        <div style={{ display: "flex" }}>
                            <SideBar {...props} />
                            {/* <div className="container"> */}

                            <Routes />
                            {/* </div> */}
                        </div>
                    </div>
                )}
            />
        </BrowserRouter>
    );
};

export default Layout;
