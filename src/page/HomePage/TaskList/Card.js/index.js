import React from "react";
import BugReportIcon from "@mui/icons-material/BugReport";

import clsx from "clsx";
import style from "./index.module.scss";
export default function Card() {
    return (
        <div className={clsx(style["taskList__card"])} draggable={true}>
            <div className={clsx(style["taskList__card-header"])}>
                lỗi cực căng fix gấp
            </div>
            <div className={clsx(style["taskList__card-body"])}>
                <BugReportIcon style={{ color: "red" }} />{" "}
                <span
                    className={clsx(style["taskList__card-body-text"])}
                    style={{ color: "red" }}
                >
                    Hightlight
                </span>
            </div>
        </div>
    );
}
