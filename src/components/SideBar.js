import {
    AccessTime,
    AccountCircle,
    Add,
    Apps,
    FolderOpen,
    GradeOutlined,
    HelpOutline,
    Home,
    NotificationsNone,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const sidebarIconTop = [
    {
        display: <Home className="icon" />,
        path: "/home",
    },
    {
        display: <NotificationsNone className="icon" />,
        path: "/notification",
    },
    {
        display: <FolderOpen className="icon" />,
        path: "/folder",
    },
    {
        display: <AccessTime className="icon" />,
        path: "/accestime",
    },
    {
        display: <GradeOutlined className="icon" />,
        path: "/grade",
    },
    {
        display: <Add className="icon" />,
        path: "/add",
    },
];
const sidebarIconBottom = [
    {
        display: <Apps className="icon" />,
        path: "/",
    },
    {
        display: <HelpOutline className="icon" />,
        path: "/",
    },
    {
        display: <AccountCircle className="icon" />,
        path: "/",
    },
];

const SideBar = () => {
    const { pathname } = useLocation();
    const activeNav = sidebarIconTop.findIndex((e) =>
        pathname.includes(e.path)
    );
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                {sidebarIconTop.map((item, index) => (
                    <div
                        className={`sidebar-icon ${
                            index === activeNav ? "active" : ""
                        }`}
                        key={index}
                    >
                        <Link to={item.path}>{item.display}</Link>
                    </div>
                ))}
            </div>
            <div className="sidebar-bottom">
                {sidebarIconBottom.map((item, index) => (
                    <div className="sidebar-icon" key={index}>
                        <Link to="/">{item.display}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideBar;
