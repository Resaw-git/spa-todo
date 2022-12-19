import {ALERT_SHOW, ALERT_HIDE, TAlertActions} from "../actions/alert";

interface IInitialState {
  visible: boolean;
  alertType: string;
  alertText: string;
}

const initialState = {
  visible: false,
  alertType: "",
  alertText: ""
};

export const alertReducer = (state: IInitialState = initialState, action: TAlertActions) => {
  switch (action.type) {
    case ALERT_SHOW: {
      return {
        ...state,
        visible: true,
        alertType: action.payload.alertType,
        alertText: action.payload.alertText,
      };
    }
    case ALERT_HIDE: {
      return {
        ...state,
        visible: false,
      };
    }
    default: {
      return state;
    }
  }
};
