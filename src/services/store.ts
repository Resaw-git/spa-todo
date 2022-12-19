import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { TAppActions } from "./actions";

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TAppActions>;

