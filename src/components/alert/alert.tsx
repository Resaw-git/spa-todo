import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {hide} from "../../services/actions/alert";

const Alert = () => {
  const {visible, alertType, alertText} = useAppSelector(store => store.alert)
  const dispatch = useAppDispatch();

  if(!visible) {
    return null;
  }

  const hideAlert = () => {
    hide(dispatch)
  }

  return (
    <div className={`position-absolute top-0 m-2 container-xxl alert alert-${alertType || "warning"} alert-dismissible`} >
      <strong>Внимание!</strong> {alertText}
      <button onClick={hideAlert} type="button" className="btn-close" aria-label="Close"></button>
    </div>
  );
};

export default Alert;