import React from "react";
import style from "./index.module.scss";
import clsx from "clsx";
import Card from "./Card.js";

export default function TaskList() {
    return (
        <div id={clsx(style["task-list"])}>
            <div>
                <ul className={clsx(style.presentation)}>
                    <li className={clsx(style.presentation__item)}>
                        <a
                            href="/"
                            className={clsx(style["presentation__item -link"])}
                        >
                            Project list
                        </a>
                    </li>
                    <li className={clsx(style.presentation__item)}>/</li>
                    <li className={clsx(style.presentation__item)}>
                        {" "}
                        <a
                            href="/"
                            className={clsx(style["presentation__item -link"])}
                        >
                            Project name
                        </a>
                    </li>
                </ul>
            </div>
            <div className={clsx(style["taskList"])}>
                <div className={clsx(style["taskList__row"])}>
                    <div className={clsx(style["taskList__rowContent"])}>
                        <h3 className={clsx(style.taskList__rowTitle)}>
                            Compelete
                        </h3>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <div className={clsx(style["taskList__row"])}>
                    <div className={clsx(style["taskList__rowContent"])}>
                        <h3 className={clsx(style.taskList__rowTitle)}>
                            Compelete
                        </h3>
                        <Card />
                    </div>
                </div>
                <div className={clsx(style["taskList__row"])}>
                    <div className={clsx(style["taskList__rowContent"])}>
                        <h3 className={clsx(style.taskList__rowTitle)}>
                            Compelete
                        </h3>
                        <Card />
                    </div>
                </div>
                <div className={clsx(style["taskList__row"])}>
                    <div className={clsx(style["taskList__rowContent"])}>
                        <h3 className={clsx(style.taskList__rowTitle)}>
                            Compelete
                        </h3>
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
}
