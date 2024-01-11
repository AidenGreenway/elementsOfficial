import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import fired from "../diaryImages/fire/fire4.jpg";
import waterd from "../diaryImages/water/water3.png";
import aird from "../images/aird.png";
import earthd from "../images/earthd.png";

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
      description: "LEARN ABOUT ",
      hoverColor: "#D70040",
      handleClick: () => navigate("fire"),
    },
    {
      element: "WATER",
      icon: <img src={waterd} alt="Water Icon" style={{ width: "2rem", marginRight: "10px" }} />,
      description: "LEARN ABOUT ",
      hoverColor: "#00bfff",
      handleClick: () => navigate("water"),
    },
    {
      element: "AIR",
      icon: <img src={aird} alt="Air Icon" style={{ width: "2rem", marginRight: "10px" }} />,
      description: "LEARN ABOUT ",
      hoverColor: "#808080",
      handleClick: () => navigate("air"),
    },
    {
      element: "EARTH",
      icon: <img src={earthd} alt="Earth Icon" style={{ width: "2rem", marginRight: "10px" }} />,
      description: "LEARN ABOUT  ",
      hoverColor: "#3cb371",
      handleClick: () => navigate("earth"),
    },
  ];

  return (
    <div className="course-modules">
      <Typography
        variant="h3"
        sx={{ color: "white", marginBottom: "20px", fontFamily: "The Next Font" }}
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
              backgroundColor: hoveredElement === element ? hoverColor : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "5px",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <Grid container alignItems="center">
              <Grid item>
                {hoveredElement === element ? null : icon} {/* Ukryj ikonę, jeśli najechano */}
              </Grid>
              <Grid item>
                {hoveredElement === element && (
                  <ListItemText primary={description} sx={{ color: "#fff", marginLeft: "10px" }} />
                )}
              </Grid>
              <Grid item>
                {/* Button
                  onClick={handleClick}
                  variant="contained"
                  sx={{
                    color: hoveredElement === element ? hoverColor : "#fff",
                    marginLeft: "auto",
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    backgroundColor: "#000",
                    "&:hover": {
                      backgroundColor: hoveredElement === element ? "#000" : "#000",
                    },
                  }}
                >
                  open
                </Button> */}
              </Grid>{" "}
              /<Typography sx={{ color: "white" }}>{element}</Typography>
            </Grid>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
