import React from "react";
import { useHistory } from "react-router-dom";

export default function Card() {
    const history = useHistory();
    return (
        <div className="create-card">
            <div className="create-card__content">
                <div
                    className="create-card__border"
                    onClick={() => {
                        history.push("/task-list/1796");
                    }}
                >
                    <div className="create-card__img"></div>
                    <p className="create-card__name">Card</p>
                </div>
            </div>
        </div>
    );
}
