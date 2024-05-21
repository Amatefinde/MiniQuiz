import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Result from "../../blocks/Result/Result.tsx";
import { Button, Select, Stack, Typography } from "@mui/joy";
import calculateScore from "../../../utils/calculateScore.ts";
import { useNavigate } from "react-router-dom";
import Option from "@mui/joy/Option";
import { sortQuestions } from "../../../utils/sortQuestionsByDiff.ts";

const ResultsPage: React.FC = () => {
  const questions = useSelector((state: RootState) => state.questions.questions);
  const score = calculateScore(questions);
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSortChange = (
    _: React.SyntheticEvent | null,
    newValue: string | null,
  ) => {
    if (newValue == "asc") {
      setSortOrder(newValue);
    }
    if (newValue == "desc") {
      setSortOrder(newValue);
    }
  };

  const sortedQuestions = sortQuestions(questions, sortOrder);

  return (
    <Stack sx={{ width: "900px", gap: 2 }}>
      <Typography level="h2">
        Your results: {score.userScore}/{score.maxScore}
      </Typography>
      <Select defaultValue="asc" onChange={handleSortChange}>
        <Option value="asc">Easy first</Option>
        <Option value="desc">Hard first</Option>
      </Select>
      {sortedQuestions.map((question, index) => (
        <Result key={index} question={question} />
      ))}
      <Button onClick={() => navigate("/")}>Go back</Button>
    </Stack>
  );
};

export default ResultsPage;