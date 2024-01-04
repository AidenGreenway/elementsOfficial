import { ThemeProvider, createTheme } from "@mui/material/styles";

import { useState } from "react";

import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Funkcja do logowania użytkownika

  const login = () => {
    setIsLoggedIn(true);
  };

  // Funkcja do wylogowania użytkownika

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <YourContextProvider>
        <Router>
          <Routes>
            <Route path="/signin" element={<SignIn onLogin={login} />} />

            {isLoggedIn ? (
              <Route path="/" element={<Dashboard onLogout={logout} />}>
                <Route index element={<Banner />} />

                <Route path="/Home" element={<Banner />} />

                <Route path="CourseModules" element={<CourseModules />} />

                <Route path="/CourseModules/:type" element={<ElementScreen />} />

                <Route path="Challenges" element={<Challenges />} />

                <Route path="/Challenges/:type" element={<ChallengeDetailScreen />} />

                <Route path="Forum" element={<Forum />} />

                <Route path="/Forum/:type" element={<ForumScreen />} />

                <Route path="Profile" element={<Profile />} />

                <Route path="/" element={<Navigate to="home" />} />
              </Route>
            ) : (
              <Route path="*" element={<Navigate to="/signin" />} />
            )}
          </Routes>
        </Router>
      </YourContextProvider>
    </ThemeProvider>
  );
};

export default App;

