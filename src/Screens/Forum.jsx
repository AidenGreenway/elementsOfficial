import { Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import YourContext from "../ElementContext/YourContext";
import dalle from "../Images/forumdall.png";

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
      color: "yellow", // Dodajemy kolor tekstu po najechaniu
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
      color: "#7CFC00",
    },
  };

  const centeredImageStyle = {
    position: "fixed",
    top: "59%", // Wyśrodkowanie poziome na połowie ekranu
    left: "57%", // Wyśrodkowanie pionowe na połowie ekranu
    transform: "translate(-50%, -50%)", // Przesunięcie o połowę szerokości i wysokości obrazka
    display: "block",
    maxWidth: "30%", // Maksymalna szerokość obrazka, aby uniknąć wyjścia poza ekran
    maxHeight: "100vh", // Maksymalna wysokość obrazka równa wysokości ekranu
  };

  const imageStyle = {
    width: "100%", // Dostosuj szerokość obrazka do szerokości kontenera
    height: "auto", // Ustaw wysokość jako "auto" w celu zachowania proporcji
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
          >
            {`${group.charAt(0).toUpperCase()}${group.slice(1)}`}
          </Button>
        </Box>
      ))}

      <div style={centeredImageStyle}>
        <img
          src={dalle}
          style={imageStyle} // Ustawienie stylu obrazka
        />
      </div>
    </Box>
  );
};
