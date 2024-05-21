import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./settings/settingsSlice.ts";
import questionsReducer from "./questions/questionsSlice.ts";

export const store = configureStore({
  reducer: {
    setting: settingReducer,
    questions: questionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
