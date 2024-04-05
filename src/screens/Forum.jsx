import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const hoverStyles = {
  fire: {
    backgroundColor: "black",
    color: "red",
  },
  water: {
    backgroundColor: "black",
    color: "blue",
  },
  air: {
    backgroundColor: "black",
    color: "lightBlue",
  },
  earth: {
    backgroundColor: "black",
    color: "lightGreen",
  },
};

const topicDescriptions = {
  fire: "action and controversion",
  water: "sub zero",
  air: "ideas and sense of humor",
  earth: "stable and peace",
};

export const Forum = () => {
  const [hoveredElement, setHoveredElement] = useState("");
  const [hoveredTopic, setHoveredTopic] = useState("");
  const navigate = useNavigate();

  const handleElementSelection = (selectedElement) => {
    navigate(`${selectedElement}blog`);
  };

  const buttonStyle = {
    marginRight: "35px",
    borderRadius: "4px",
    fontSize: "75px",
    color: "#ffffff",
    backgroundColor: "transparent",
    transition: "transform 0.3s ease, color 0.3s ease",
  };

  return (
    <Box>
      <Box
        className="animate__animated animate__fadeIn"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          // height: "100vh",  // Remove or adjust this line
          color: "#ffffff",
          padding: "20px",
          overflow: "hidden", // Add this line to hide any overflow
        }}
      >
        {["fire", "water", "air", "earth"].map((group) => (
          <Box
            sx={{
              marginLeft: "25px",
            }}
            key={group}
          >
            <Button
              onClick={() => handleElementSelection(group)}
              onMouseEnter={() => {
                setHoveredElement(group);
                setHoveredTopic(topicDescriptions[group]);
              }}
              onMouseLeave={() => {
                setHoveredElement("");
                setHoveredTopic("");
              }}
              sx={{
                ...buttonStyle,
                backgroundColor:
                  hoveredElement === group ? hoverStyles[group].backgroundColor : "black",
                color: hoveredElement === group ? hoverStyles[group].color : "white",
                transform: hoveredElement === group ? "scale(1.05)" : "scale(1)",
              }}
            >
              {`${group.charAt(0).toUpperCase()}${group.slice(1)}`}
            </Button>
          </Box>
        ))}
        {/* Przenieś hoveredTopic poza mapowanie przycisków */}
      </Box>
      <Box
        sx={{
          position: "fixed", // Użyj fixed, aby umieścić w centrum ekranu
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: hoveredTopic ? hoverStyles[hoveredElement].color : "transparent",
          pointerEvents: "none",
          fontSize: "60px",
          zIndex: 9999, // Dodaj z-index, aby wyświetlać nad innymi elementami
          fontFamily: "The Next Font",
        }}
      >
        {hoveredTopic}
      </Box>
    </Box>
  );
};
