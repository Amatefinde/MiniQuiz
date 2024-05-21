import shuffleArray from "./shuffleArray.ts";
import IFetchedQuestion from "../types/IFetchedQuestion.ts";
import IQuestion from "../types/IQuestion.ts";

const fetchedQuestionToQuestion = (fetchedQuestion: IFetchedQuestion): IQuestion => {
  return {
    ...fetchedQuestion,
    is_user_answer_correct: undefined,
    user_answer: undefined,
    answers: shuffleArray([fetchedQuestion.correct_answer, ...fetchedQuestion.incorrect_answers]),
  };
};

export default fetchedQuestionToQuestion;
