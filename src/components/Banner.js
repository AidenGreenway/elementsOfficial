import { Box, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";

import YourContext from "../YourContextFile/YourContext";

const Banner = () => {
  const { setElementIcon } = useContext(YourContext);
  const [element, setElement] = useState("");

  const handleElementSelection = (selectedElement) => {
    setElement(selectedElement);
    setElementIcon(selectedElement);
  };

  const buttonStyle = {
    marginRight: "20px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "1px solid #fff",
    borderRadius: "4px",
    padding: "8px 16px",
    transition: "background-color 0.3s, color 0.3s",
  };

  const hoverStyles = {
    fire: {
      "&:hover": {
        backgroundColor: "#ff6347",
        color: "#fff",
      },
    },
    water: {
      "&:hover": {
        backgroundColor: "#6495ed",
        color: "#fff",
      },
    },
    air: {
      "&:hover": {
        backgroundColor: "grey",
        color: "#fff",
      },
    },
    earth: {
      "&:hover": {
        backgroundColor: "#8fbc8f",
        color: "#fff",
      },
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "none",
        padding: "40px",
        textAlign: "center",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        marginLeft: "210px",
        marginTop: "40px",
        color: "#fff",
      }}
    >
      <Typography
        sx={{
          marginBottom: "30px",
          fontFamily: "Kalnia, sans-serif",
          fontSize: "40px",
        }}
      >
        ELEMENTS
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "30px",
          fontFamily: "Kalnia, sans-serif",
          fontSize: "1.2rem",
        }}
      >
        in built
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginRight: "20px" }}>
          <Button
            onClick={() => handleElementSelection("fire")}
            sx={{
              ...buttonStyle,
              ...hoverStyles["fire"],
              color: element === "fire" ? "#fff" : "#fff",
              backgroundColor: element === "fire" ? "#ff6347" : "transparent",
            }}
          >
            Fire
          </Button>
        </div>
        <div style={{ marginRight: "20px" }}>
          <Button
            onClick={() => handleElementSelection("water")}
            sx={{
              ...buttonStyle,
              ...hoverStyles["water"],
              color: element === "water" ? "#fff" : "#fff",
              backgroundColor: element === "water" ? "#6495ed" : "transparent",
            }}
          >
            Water
          </Button>
        </div>
        <div style={{ marginRight: "20px" }}>
          <Button
            onClick={() => handleElementSelection("air")}
            sx={{
              ...buttonStyle,
              ...hoverStyles["air"],
              color: element === "air" ? "#fff" : "#fff",
              backgroundColor: element === "air" ? "#87ceeb" : "transparent",
            }}
          >
            Air
          </Button>
        </div>
        <div>
          <Button
            onClick={() => handleElementSelection("earth")}
            sx={{
              ...buttonStyle,
              ...hoverStyles["earth"],
              color: element === "earth" ? "#fff" : "#fff",
              backgroundColor: element === "earth" ? "#8fbc8f" : "transparent",
            }}
          >
            Earth
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default Banner;
