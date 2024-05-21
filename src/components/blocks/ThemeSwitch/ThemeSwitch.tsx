import React from "react";
import { IconButton, Tooltip, useColorScheme } from "@mui/joy";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import classes from "./ThemeSwitch.module.css";

const ThemeSwitch: React.FC = () => {
  const { mode, setMode } = useColorScheme();

  function handleToggle() {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }

  return (
    <div className={classes.wrapper}>
      <Tooltip
        title="Change theme"
        variant="outlined"
        sx={{ position: "absolute", top: 0, left: 0 }}
      >
        <IconButton
          id="toggle-mode"
          size="sm"
          variant="plain"
          color="neutral"
          sx={{ alignSelf: "center" }}
          onClick={handleToggle}
        >
          {mode === "light" ? (
            <DarkModeRoundedIcon />
          ) : (
            <LightModeRoundedIcon />
          )}
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default ThemeSwitch;
