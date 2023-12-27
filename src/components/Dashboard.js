import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

export const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        //color: "white",
      }}
    >
      <NavBar />

      <Box
        component="main"
        sx={{
          width: "calc(100vw - 240px)",
          paddingLeft: "240px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
