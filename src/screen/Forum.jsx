import { Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import YourContext from "../YourContextFile/YourContext";
import airg from "../assets/airg.gif";
import earthg from "../assets/earthg.gif";
import fireg from "../assets/fireg.gif";
import waterg from "../assets/waterg.gif";

export const Forum = () => {
  const { setElementIcon } = useContext(YourContext);
  const [description, setDescription] = useState("");
  const [element, setElement] = useState("");
  const navigate = useNavigate();

  const handleGroupHover = (group) => {
    switch (group) {
      case "fire":
        setDescription(fireg);
        break;
      case "water":
        setDescription(waterg);
        break;
      case "air":
        setDescription(airg);
        break;
      case "earth":
        setDescription(earthg);
        break;
      default:
        setDescription("");
        break;
    }
  };

  const handleElementSelection = (selectedElement) => {
    setElement(selectedElement);
    setElementIcon(selectedElement);
    navigate(`${selectedElement}blog`);
  };

  const buttonStyle = {
    marginRight: "20px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "1px solid #fff",
    borderRadius: "4px",
    padding: "12px 24px",
    transition: "background-color 0.3s, color 0.3s",
    fontSize: "1.2rem",
  };

  const hoverStyles = {
    fire: {
      "&:hover": {
        backgroundColor: "#ff5a00",
      },
    },
    water: {
      "&:hover": {
        backgroundColor: "#00cdff",
        color: "white",
      },
    },
    air: {
      "&:hover": {
        backgroundColor: "grey",
      },
    },
    earth: {
      "&:hover": {
        backgroundColor: "#00ff7f",
      },
    },
  };

  const centeredImageStyle = {
    position: "fixed",
    top: "55%",
    left: "55%",
    transform: "translate(-50%, -50%)",
    display: description ? "block" : "none",
  };

  const imageWidth = "450px"; // Ustal stałą szerokość dla obrazków gif

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
              ...hoverStyles[group],
              color: element === group ? "#fff" : "#fff",
              backgroundColor:
                element === group ? hoverStyles[group]["&:hover"].backgroundColor : "transparent",
            }}
            onMouseEnter={() => handleGroupHover(group)}
            onMouseLeave={() => setDescription("")}
          >
            {`${group.charAt(0).toUpperCase()}${group.slice(1)}`}
          </Button>
        </Box>
      ))}
      {description && (
        <div style={centeredImageStyle}>
          <img src={description} alt={element} width={imageWidth} />
        </div>
      )}
    </Box>
  );
};
