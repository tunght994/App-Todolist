import React, { useEffect } from "react";
import style from "./index.module.scss";
import clsx from "clsx";
import Card from "./Card.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionGetProjectById } from "../../../redux/actions/ProjectActions";
import { NavLink, useParams } from "react-router-dom";

export default function TaskList() {
    const { error, projectDetail, isLoading } = useSelector(
        (state) => state.projectReducer
    );

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionGetProjectById(id));
    }, [dispatch, id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error.response.data.content}</div>;
    }

    const renderCardTask = (listTask) => {
        return listTask?.map((task) => {
            return (
                <Card
                    id={id}
                    taskId={task.taskId}
                    key={task.taskId}
                    task={task}
                />
            );
        });
    };

    const renderTaskListCol = () => {
        return projectDetail?.lstTask.map((task) => {
            return (
                <div
                    key={task.statusId}
                    className={clsx(style["taskList__col"])}
                >
                    <div className={clsx(style["taskList__colContent"])}>
                        <h3 className={clsx(style.taskList__colTitle)}>
                            {task.statusName}
                        </h3>
                        {renderCardTask(task.lstTaskDeTail)}
                    </div>
                </div>
            );
        });
    };

    return (
        <div id={clsx(style["task-list"])}>
            <div>
                <ul className={clsx(style.presentation)}>
                    <li className={clsx(style.presentation__item)}>
                        <a
                            href="/"
                            className={clsx(style["presentation__item -link"])}
                        >
                            Project List
                        </a>
                    </li>
                    <li className={clsx(style.presentation__item)}>/</li>
                    <li className={clsx(style.presentation__item)}>
                        {" "}
                        <NavLink
                            to={`/task-list/${id}`}
                            className={clsx(style["presentation__item -link"])}
                        >
                            {projectDetail?.projectName}
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={clsx(style["taskList"])}>{renderTaskListCol()}</div>
        </div>
    );
}
