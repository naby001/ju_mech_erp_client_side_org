import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import StudentPortfolio from "./pages/student_form";
import AuthPage from "./pages/AuthPage";
import "./App.css";
import { Dashboard } from "@mui/icons-material";
import DashboardPage from "./pages/Dashboard";

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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/updateform" element={<StudentPortfolio />} />
          <Route path="/dashboard" element={<DashboardPage/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
