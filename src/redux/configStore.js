import thunk from "redux-thunk";
import userReducer from "./reducers/UserReducer";

const { createStore, applyMiddleware, compose } = require("redux");
const { combineReducers } = require("redux");
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({ userReducer });

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
