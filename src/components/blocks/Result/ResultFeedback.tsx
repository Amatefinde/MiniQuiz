import React from "react";
import IQuestion from "../../../types/IQuestion.ts";
import { Typography } from "@mui/joy";

interface IResultFeedbackProps {
  question: IQuestion;
}

const ResultFeedback: React.FC<IResultFeedbackProps> = ({ question }) => {
  if (question.is_user_answer_correct) {
    return <Typography level={"title-lg"} color={"success"}>
      {`You answer: "${question.user_answer}". It's correct!`}
    </Typography>;
  }

  return <Typography level={"title-lg"} color={"warning"}>{`You answer: "${question.user_answer}". It's incorrect!`}</Typography>;


};

export default ResultFeedback;