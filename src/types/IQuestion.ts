import IFetchedQuestion from "./IFetchedQuestion.ts";

export default interface IQuestion extends IFetchedQuestion {
  is_user_answer_correct: boolean | undefined;
  user_answer: string | undefined;
  answers: string[];
}