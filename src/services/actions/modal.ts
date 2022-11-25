import {AppDispatch} from "../store";

export const MODAL_OPEN: "MODAL_OPEN" = "MODAL_OPEN";
export const MODAL_CLOSE: "MODAL_CLOSE" = "MODAL_CLOSE";

export interface IModalOpenAction {
    readonly type: typeof MODAL_OPEN;
}

export interface IModalCloseAction {
    readonly type: typeof MODAL_CLOSE;
}

export type TModalActions =
    | IModalOpenAction
    | IModalCloseAction;

export const closeModal = (dispatch: AppDispatch) => {
    dispatch({
        type: MODAL_CLOSE,
    });
}

export const openModal = (dispatch: AppDispatch) => {
    dispatch({
        type: MODAL_OPEN,
    });
}