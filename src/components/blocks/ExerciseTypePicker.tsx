import React from "react";
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setQuizSettings } from "../../store/settings/settingsSlice.ts";
import { Tooltip } from "@mui/joy";

const ExerciseTypePicker: React.FC = () => {
  const quizSettings = useSelector((state: RootState) => state.setting.quizSettings);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setQuizSettings({
        ...quizSettings,
        type: event.target.value,
      }),
    );
  };

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Radio
        checked={quizSettings.type === 'multiple'}
        onChange={handleChange}
        value="multiple"
        name="radio-buttons"
        label="Multiple"
      />
      <Tooltip title={"Soon!"}>
      <Radio
        checked={quizSettings.type === 'boolean'}
        onChange={handleChange}
        value="boolean"
        name="radio-buttons"
        label="Boolean"
        disabled
      />
      </Tooltip>
    </Box>
  );
}

export default ExerciseTypePicker;