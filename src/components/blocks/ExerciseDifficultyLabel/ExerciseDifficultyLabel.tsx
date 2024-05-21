import React from "react";
import IQuestion from "../../../types/IQuestion.ts";
import { Chip } from "@mui/joy";


interface IExerciseDifficultyLabelProps {
  question: IQuestion
}

const ExerciseDifficultyLabel: React.FC<IExerciseDifficultyLabelProps> = ({question}) => {
  if (question.difficulty === "hard") {
    return <Chip color={"danger"} variant={"outlined"}>Hard</Chip>
  }
  if (question.difficulty === "medium") {
    return <Chip color={"warning"} variant={"outlined"}>Medium</Chip>
  }
  if (question.difficulty === "easy") {
    return <Chip color={"success"} variant={"outlined"}>Easy</Chip>
  }
  return null;
};

export default ExerciseDifficultyLabel;