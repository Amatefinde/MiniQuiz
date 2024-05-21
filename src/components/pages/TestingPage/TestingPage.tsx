import React, { useEffect, useState } from "react";
import QuizService from "../../../http/services/QuizService.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { CircularProgress, Typography } from "@mui/joy";
import axios from "axios";
import { setQuestions } from "../../../store/questions/questionsSlice.ts";

const TestingPage: React.FC = () => {
  const quizSettings = useSelector((state: RootState) => state.setting.quizSettings);
  const questions = useSelector((state: RootState) => state.questions.questions);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorStatus, setErrorStatus] = useState<undefined | number>(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    async function fetchQuiz() {
      setIsLoading(true)
      try {
        const quizResponse =  await QuizService.getQuiz(quizSettings)
        dispatch(setQuestions(quizResponse))
      } catch(err) {
        if (axios.isAxiosError(err))  {
          setErrorStatus(err.status)
        } else {
          console.log("во время фетча вопросов произошла ошиьбка: ", err)
        }
      }
      setIsLoading(false)
    }

    fetchQuiz()
  }, []);

  if (errorStatus) {
    if (errorStatus === 429) {
      return <Typography level={"h2"}>Error 429! Too many requests!</Typography>
    }
    return <Typography level={"h2"}>Unexpected error</Typography>;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div>
      {questions.length > 0 && questions.map(questions => <div>{questions.question}</div>)}
    </div>
  );
};

export default TestingPage;