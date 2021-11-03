import React, { useEffect, useState } from "react";
import BugReportIcon from "@mui/icons-material/BugReport";

import clsx from "clsx";
import styles from "./index.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useDispatch } from "react-redux";
import { getAllDefaulValue } from "../../../../redux/actions/DefaultValueActions";
import { useSelector } from "react-redux";
import { actionUpdateStatus } from "../../../../redux/actions/ProjectActions";
export default function Card(props) {
    const { task, taskId, id } = props;
    const { priorityId } = task.priorityTask;
    const [statusMoreMenu, setStatusMoreMenu] = useState("none");
    const dispatch = useDispatch();
    const { priority, status, taskType } = useSelector(
        (state) => state.defaultValueReducer
    );
    console.log(status);
    useEffect(() => {
        dispatch(getAllDefaulValue());
    }, [dispatch]);

    const handleUpdateStatus = (item) => {
        if (task.statusId !== item.statusId) {
            dispatch(
                actionUpdateStatus({
                    taskId: +taskId,
                    statusId: item.statusId,
                    id,
                })
            );
        }
    };

    const renderLiChildStatus = () => {
        return status?.map((item, index) => {
            return (
                <li
                    onClick={() => handleUpdateStatus(item)}
                    key={index}
                    className={styles["memuMore__li"]}
                >
                    {item.statusName}
                </li>
            );
        });
    };

    const renderLiChildPriority = () => {
        return priority?.map((item, index) => {
            return (
                <li key={index} className={styles["memuMore__li"]}>
                    {item.description}
                </li>
            );
        });
    };

    const renderLiChildTypeTask = () => {
        return taskType?.map((item, index) => {
            return (
                <li key={index} className={styles["memuMore__li"]}>
                    {item.taskType}
                </li>
            );
        });
    };

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
                            <ul className={clsx(styles["memuMore__ulChild"])}>
                                {renderLiChildStatus()}
                            </ul>
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
                                {renderLiChildPriority()}
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
                            <ul className={clsx(styles["memuMore__ulChild"])}>
                                {renderLiChildTypeTask()}
                            </ul>
                        </li>
                        <li className={styles["memuMore__li"]}>Chi tiết</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
