import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IFetchedQuestion from "../../types/IFetchedQuestion.ts";
import IQuestion from "../../types/IQuestion.ts";
import IQuizResponse from "../../types/IQuizResponse.ts";
import fetchedQuestionToQuestion from "../../utils/fetchedQuestionToQuestion.ts";
import IUserAnswer from "../../types/IUserAnswer.ts";
import processUserAnswer from "../../utils/processUserAnswer.ts";

interface IInitialState {
  fetchedQuestions: IFetchedQuestion[];
  questions: IQuestion[];
  currentQuestionIdx: number;
}

const initialState: IInitialState = {
  fetchedQuestions: [],
  questions: [],
  currentQuestionIdx: 0,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<IQuizResponse>) => {
      state.fetchedQuestions = action.payload.results;
      state.questions = action.payload.results.map(fetchedQuestion => fetchedQuestionToQuestion(fetchedQuestion));
      state.currentQuestionIdx = 0;
    },
    addAnswer: (state, action: PayloadAction<IUserAnswer>) => {
      const currentQuestion = state.questions[state.currentQuestionIdx]
      state.questions[state.currentQuestionIdx] = processUserAnswer(currentQuestion, action.payload)
      state.currentQuestionIdx++;
    }
  },
});

export const { setQuestions, addAnswer } = questionsSlice.actions;
export default questionsSlice.reducer;
