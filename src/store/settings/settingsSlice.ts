import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IQuizSettings from "../../types/IQuizSettings.ts";

interface ISettings {
  quizSettings: IQuizSettings;
}
const initialState: ISettings = {
  quizSettings: {
    manyAnswers: true,
    onlyOneAnswer: false,
    numberOfQuestions: 5,
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setQuizSettings: (state, action: PayloadAction<IQuizSettings>) => {
      state.quizSettings = action.payload;
    },
    toDefault: (state) => {
      state.quizSettings = initialState.quizSettings;
    },
  },
});

export const { setQuizSettings, toDefault } = settingsSlice.actions;
export default settingsSlice.reducer;
