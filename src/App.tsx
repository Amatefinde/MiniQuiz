import "./App.css";
import "@fontsource/inter";
import StarterPage from "./components/pages/StarterPage/StarterPage.tsx";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import ThemeSwitch from "./components/blocks/ThemeSwitch/ThemeSwitch.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestingPage from "./components/pages/TestingPage/TestingPage.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/sberQuiz",
      element: <StarterPage />,
      errorElement: <h1>Not found 404</h1>,
    },
    {
      path: "/sberQuiz/testing",
      element: (
          <TestingPage/>
      ),
    }])


  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <RouterProvider router={router} />
      <ThemeSwitch />
    </CssVarsProvider>
  );
}

export default App;
