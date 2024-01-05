import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

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
            <Route path="/" element={<Dashboard />}>
              <Route path="home" element={<Banner />} />

              {/* Dodaj ścieżki dla AirBlog i EarthBlog analogicznie */}

              {/* <Route path="CourseDescription" element={<CourseDescription />} /> */}

              <Route path="CourseModules" element={<CourseModules />} />

              <Route path="/CourseModules/:type" element={<ElementScreen />} />

              <Route path="Challenges" element={<Challenges />} />

              <Route path="/Challenges/:type" element={<ChallengeDetailScreen />} />

              <Route path="Forum" element={<Forum />} />

              <Route path="/Forum/:type" element={<ForumScreen />} />

              <Route path="Profile" element={<Profile />} />

              <Route path="/" element={<Navigate to="home" />} />
            </Route>
          </Routes>
        </Router>
      </YourContextProvider>
    </ThemeProvider>
  );
};

export default App;

