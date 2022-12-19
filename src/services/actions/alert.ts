import {AppDispatch} from "../store";

export const ALERT_SHOW: "ALERT_SHOW" = "ALERT_SHOW";
export const ALERT_HIDE: "ALERT_HIDE" = "ALERT_HIDE";

export interface IAlertShowAction {
  readonly type: typeof ALERT_SHOW;
  payload: {
    alertType: string;
    alertText: string;
  };
}

export interface IAlertHideAction {
  readonly type: typeof ALERT_HIDE;
}

export type TAlertActions =
  | IAlertShowAction
  | IAlertHideAction;

export const hide = (dispatch: AppDispatch) => {
  dispatch({
    type: ALERT_HIDE,
  });
}

export const show = (dispatch: AppDispatch, alertType: string, alertText: string) => {
  dispatch({
    type: ALERT_SHOW,
    payload: { alertType, alertText }
  });
}