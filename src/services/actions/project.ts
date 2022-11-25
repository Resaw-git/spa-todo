import {IProject} from "../../utils/types";
import {AppDispatch} from "../store";

export const CREATE_PROJECT: "CREATE_PROJECT" = "CREATE_PROJECT";
export const GET_PROJECTS: "GET_PROJECTS" = "GET_PROJECTS";
export const UPDATE_PROJECT: "UPDATE_PROJECT" = "UPDATE_PROJECT";
export const SELECT_PROJECT: "SELECT_PROJECT" = "SELECT_PROJECT";
export const DELETE_PROJECT: "DELETE_PROJECT" = "DELETE_PROJECT";

export function selectProject(dispatch: AppDispatch, project: IProject | undefined) {
    dispatch({
        type: SELECT_PROJECT,
        payload: project
    })
}





interface ICreateProjectAction {
    readonly type: typeof CREATE_PROJECT;
    payload: IProject;
}

interface IGetProjectsAction {
    readonly type: typeof GET_PROJECTS;
    payload: IProject[];
}

interface IUpdateProjectAction {
    readonly type: typeof UPDATE_PROJECT;
    payload: IProject;
}

interface ISelectProjectAction {
    readonly type: typeof SELECT_PROJECT
    payload: IProject;
}

interface IDeleteProjectAction {
    readonly type: typeof DELETE_PROJECT;
    payload: string;
}

export type TProjectActions =
    | ICreateProjectAction
    | IGetProjectsAction
    | IUpdateProjectAction
    | ISelectProjectAction
    | IDeleteProjectAction;