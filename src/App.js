import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Banner, Dashboard, Profile } from "./components";

import { ElementContextProvider } from "./elementContext/ElementContextProvider";
import {
  ChallengeDetailScreen,
  Challenges,
  CourseModules,
  ElementScreen,
  ForgotPassword,
  Forum,
  ForumScreen,
  Register,
  Regulamin,
  SignIn,
} from "./screens";

const theme = createTheme({
  typography: {
    fontFamily: "The Next Font",

    fontColor: "white",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ElementContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add the new route */}
            <Route path="/regulamin" element={<Regulamin />} />
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
      </ElementContextProvider>
    </ThemeProvider>
  );
};

export default App;
