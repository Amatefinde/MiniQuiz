import IQuestion from "../types/IQuestion.ts";
import IUserAnswer from "../types/IUserAnswer.ts";

const processUserAnswer = (question: IQuestion, userAnswer: IUserAnswer): IQuestion => {
  const isUserAnswerCorrect = userAnswer.answer === question.correct_answer;

  return {
    ...question,
    is_user_answer_correct: isUserAnswerCorrect,
    user_answer: userAnswer.answer,
  };
};

export default processUserAnswer;