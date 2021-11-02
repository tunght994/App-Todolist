import * as ActionType from "../constants/ProjectConstants";
const initialState = {
    error: null,
    projectDetail: null,
    isLoading: false,
};

const projectReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.GET_PROJECT_REQUEST:
            state.error = null;
            state.projectDetail = null;
            state.isLoading = true;
            return { ...state };
        case ActionType.GET_PROJECT_SUCCESS:
            state.error = null;
            state.projectDetail = payload;
            state.isLoading = false;
            return { ...state };
        case ActionType.GET_PROJECT_FAILED:
            state.error = payload;
            state.projectDetail = null;
            state.isLoading = false;
            return { ...state };
        default:
            return state;
    }
};

export default projectReducer;
