import { combineReducers } from "redux";
import { projectReducer } from "./project";
import { modalReducer } from "./modal";
import { alertReducer } from "./alert";

export const rootReducer = combineReducers({
    projects: projectReducer,
    modal: modalReducer,
    alert: alertReducer,
})