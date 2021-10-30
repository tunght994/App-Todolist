import { userServices } from "../../services/userServices";
import { TOKEN, USER_LOGIN } from "../../utils/settings";
import * as ActionType from "../constants/UserConstants";
export const actionLogin = (infoLogin, history) => {
    return async (dispatch) => {
        dispatch(actionLoginRequest());
        try {
            const result = await userServices.servicesLogin(infoLogin);
            console.log(result.data.content);
            if (result.data.statusCode === 200) {
                dispatch(actionLoginSuccess(result.data.content));
                localStorage.setItem(
                    USER_LOGIN,
                    JSON.stringify(result.data.content)
                );
                localStorage.setItem(TOKEN, result.data.content.accessToken);
                history.push("/");
            } else {
                dispatch(actionLoginFailed(result.response.data.message));
            }
        } catch (error) {
            dispatch(actionLoginFailed(error));
        }
    };
};
const actionLoginRequest = () => ({
    type: ActionType.LOGIN_REQUEST,
});
const actionLoginFailed = (payload) => ({
    type: ActionType.LOGIN_FAILED,
    payload,
});
const actionLoginSuccess = (payload) => ({
    type: ActionType.LOGIN_SUCCESS,
    payload,
});
