import { projectServices } from "../../services/projectServices";
import * as ActionType from "../constants/ProjectConstants";
export const actionGetProjectById = (id) => {
    return async (dispatch) => {
        dispatch(actionGetProjectRequest());
        try {
            const result = await projectServices.getProjectDetailByIdServices(
                id
            );
            dispatch(actionGetProjectSuccess(result.data.content));
        } catch (error) {
            dispatch(actionGetProjectFailed(error));
        }
    };
};
const actionGetProjectRequest = () => ({
    type: ActionType.GET_PROJECT_REQUEST,
});
const actionGetProjectSuccess = (data) => ({
    type: ActionType.GET_PROJECT_SUCCESS,
    payload: data,
});
const actionGetProjectFailed = (error) => ({
    type: ActionType.GET_PROJECT_FAILED,
    payload: error,
});
