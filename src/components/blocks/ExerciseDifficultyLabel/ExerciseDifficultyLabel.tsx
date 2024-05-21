import React from "react";
import IQuestion from "../../../types/IQuestion.ts";
import { Chip } from "@mui/joy";


interface IExerciseDifficultyLabelProps {
  question: IQuestion
}

const ExerciseDifficultyLabel: React.FC<IExerciseDifficultyLabelProps> = ({question}) => {
  if (question.difficulty === "hard") {
    return <Chip color={"danger"}>Hard</Chip>
  }
  if (question.difficulty === "medium") {
    return <Chip color={"warning"}>Medium</Chip>
  }
  if (question.difficulty === "easy") {
    return <Chip color={"success"}>Easy</Chip>
  }
  return null;
};

export default ExerciseDifficultyLabel;