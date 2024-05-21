import IFetchedQuestion from "./IFetchedQuestion.ts";

export default interface IQuizResponse {
  response_code: number;
  results: IFetchedQuestion[];
}