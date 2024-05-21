import IQuestion from "../types/IQuestion.ts";

interface IScore {
  maxScore: number;
  userScore: number;
}

export default function calculateScore(questions: IQuestion[]): IScore {
  let maxScore = 0;
  let userScore = 0;

  questions.forEach(question => {
    maxScore += 1;
    if (question.is_user_answer_correct) {
      userScore += 1;
    }
  });

  return { maxScore, userScore };
}