import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";

export default function Create() {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div className="create-right overview-create">
                <div className="create-right__title ">
                    <h1>Create</h1>
                    <p>Start a new sheet, report, or dashboard</p>
                </div>
                <div
                    className="create-right__listCard"
                    style={{ display: "flex", flexWrap: "wrap" }}
                >
                    <Card />
                    <Card />
                    <Card />
                    {/* <Card /> */}
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}
