import { Box, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import YourContext from "../YourContextFile/YourContext";

export const Forum = () => {
  const { setElementIcon } = useContext(YourContext);
  const [description, setDescription] = useState("");
  const [element, setElement] = useState("");
  const navigate = useNavigate();

  const handleGroupHover = (group) => {
    switch (group) {
      case "fire":
        setDescription("GOING HARD");
        break;
      case "water":
        setDescription("EMPATHY AND UNDERSTANDING");
        break;
      case "air":
        setDescription("JOY AND AWARENESS");
        break;
      case "earth":
        setDescription("TOUGH SHIT");
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
        // color: "black",
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
        //color: "black",
      },
    },
    earth: {
      "&:hover": {
        backgroundColor: "#00ff7f",
        //color: "black",
      },
    },
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
        <Box sx={{ marginRight: "20px" }} key={group}>
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
        <Typography
          variant="h5"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: "20px",
            borderRadius: "5px",
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};
