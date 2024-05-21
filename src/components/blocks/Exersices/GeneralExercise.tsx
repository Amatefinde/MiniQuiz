import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import ManyAnswers from "./ManyAnswers/ManyAnswers.tsx";
import OneAnswer from "./OneAnswer/OneAnswer.tsx";
import { Typography } from "@mui/joy";

const GeneralExercise: React.FC = () => {
  const questions = useSelector((state: RootState) => state.questions.questions);
  const currentQuestionIdx = useSelector((state: RootState) => state.questions.currentQuestionIdx);
  const currentQuestion = questions[currentQuestionIdx]

  if (currentQuestion.type === "multiple") {
    return <ManyAnswers question={currentQuestion} />
  }

  if (currentQuestion.type === "boolean") {
    return <OneAnswer question={currentQuestion}/>
  }

  return <Typography level="h2">Error! Unknown question type</Typography>

};

export default GeneralExercise;