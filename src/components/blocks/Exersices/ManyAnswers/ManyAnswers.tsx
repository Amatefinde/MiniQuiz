import React, { useState } from "react";
import IQuestion from "../../../../types/IQuestion";
import { Button, Card, CardActions, Checkbox, Stack, Typography } from "@mui/joy";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { addAnswer } from "../../../../store/questions/questionsSlice.ts";
import ExerciseDifficultyLabel from "../../ExerciseDifficultyLabel/ExerciseDifficultyLabel.tsx";

interface IManyAnswersProps {
  question: IQuestion;
}

const ManyAnswers: React.FC<IManyAnswersProps> = ({ question }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const handleCheckboxChange = (answer: string) => {
    setSelectedAnswers((prevSelectedAnswers) =>
      prevSelectedAnswers.includes(answer)
        ? prevSelectedAnswers.filter((item) => item !== answer)
        : [...prevSelectedAnswers, answer]
    );
  };

  const handleSubmit = () => {
    const userAnswer = {
      answer: selectedAnswers.join(", ")
    };
    dispatch(addAnswer(userAnswer));
    setSelectedAnswers([])
  };


  return (
    <Card sx={{ alignItems: "start" }}>
      <Stack direction={"row"} alignItems="center" spacing={2} padding={2}>
        <Typography level={"title-lg"} textAlign={"start"} sx={{textIndent: "30px"}}>{question.question}</Typography>
      </Stack>

      {question.answers.map((answer, index) => (
        <div style={{ marginLeft: "20px" }} key={index}>
          <Checkbox
            label={answer}
            value={answer}
            checked={selectedAnswers.includes(answer)}
            onChange={() => handleCheckboxChange(answer)}
          />
        </div>
      ))}
      <CardActions sx={{ justifyContent: "flex-end", width: "100%", padding: 0, paddingLeft: 2 }}>
        <ExerciseDifficultyLabel question={question} />
        <Stack flex={1}>

        </Stack>
        <Button id="submit-btn" onClick={handleSubmit}>Submit</Button>
      </CardActions>
    </Card>
  );
};

export default ManyAnswers;
