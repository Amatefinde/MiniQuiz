import { sortQuestions } from "./sortQuestionsByDiff";
import IQuestion from "../types/IQuestion.ts";


describe("sortQuestions", () => {
  const questions: IQuestion[] = [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science",
      question: "What is the symbol for sodium on the periodic table?",
      correct_answer: "Na",
      incorrect_answers: ["K", "Cl", "Si"],
      is_user_answer_correct: undefined,
      user_answer: undefined,
      answers: ["Na", "K", "Cl", "Si"],
    },
    {
      type: "boolean",
      difficulty: "hard",
      category: "History",
      question: "The Reformation took place in the 16th century.",
      correct_answer: "True",
      incorrect_answers: ["False"],
      is_user_answer_correct: true,
      user_answer: "True",
      answers: ["True", "False"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question: "What is the capital of Australia?",
      correct_answer: "Canberra",
      incorrect_answers: ["Sydney", "Melbourne", "Brisbane"],
      is_user_answer_correct: undefined,
      user_answer: undefined,
      answers: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    },
  ];

  it("should sort questions in ascending order of difficulty by default", () => {
    const sorted = sortQuestions(questions);
    expect(sorted).toEqual([
      {
        type: "multiple",
        difficulty: "easy",
        category: "Science",
        question: "What is the symbol for sodium on the periodic table?",
        correct_answer: "Na",
        incorrect_answers: ["K", "Cl", "Si"],
        is_user_answer_correct: undefined,
        user_answer: undefined,
        answers: ["Na", "K", "Cl", "Si"],
      },
      {
        type: "multiple",
        difficulty: "medium",
        category: "Geography",
        question: "What is the capital of Australia?",
        correct_answer: "Canberra",
        incorrect_answers: ["Sydney", "Melbourne", "Brisbane"],
        is_user_answer_correct: undefined,
        user_answer: undefined,
        answers: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "History",
        question: "The Reformation took place in the 16th century.",
        correct_answer: "True",
        incorrect_answers: ["False"],
        is_user_answer_correct: true,
        user_answer: "True",
        answers: ["True", "False"],
      },
    ]);
  });

  it("should not mutate the original array", () => {
    const originalQuestions = [...questions];
    sortQuestions(questions);
    expect(questions).toEqual(originalQuestions);
  });

  it("should handle an empty array", () => {
    const sorted = sortQuestions([]);
    expect(sorted).toEqual([]);
  });

  it("should handle an array with only one question", () => {
    const sorted = sortQuestions([{ difficulty: "medium", type: "multiple", category: "General Knowledge", question: "What is the answer to life, the universe and everything?", correct_answer: "42", incorrect_answers: ["24", "0", "12"], is_user_answer_correct: undefined, user_answer: undefined, answers: ["42", "24", "0", "12"] }]);
    expect(sorted).toEqual([{ difficulty: "medium", type: "multiple", category: "General Knowledge", question: "What is the answer to life, the universe and everything?", correct_answer: "42", incorrect_answers: ["24", "0", "12"], is_user_answer_correct: undefined, user_answer: undefined, answers: ["42", "24", "0", "12"] }]);
  });
});

