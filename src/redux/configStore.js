import thunk from "redux-thunk";

const { createStore, applyMiddleware, compose } = require("redux");
const { combineReducers } = require("redux");
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
