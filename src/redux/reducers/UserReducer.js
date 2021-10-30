import { USER_LOGIN } from "../../utils/settings";
import * as ActionType from "../constants/UserConstants";

let userLogin = null;
if (localStorage.getItem(USER_LOGIN)) {
    userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    userLogin,
    isLoading: false,
    error: null,
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.LOGIN_REQUEST:
            state.userLogin = null;
            state.isLoading = true;
            state.error = null;
            return { ...state };
        case ActionType.LOGIN_SUCCESS:
            state.userLogin = payload;
            state.isLoading = false;
            state.error = null;
            return { ...state };
        case ActionType.LOGIN_FAILED:
            state.userLogin = null;
            state.isLoading = false;
            state.error = payload;
            return { ...state };
        default:
            return state;
    }
};
export default userReducer;
