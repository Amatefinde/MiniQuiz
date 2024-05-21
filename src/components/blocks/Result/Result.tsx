import React from "react";
import IQuestion from "../../../types/IQuestion.ts";
import { Card, Stack, Typography } from "@mui/joy";
import ExerciseDifficultyLabel from "../ExerciseDifficultyLabel/ExerciseDifficultyLabel.tsx";
import ResultFeedback from "./ResultFeedback.tsx";

interface IResultProps {
  question: IQuestion;
}

const Result: React.FC<IResultProps> = ({ question }) => {
  return (
    <Card>
      <Stack direction={"row"} alignItems="center" spacing={1} padding={2}>
        <div className={"exercise-label"}>
          <ExerciseDifficultyLabel question={question} />
        </div>
        <Typography level={"title-lg"} textAlign={"start"} sx={{ textIndent: "30px" }}>{question.question}</Typography>
      </Stack>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "start", marginLeft: "30px" }}>
        {question.answers.map((answer, index) => <div>
            <li key={index}>{answer}</li>
          </div>
        )}
      </div>

      <ResultFeedback question={question}/>
    </Card>
  );
};

export default Result;