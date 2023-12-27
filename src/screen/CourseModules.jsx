import CloudIcon from "@mui/icons-material/Cloud";
import TerrainIcon from "@mui/icons-material/Terrain"; // Poprzednia ikona ziemi
import WavesIconOutlined from "@mui/icons-material/WavesOutlined";
import WhatshotIconOutlined from "@mui/icons-material/WhatshotOutlined";
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      icon: <WhatshotIconOutlined sx={{ fontSize: "2rem", color: "red", marginRight: "10px" }} />,
      description: "LEARN ABOUT ",
      hoverColor: "#ff6347",
      handleClick: () => navigate("fire"),
    },
    {
      element: "WATER",
      icon: <WavesIconOutlined sx={{ fontSize: "2rem", color: "blue", marginRight: "10px" }} />,
      description: "LEARN ABOUT ",
      hoverColor: "#00bfff",
      handleClick: () => navigate("water"),
    },
    {
      element: "AIR",
      icon: <CloudIcon sx={{ fontSize: "2rem", color: "white", marginRight: "10px" }} />, // Ikona chmury jako symbol wiatru/powietrza
      description: "LEARN ABOUT ",
      hoverColor: "#808080",
      handleClick: () => navigate("air"),
    },
    {
      element: "EARTH",
      icon: <TerrainIcon sx={{ fontSize: "2rem", color: "green", marginRight: "10px" }} />, // Poprzednia ikona ziemi
      description: "LEARN ABOUT  ",
      hoverColor: "#3cb371",
      handleClick: () => navigate("earth"),
    },
  ];

  return (
    <div className="course-modules">
      <Typography
        variant="h2"
        sx={{ color: "white", marginBottom: "20px", fontFamily: "Kalnia, sans-serif" }}
      >
        Course Modules
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
              <Grid item>{icon}</Grid>
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
