import shuffleArray from "./shuffleArray.ts";
import IFetchedQuestion from "../types/IFetchedQuestion.ts";
import IQuestion from "../types/IQuestion.ts";

const decodeHtmlEntities = (text: string): string => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};


const fetchedQuestionToQuestion = (fetchedQuestion: IFetchedQuestion): IQuestion => {
  return {
    ...fetchedQuestion,
    question: decodeHtmlEntities(fetchedQuestion.question),
    is_user_answer_correct: undefined,
    user_answer: undefined,
    answers: shuffleArray([fetchedQuestion.correct_answer, ...fetchedQuestion.incorrect_answers]).map((answer) => decodeHtmlEntities(answer)),
    correct_answer: decodeHtmlEntities(fetchedQuestion.correct_answer)
  };
};

export default fetchedQuestionToQuestion;
