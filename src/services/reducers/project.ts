import {
    GET_PROJECTS_REQUEST,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAILED,
    CREATE_PROJECT_SUCCESS,
    CREATE_PROJECT_FAILED,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_FAILED,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAILED,
    TProjectActions,
} from "../actions/project";
import {IProject} from "../../utils/types";

interface IProjectState {
    selectedProject: IProject | object;
    loading: boolean;
    success: boolean;
    error: boolean;
    projects: any;
}

const initialState = {
    selectedProject: {},
    loading: false,
    success: false,
    error: false,
    projects: "",
}

export const projectReducer = (state: IProjectState = initialState, action: TProjectActions) => {
    switch (action.type) {
        case GET_PROJECTS_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false,
            }
        }
        case GET_PROJECTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
                projects: action.payload
            }
        }
        case GET_PROJECTS_FAILED: {
            return {
                ...state,
            }
        }
        case CREATE_PROJECT_SUCCESS: {
            return {
                ...state,
                success: true,
                error: false,
            }
        }
        case CREATE_PROJECT_FAILED: {
            return {
                ...state,
                success: false,
                error: true,
            }
        }
        case UPDATE_PROJECT_SUCCESS: {
            return {
                ...state,
                success: true,
                error: false,
            }
        }
        case UPDATE_PROJECT_FAILED: {
            return {
                ...state,
                success: false,
                error: true,
            }
        }
        case DELETE_PROJECT_SUCCESS: {
            return {
                ...state,
                success: true,
                error: false,
            }
        }
        case DELETE_PROJECT_FAILED: {
            return {
                ...state,
                success: false,
                error: true,
            }
        }

        default: {
            return state;
        }
    }
}