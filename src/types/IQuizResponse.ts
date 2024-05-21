import IQuizQuestion from "./IQuizQuestion.ts";

export default interface IQuizResponse {
  response_code: number;
  results: IQuizQuestion[];
}