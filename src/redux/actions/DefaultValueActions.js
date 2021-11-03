import * as ActionType from "./../constants/DefaultValueConstants";
import { defaultValueServices } from "../../services/defaultValueServices";

export const getAllDefaulValue = () => {
    return async (dispatch) => {
        await dispatch(actionGetPriority());
        await dispatch(actionGetProjectCategory());
        await dispatch(actionGetStatus());
        await dispatch(actionGetTaskType());
    };
};

export const actionGetPriority = () => {
    return async (dispatch) => {
        const result = await defaultValueServices.getPriorityServices();
        dispatch({
            type: ActionType.GET_PRIORITY,
            payload: result.data.content,
        });
    };
};

export const actionGetProjectCategory = () => {
    return async (dispatch) => {
        const result = await defaultValueServices.getProjectCategoryServices();
        dispatch({
            type: ActionType.GET_PROJECT_CATEGORY,
            payload: result.data.content,
        });
    };
};

export const actionGetStatus = () => {
    return async (dispatch) => {
        const result = await defaultValueServices.getStatusServices();
        dispatch({
            type: ActionType.GET_STATUS,
            payload: result.data.content,
        });
    };
};

export const actionGetTaskType = () => {
    return async (dispatch) => {
        const result = await defaultValueServices.getTaskTypeServices();
        dispatch({
            type: ActionType.GET_TASK_TYPE,
            payload: result.data.content,
        });
    };
};
