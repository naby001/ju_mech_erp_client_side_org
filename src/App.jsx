import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import StudentPortfolio from "./pages/student_form";
import AuthPage from "./pages/AuthPage";
import "./App.css";
import { Dashboard } from "@mui/icons-material";
import DashboardPage from "./pages/Dashboard";
import { useSelector } from "react-redux";

// ✅ Create a Custom Theme
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
  const user=useSelector((state)=>state.user);
  
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={user ? <HomePage /> : <Navigate to="/auth" />} />
        <Route path="/updateform" element={user ? <StudentPortfolio /> : <Navigate to="/auth" />} />
        <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/auth" />} />
      </Routes>
    </Router>
  </ThemeProvider>
  );
}

export default App;
