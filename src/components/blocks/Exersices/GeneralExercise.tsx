import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import ManyAnswers from "./ManyAnswers/ManyAnswers.tsx";
import OneAnswer from "./OneAnswer/OneAnswer.tsx";
import CloseIcon from "@mui/icons-material/Close";
import { LinearProgress, Stack, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";

const GeneralExercise: React.FC = () => {
  const questions = useSelector((state: RootState) => state.questions.questions);
  const currentQuestionIdx = useSelector((state: RootState) => state.questions.currentQuestionIdx);
  const currentQuestion = questions[currentQuestionIdx];
  const navigate = useNavigate();
  let exerciseComponent;

  const progressPercentage = currentQuestionIdx / questions.length * 100;

  if (currentQuestion.type === "multiple") {
    exerciseComponent = <ManyAnswers question={currentQuestion} />;
  }

  if (currentQuestion.type === "boolean") {
    exerciseComponent = <OneAnswer question={currentQuestion} />;
  }

  if (!exerciseComponent) {
    return <Typography level="h2">Error! Unknown question type</Typography>;
  }

  console.log(questions)

  return (
    <Stack width="600px" gap={2}>
      {exerciseComponent}
      <Stack direction={"row"} gap={1}>
        <CloseIcon onClick={() => navigate("/")} sx={{ cursor: "pointer" }} />
        <LinearProgress determinate value={progressPercentage} sx={{
          "--LinearProgress-radius": "20px",
          "--LinearProgress-thickness": "24px"
        }} >

          <Typography
            level="body-xs"
            fontWeight="xl"
            textColor="common.white"
            sx={{ mixBlendMode: 'difference' }}
          >
            {`${Math.round(Number(progressPercentage!))}%`}
          </Typography>
        </LinearProgress>
      </Stack>
    </Stack>
  );


};

export default GeneralExercise;