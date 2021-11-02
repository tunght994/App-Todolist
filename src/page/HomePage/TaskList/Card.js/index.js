import React, { useState } from "react";
import BugReportIcon from "@mui/icons-material/BugReport";

import clsx from "clsx";
import styles from "./index.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
export default function Card(props) {
    const { task } = props;
    const { priorityId } = task.priorityTask;
    const [statusMoreMenu, setStatusMoreMenu] = useState("none");

    const classPriority =
        priorityId === 1
            ? "high"
            : priorityId === 2
            ? "medium"
            : priorityId === 3
            ? "low"
            : "lowest";
    return (
        <div
            onContextMenu={() => {
                console.log(task);
            }}
            className={clsx(styles["taskList__card"])}
            draggable={true}
        >
            <div className={clsx(styles["taskList__card-header"])}>
                {task?.taskName}
            </div>
            <div
                className={clsx(
                    styles["taskList__card-body"],
                    styles[classPriority]
                )}
            >
                {task.taskTypeDetail.id === 1 ? (
                    <BugReportIcon />
                ) : (
                    <AddCircleOutlineIcon />
                )}{" "}
                <span className={clsx(styles["taskList__card-body-text"])}>
                    {task?.priorityTask.priority}
                </span>
            </div>
            <div
                onClick={() => {
                    statusMoreMenu === "block"
                        ? setStatusMoreMenu("none")
                        : setStatusMoreMenu("block");
                }}
                className={styles.moreIcon}
            >
                <MoreVertIcon />
                <div
                    style={{ display: statusMoreMenu }}
                    className={styles.memuMore}
                >
                    <ul className={styles["memuMore__ul"]}>
                        <li
                            className={clsx(
                                styles["memuMore__liHaveChild"],
                                styles["memuMore__li"]
                            )}
                        >
                            <ArrowBackIosNewIcon />
                            Trạng thái
                        </li>
                        <li
                            className={clsx(
                                styles["memuMore__liHaveChild"],
                                styles["memuMore__li"]
                            )}
                        >
                            <ArrowBackIosNewIcon />
                            Tốc độ task
                            <ul className={clsx(styles["memuMore__ulChild"])}>
                                <li className={styles["memuMore__li"]}>hihi</li>
                                <li className={styles["memuMore__li"]}>hihi</li>
                                <li className={styles["memuMore__li"]}>hihi</li>
                                <li className={styles["memuMore__li"]}>hihi</li>
                                <li className={styles["memuMore__li"]}>hihi</li>
                                <li className={styles["memuMore__li"]}>hihi</li>
                                <li className={styles["memuMore__li"]}>hihi</li>
                                <li className={styles["memuMore__li"]}>hihi</li>
                                <li className={styles["memuMore__li"]}>hihi</li>
                                <li className={styles["memuMore__li"]}>hihi</li>
                            </ul>
                        </li>
                        <li
                            className={clsx(
                                styles["memuMore__liHaveChild"],
                                styles["memuMore__li"]
                            )}
                        >
                            <ArrowBackIosNewIcon />
                            Loại task
                        </li>
                        <li className={styles["memuMore__li"]}>Chi tiết</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
