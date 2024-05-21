import $api from "../index.ts";
import IQuizSettings from "../../types/IQuizSettings.ts";
import IQuizResponse from "../../types/IQuizResponse.ts";


export default class QuizService {
  static async getQuiz(quizSettings: IQuizSettings): Promise<IQuizResponse> {
    return $api
      .get("/", { params: quizSettings })
      .then((response) => response.data);
  }
}
