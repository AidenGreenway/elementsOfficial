import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ForgotPassword from "./Login/ForgotPassword"; // Import the Forgot Password component

import Register from "./Login/Register";

import SignIn from "./Login/SignIn";

import { YourContextProvider } from "./YourContextFile/YourContextProvider";

import Banner from "./components/Banner";

import { Dashboard } from "./components/Dashboard";

import Profile from "./components/Profile";

import {
  ChallengeDetailScreen,
  Challenges,
  CourseModules,
  ElementScreen,
  Forum,
  ForumScreen,
} from "./screen";

const theme = createTheme({
  typography: {
    fontFamily: "The Next Font",

    fontColor: "white",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <YourContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add the new route */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="home" element={<Banner />} />

              <Route path="profile" element={<Profile />} />

              <Route path="challenges" element={<Challenges />} />

              <Route path="challenges/:type" element={<ChallengeDetailScreen />} />

              <Route path="coursemodules" element={<CourseModules />} />

              <Route path="coursemodules/:type" element={<ElementScreen />} />

              <Route path="forum" element={<Forum />} />

              <Route path="forum/:type" element={<ForumScreen />} />

              <Route path="/dashboard" element={<Navigate to="home" />} />
            </Route>
          </Routes>
        </Router>
      </YourContextProvider>
    </ThemeProvider>
  );
};

export default App;

