import * as ActionType from "./../constants/DefaultValueConstants";

const initialState = {
    priority: null,
    projectCategory: null,
    status: null,
    taskType: null,
};

const defaultValueReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.GET_PRIORITY:
            state.priority = payload;
            return { ...state };
        case ActionType.GET_PROJECT_CATEGORY:
            state.projectCategory = payload;
            return { ...state };
        case ActionType.GET_STATUS:
            state.status = payload;
            return { ...state };
        case ActionType.GET_TASK_TYPE:
            state.taskType = payload;
            return { ...state };
        case ActionType.GET_ALL_VALUE_DEFAULT:
            state.priority = payload;
            state.projectCategory = payload;
            state.taskType = payload;
            state.status = payload;
            return { ...state };
        default:
            return state;
    }
};
export default defaultValueReducer;
