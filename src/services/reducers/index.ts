import { combineReducers } from "redux";
import {projectReducer} from "./project";
import {modalReducer} from "./modal";

export const rootReducer = combineReducers({
    projectsState: projectReducer,
    modal: modalReducer
})