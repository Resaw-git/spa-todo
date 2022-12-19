import { TProjectActions } from "./project";
import { TModalActions } from "./modal";
import { TAlertActions } from "./alert";

export type TAppActions =
    | TProjectActions
    | TModalActions
    | TAlertActions;