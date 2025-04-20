import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//? importing pages
import HomePage from "./pages/HomePage";
import StudentPortfolio from "./pages/student_form";
import AuthPage from "./pages/AuthPage";
import UserProfile from "./pages/UserProfile";
import DashboardPage from "./pages/Dashboard";
import AdminPortal from "./pages/AdminPortal";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { use, useEffect } from "react";
import { setLogout } from "./state";
import { setLogin } from "./state";

//* Create a Custom Theme
const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans, sans-serif", // Apply Noto Sans to all text
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          //  height: "48px", // Set a fixed height
          "& .MuiOutlinedInput-root": {
            //  height: "48px",
            borderRadius: "8px", // Slightly rounded corners
          },
          "& .MuiInputBase-input": {
            //height: "48px",
            //padding: "12px", // Ensure proper padding inside
          },
        },
      },
    },
  },
});

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = document.cookie.split("; ").find((row) => row.startsWith("token="));
    if (token) {
      const userData = JSON.parse(atob(token.split("=")[1].split(".")[1]));
      dispatch(setLogin({ user: userData, token: token.split("=")[1] }));
    } else {
      dispatch(setLogout());
    }
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/updateform" element={<StudentPortfolio />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/dashboard" element={user ? <DashboardPage /> : <AuthPage />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
