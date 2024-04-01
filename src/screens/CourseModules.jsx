import { Box, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import aird from "src/assets/images/aird.png";
import dalle from "src/assets/images/delle1.png";
import earthd from "../diaryImages/earth/earth4.png";
import fired from "../diaryImages/fire/fire4.png";
import waterd from "../diaryImages/water/water3.png";

export const CourseModules = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const navigate = useNavigate();

  const handleElementHover = (element) => {
    setHoveredElement(element);
  };

  const handleElementLeave = () => {
    setHoveredElement(null);
  };

  const elementData = [
    {
      element: "FIRE",
      icon: <img src={fired} alt="Fire Icon" style={{ width: "2rem", marginRight: "10px" }} />,
      description: "LEARN ABOUT / ",
      hoverColor: "#D70040",
      handleClick: () => navigate("fire"),
    },
    {
      element: "WATER",
      icon: <img src={waterd} alt="Water Icon" style={{ width: "2rem", marginRight: "10px" }} />,
      description: "LEARN ABOUT /",
      hoverColor: "#1434A4",
      handleClick: () => navigate("water"),
    },
    {
      element: "AIR",
      icon: <img src={aird} alt="Air Icon" style={{ width: "2rem", marginRight: "10px" }} />,
      description: "LEARN ABOUT /",
      hoverColor: "#ADD8E6",
      handleClick: () => navigate("air"),
    },
    {
      element: "EARTH",
      icon: <img src={earthd} alt="Earth Icon" style={{ width: "2rem", marginRight: "10px" }} />,
      description: "LEARN ABOUT  /",
      hoverColor: "#3cb371",
      handleClick: () => navigate("earth"),
    },
  ];

  return (
    <Box
      className="animate__animated animate__zoomIn"
      overflow="hidden"
      sx={{ margin: 0, padding: 0 }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "white",
          marginBottom: "20px",
          fontFamily: "The Next Font",
          fontColor: "white",
        }}
      >
        COURSE - MODULES
      </Typography>

      <List component="nav" aria-label="course modules">
        {elementData.map(({ element, icon, description, hoverColor, handleClick }) => (
          <ListItem
            key={element}
            onMouseEnter={() => handleElementHover(element)}
            onMouseLeave={handleElementLeave}
            onClick={handleClick}
            sx={{
              display: "flex",
              cursor: "pointer",
              boxShadow: hoveredElement === element ? `0 0 10px ${hoverColor}` : "none",
            }}
          >
            <Grid container alignItems="center">
              <Grid item>{hoveredElement === element ? null : icon}</Grid>
              <Grid item>
                {hoveredElement === element && (
                  <ListItemText primary={description} sx={{ color: "#fff", marginLeft: "10px" }} />
                )}
              </Grid>
              <Grid item>
                <Typography sx={{ color: "white" }}>{element}</Typography>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
      <Typography
        sx={{
          color: "grey",
          marginTop: "20px",
          fontFamily: "The Next Font",
          fontSize: "10x",
          textAlign: "center",
        }}
      >
        Here you can get knowledge about each element, also you can choose one position from every
        section of your element to complete your profile!
      </Typography>
      <img
        src={dalle}
        style={{
          position: "sticky",
          width: "45%",
          height: "auto",
          marginRight: "50px",
        }}
      />
    </Box>
  );
};
