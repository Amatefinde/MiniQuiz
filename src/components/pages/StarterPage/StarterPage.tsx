import React from "react";
import { Button, Divider, Input, Sheet, Slider, Stack, Typography } from "@mui/joy";
import classes from "./StarterPage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { setQuizSettings } from "../../../store/settings/settingsSlice.ts";
import ExerciseTypePicker from "../../blocks/ExerciseTypePicker.tsx";

const StarterPage: React.FC = () => {
  const quizSettings = useSelector((state: RootState) => state.setting.quizSettings);
  const dispatch = useDispatch<AppDispatch>();
  const maxNumOfQuiz = 30;
  function handleNumberOfQuizChange(e: any) {
    let value;
    if (parseInt(e.target.value) > maxNumOfQuiz) {
      value = maxNumOfQuiz;
    } else {
      value = parseInt(e.target.value) | 0;
    }

    dispatch(
      setQuizSettings({
        ...quizSettings,
        amount: value,
      }),
    );
  }

  return (
    <div className={classes.wrapper}>
      <Typography level={"h1"}>
        Hey! This is a mini quiz - test task for a frontend developer
      </Typography>
      <Sheet
        variant="soft"
        sx={{
          padding: "20px",
          borderRadius: "10px",
          gap: 3,
        }}
      >
        <Stack gap={2}>
          <Typography level={"title-lg"}>Quiz settings</Typography>
          <Divider />
          <ExerciseTypePicker/>
          <Divider />
          <Stack direction={"row"} sx={{ gap: 1 }}>
            <Slider
              onChange={handleNumberOfQuizChange}
              value={quizSettings.amount}
              min={1}
              max={maxNumOfQuiz}
              sx={{ flex: 9 }}
            />
            <Input
              onChange={handleNumberOfQuizChange}
              value={quizSettings.amount}
              sx={{ flex: 1, textAlign: "right" }}
              size={"sm"}
              variant={"plain"}
            />
          </Stack>
          <Button color="primary">Start</Button>
        </Stack>
      </Sheet>
    </div>
  );
};

export default StarterPage;
