import { Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import dalle from "src/assets/images/forumdall.png";
import YourContext from "../elementContext/ElementContext";

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

const centeredImageStyle = {
  position: "fixed",
  top: "51%",
  left: "53.5%",
  transform: "translate(-50%, -50%)",
  display: "block",
  maxWidth: "30.5%",
  maxHeight: "100vh",
};

const imageStyle = {
  width: "75%",
  height: "auto",
};

export const Forum = () => {
  const { setElementIcon } = useContext(YourContext);
  const [hoveredElement, setHoveredElement] = useState("");
  const navigate = useNavigate();

  const handleElementSelection = (selectedElement) => {
    setElementIcon(selectedElement);
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
            marginLeft: "25px",
          }}
          key={group}
        >
          <Button
            onClick={() => handleElementSelection(group)}
            onMouseEnter={() => setHoveredElement(group)}
            onMouseLeave={() => setHoveredElement("")}
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

      <div style={centeredImageStyle}>
        <img alt="" src={dalle} style={imageStyle} />
      </div>
    </Box>
  );
};
