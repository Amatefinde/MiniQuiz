export default interface IFetchedQuestion {
  type: string;
  difficulty: "medium" | "hard" | "easy";
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}