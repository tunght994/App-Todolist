import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SideBar from "../../components/SideBar";
import Routes from "../../routes/Routes";
import { SpreadsheetComponent } from "@syncfusion/ej2-react-spreadsheet";

const Layout = () => {
    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <div>
                        <div style={{ display: "flex" }}>
                            <SideBar {...props} />
                            {/* <div className="container"> */}
                            <SpreadsheetComponent
                                allowOpen={true}
                                openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
                                // beforeOpen={this.beforeOpen.bind(this)}
                                allowSave={true}
                                saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"
                            />

                            {/* <Routes /> */}
                            {/* </div> */}
                        </div>
                    </div>
                )}
            />
        </BrowserRouter>
    );
};

export default Layout;
