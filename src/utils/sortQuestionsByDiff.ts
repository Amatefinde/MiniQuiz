import IQuestion from "../types/IQuestion.ts";


export function sortQuestions(
  questions: IQuestion[],
  order: "asc" | "desc" = "asc"
): IQuestion[] {
  // Определение порядка сложности
  const difficultyOrder = {
    "easy": 1,
    "medium": 2,
    "hard": 3
  };

  return questions.sort((a, b) => {
    const difficultyA = difficultyOrder[a.difficulty];
    const difficultyB = difficultyOrder[b.difficulty];

    if (order === "asc") {
      return difficultyA - difficultyB;
    } else {
      return difficultyB - difficultyA;
    }
  });
}