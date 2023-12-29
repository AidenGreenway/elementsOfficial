import { Box, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";

import YourContext from "../YourContextFile/YourContext";
import videoSource from "../assets/background.mp4";

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
        backgroundColor: "#00cdff",
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
        position: "relative",
        maxWidth: "600px",
        marginLeft: "210px",
        marginTop: "40px",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          backgroundColor: "none",
          padding: "40px",
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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

        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* Przyciski */}
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
                backgroundColor: element === "water" ? "#00cdff" : "transparent",
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
                backgroundColor: element === "air" ? "grey" : "transparent",
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
      <Typography
        variant="body1"
        sx={{
          marginBottom: "10px",
          marginTop: "-25px",
          fontFamily: "Kalnia, sans-serif",
          fontSize: "14px",
        }}
      >
        CHOOSE ELEMENT
      </Typography>
      {/* Wyświetlanie filmu */}
      <video
        autoPlay
        loop
        muted
        controls
        src={videoSource}
        style={{
          width: "60%",
          height: "auto",
          borderRadius: "8px",
          border: "1px solid white",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          marginTop: "20px",
        }}
      />
    </Box>
  );
};

export default Banner;
