import thunk from "redux-thunk";
import projectReducer from "./reducers/ProjectReducer";
import userReducer from "./reducers/UserReducer";

const { createStore, applyMiddleware, compose } = require("redux");
const { combineReducers } = require("redux");
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({ userReducer, projectReducer });

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
