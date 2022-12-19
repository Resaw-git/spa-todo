import { IProject } from "../../utils/types";
import { AppThunk } from "../store";
import { checkResponse } from "../check-response";
import { URL } from "../api";
import axios from "axios";

export const GET_PROJECTS_REQUEST: "GET_PROJECTS_REQUEST" = "GET_PROJECTS_REQUEST";
export const GET_PROJECTS_SUCCESS: "GET_PROJECTS_SUCCESS" = "GET_PROJECTS_SUCCESS";
export const GET_PROJECTS_FAILED: "GET_PROJECTS_FAILED" = "GET_PROJECTS_FAILED";

export const CREATE_PROJECT_SUCCESS: "CREATE_PROJECT_SUCCESS" = "CREATE_PROJECT_SUCCESS";
export const CREATE_PROJECT_FAILED: "CREATE_PROJECT_FAILED" = "CREATE_PROJECT_FAILED";

export const UPDATE_PROJECT_SUCCESS: "UPDATE_PROJECT_SUCCESS" = "UPDATE_PROJECT_SUCCESS";
export const UPDATE_PROJECT_FAILED: "UPDATE_PROJECT_FAILED" = "UPDATE_PROJECT_FAILED";

export const DELETE_PROJECT_SUCCESS: "DELETE_PROJECT_SUCCESS" = "DELETE_PROJECT_SUCCESS";
export const DELETE_PROJECT_FAILED: "DELETE_PROJECT_FAILED" = "DELETE_PROJECT_FAILED";


interface ICreateProjectSuccessAction {
    readonly type: typeof CREATE_PROJECT_SUCCESS;
}

interface ICreateProjectFailedAction {
    readonly type: typeof CREATE_PROJECT_FAILED;
}

interface IGetProjectsRequestAction {
    readonly type: typeof GET_PROJECTS_REQUEST;
}

interface IGetProjectsSuccessAction {
    readonly type: typeof GET_PROJECTS_SUCCESS;
    payload: any;
}

interface IGetProjectsFailedAction {
    readonly type: typeof GET_PROJECTS_FAILED;
}

interface IUpdateProjectSuccessAction {
    readonly type: typeof UPDATE_PROJECT_SUCCESS;
    payload: IProject;
}

interface IUpdateProjectFailedAction {
    readonly type: typeof UPDATE_PROJECT_FAILED;
}

interface IDeleteProjectSuccessAction {
    readonly type: typeof DELETE_PROJECT_SUCCESS;
}

interface IDeleteProjectFailedAction {
    readonly type: typeof DELETE_PROJECT_FAILED;
}

export type TProjectActions =
    | ICreateProjectSuccessAction
    | ICreateProjectFailedAction
    | IGetProjectsRequestAction
    | IGetProjectsSuccessAction
    | IGetProjectsFailedAction
    | IUpdateProjectSuccessAction
    | IUpdateProjectFailedAction
    | IDeleteProjectSuccessAction
    | IDeleteProjectFailedAction;

export const test = async () => {
  const res = await axios.get(`${URL}/projects.json`)
  console.log(res.data)
}

export const fetchProjects = (): AppThunk =>
  (dispatch) => {
      dispatch({
          type: GET_PROJECTS_REQUEST,
      });
      fetch(`${URL}/projects.json`)
        .then(checkResponse)
        .then((res) => {
            dispatch({
                type: GET_PROJECTS_SUCCESS,
                payload: res.data,
            });
            console.log(res.data)
        })
        .catch((error) => {
            dispatch({
                type: GET_PROJECTS_FAILED,
            });
            console.log(error);
        });
  };


export const createProject = (title: string): AppThunk =>
  (dispatch) => {
      fetch(`${URL}/projects.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          name: title
        }),
      })
        .then(checkResponse)
        .then((res) => {
            dispatch({
                type: CREATE_PROJECT_SUCCESS,
            });
            console.log(res.data)
        })
        .catch((error) => {
            dispatch({
                type: CREATE_PROJECT_FAILED,
            });
            console.log(error);
        });
  };