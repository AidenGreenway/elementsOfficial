import { Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import YourContext from "../YourContextFile/YourContext";
import dalle from "../images/delle1.png";

export const Forum = () => {
  const { setElementIcon } = useContext(YourContext);
  const [element, setElement] = useState("");
  const [hoveredElement, setHoveredElement] = useState(""); // Dodajemy stan do śledzenia najechanego elementu
  const navigate = useNavigate();

  const handleElementSelection = (selectedElement) => {
    setElement(selectedElement);
    setElementIcon(selectedElement);
    navigate(`${selectedElement}blog`);
  };

  const buttonStyle = {
    marginRight: "20px",
    borderRadius: "4px",
    padding: "12px 24px",
    fontSize: "1.2rem",
  };

  const hoverStyles = {
    fire: {
      backgroundColor: "#D70040",
      color: "#4A0404", // Dodajemy kolor tekstu po najechaniu
    },
    water: {
      backgroundColor: "#1434A4",
      color: "#00FFFF",
    },
    air: {
      backgroundColor: "#ADD8E6",
      color: "white",
    },
    earth: {
      backgroundColor: "#355E3B",
      color: "grey",
    },
  };

  const centeredImageStyle = {
    position: "fixed",
    top: "55%",
    left: "55%",
    transform: "translate(-50%, -50%)",
    display: "block",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        color: "#ffffff",
        padding: "20px",
      }}
    >
      {["fire", "water", "air", "earth"].map((group) => (
        <Box
          sx={{
            marginRight: "20px",
          }}
          key={group}
        >
          <Button
            onClick={() => handleElementSelection(group)}
            sx={{
              ...buttonStyle,
              ...(hoveredElement === group ? {} : hoverStyles[group]), // Ustawiamy odpowiedni styl na podstawie stanu najechanego elementu
            }}
            // onMouseEnter={() => handleHover(group)} // Ustawiamy onMouseEnter do obsługi hover
          >
            {`${group.charAt(0).toUpperCase()}${group.slice(1)}`}
          </Button>
        </Box>
      ))}

      <div style={centeredImageStyle}>
        <img
          src={dalle}
          style={{
            width: "150%",
            height: "auto",
            marginLeft: "-170px",
          }}
        />
      </div>
    </Box>
  );
};
