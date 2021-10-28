import { SpreadsheetComponent } from "@syncfusion/ej2-react-spreadsheet";
import React from "react";

export default function Sheet() {
    return (
        <SpreadsheetComponent
            allowOpen={true}
            openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
            // beforeOpen={this.beforeOpen.bind(this)}
            allowSave={true}
            saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"
        />
    );
}
