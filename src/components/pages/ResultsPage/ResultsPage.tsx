import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Result from "../../blocks/Result/Result.tsx";
import { Button, Stack, Typography } from "@mui/joy";
import calculateScore from "../../../utils/calculateScore.ts";
import { useNavigate } from "react-router-dom";

const ResultsPage: React.FC = () => {
  const questions = useSelector((state: RootState) => state.questions.questions);
  const score = calculateScore(questions)
  const navigate = useNavigate();
  return (
    <Stack sx={{width: "900px", gap: 2}}>
      <Typography level="h2" >Your results: {score.userScore}/{score.maxScore}</Typography>
      {questions.map((question, index) => <Result key={index} question={question} />)}
      <Button onClick={() => navigate("/")}>Go back</Button>
    </Stack>
  );
};

export default ResultsPage;