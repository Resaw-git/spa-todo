import {
    CREATE_PROJECT,
    DELETE_PROJECT,
    GET_PROJECTS,
    SELECT_PROJECT,
    UPDATE_PROJECT,
    TProjectActions,
} from "../actions/project";
import {IProject} from "../../utils/types";

interface IProjectState {
    selectedProject: IProject | object;
    projects: IProject[];
}

const initialState = {
    selectedProject: {},
    projects: [
        {id: "1", name: "Project 1", tasks: []},
        {id: "2", name: "Project 2", tasks: []},
        {id: "3", name: "Project 3", tasks: []},
    ],
}

export const projectReducer = (state: IProjectState = initialState, action: TProjectActions) => {
    switch (action.type) {
        case CREATE_PROJECT: {
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        }
        case DELETE_PROJECT: {
            return {
                ...state,
                projects: [...state.projects.filter((el) => el.id !== action.payload)]
            }
        }
        case GET_PROJECTS: {
            return {
                ...state,
                projects: action.payload
            }
        }
        case UPDATE_PROJECT: {
            return {
                ...state,
                projects: state.projects.map(el => {
                    if(el.id === action.payload.id) {
                        el.name = action.payload.name
                    } return el;
                })
            }
        }
        case SELECT_PROJECT: {
            return {
                ...state,
                selectedProject: action.payload
            }
        }
        default: {
            return state;
        }
    }
}