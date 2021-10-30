import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import InputIcon from "@mui/icons-material/Input";
export default function Sidebar() {
    return (
        <div className="newSidebar overview-create">
            <h3 className="newSidebar__title newSidebar__item">
                Solution center
            </h3>
            <NavLink
                exact
                activeStyle={{
                    fontWeight: "500",
                }}
                activeClassName="sidebar__active"
                to="/add/0"
            >
                <p className="newSidebar__item sideber-content__link">
                    <ArticleOutlinedIcon /> Create
                </p>
            </NavLink>
            <NavLink
                exact
                activeStyle={{
                    fontWeight: "500",
                }}
                activeClassName="sidebar__active"
                to="/add/-1"
            >
                <p className="newSidebar__item sideber-content__link">
                    <InputIcon /> Import
                </p>
            </NavLink>
            <div className="newSidebar__item">
                {/* <input type="text" id="newSidebar__search" />
                 */}
                <Paper
                    component="form"
                    style={{
                        backgroundColor: "transparen",
                        boxShadow: "none",
                    }}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        border: "1px solid #bbbb",
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1, color: "#bbb" }}
                        placeholder="Search..."
                        inputProps={{ "aria-label": "search google maps" }}
                    />
                    <IconButton
                        type="submit"
                        sx={{ p: "10px" }}
                        aria-label="search"
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            <div>
                <NavLink
                    activeClassName="sidebar__active"
                    exact
                    activeStyle={{
                        fontWeight: "500",
                    }}
                    to="/add/10"
                >
                    <p className="newSidebar__item sideber-content__link">
                        Create
                    </p>
                </NavLink>{" "}
                <NavLink
                    activeClassName="sidebar__active"
                    exact
                    activeStyle={{
                        fontWeight: "500",
                    }}
                    to="/add/11"
                >
                    <p className="newSidebar__item sideber-content__link">
                        Create
                    </p>
                </NavLink>{" "}
                <NavLink
                    activeClassName="sidebar__active"
                    exact
                    activeStyle={{
                        fontWeight: "500",
                    }}
                    to="/add/12"
                >
                    <p className="newSidebar__item sideber-content__link">
                        Browse All Solution
                    </p>
                </NavLink>{" "}
                <NavLink
                    activeClassName="sidebar__active"
                    exact
                    activeStyle={{
                        fontWeight: "500",
                    }}
                    to="/add/13"
                >
                    <p className="newSidebar__item sideber-content__link">
                        Browse All Solution
                    </p>
                </NavLink>{" "}
                <NavLink
                    activeClassName="sidebar__active"
                    exact
                    activeStyle={{
                        fontWeight: "500",
                    }}
                    to="/add/14"
                >
                    <p className="newSidebar__item sideber-content__link">
                        Browse All Solution
                    </p>
                </NavLink>{" "}
                <NavLink
                    activeClassName="sidebar__active"
                    exact
                    activeStyle={{
                        fontWeight: "500",
                    }}
                    to="/add/1"
                >
                    <p className="newSidebar__item sideber-content__link">
                        Browse All Solution
                    </p>
                </NavLink>
            </div>
        </div>
    );
}
