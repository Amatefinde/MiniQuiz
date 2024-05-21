import "./App.css";
import "@fontsource/inter";
import StarterPage from "./components/pages/StarterPage/StarterPage.tsx";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import ThemeSwitch from "./components/blocks/ThemeSwitch/ThemeSwitch.tsx";

function App() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <StarterPage />
      <ThemeSwitch />
    </CssVarsProvider>
  );
}

export default App;
