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

export const Forum = () => {
  const { setElementIcon } = useContext(YourContext);
  const [hoveredElement, setHoveredElement] = useState("");
  const navigate = useNavigate();

  const handleElementSelection = (selectedElement) => {
    setElementIcon(selectedElement);
    navigate(`${selectedElement}blog`);
  };

  const buttonStyle = {
    marginRight: "20px",
    borderRadius: "4px",
    // padding: "12px 24px",
    fontSize: "35px",
    color: "#ffffff",
    backgroundColor: "transparent",
    // boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)", // Dodaj efekt cienia
    transition: "transform 0.3s ease, color 0.3s ease", // Rozszerz transition o transform
  };

  const centeredImageStyle = {
    position: "fixed",
    top: "59%",
    left: "57%",
    transform: "translate(-50%, -50%)",
    display: "block",
    maxWidth: "30%",
    maxHeight: "100vh",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
  };

  const textContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "300px",
    margin: "0 auto",
    transition: "transform 0.3s ease", // Dodaj przejście do stylu
  };

  const textHoverStyle = {
    transform: "scale(1.05)",
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
      <Box
        sx={{
          marginRight: "50px",
          marginTop: "100px",
          color: "yellow",
          fontFamily: "The Next Font",
        }}
      >
        <div
          style={{
            ...textContainerStyle,
            ...(hoveredElement === "fire" ? textHoverStyle : {}),
            color: "#D70040",
          }}
        >
          <p>
            "This forum is ablaze with passionate discussions! Users share their fire-driven
            projects, ideas, and creativity." "While the atmosphere is full of energy, it's also
            supportive and understanding for those who feel that fire guides them in life."
          </p>
        </div>

        <Box sx={{ marginTop: "100px", color: "blue", fontFamily: "The Next Font" }}>
          <div
            style={{
              ...textContainerStyle,
              ...(hoveredElement === "water" ? textHoverStyle : {}),
              color: "#00FFFF",
            }}
          >
            <p>
              "Deep waters flow on this forum. Users share their emotions, intuition, and
              experiences related to the water element." "It's a place where people seek
              understanding and empathy in their emotional journeys and discuss the mysteries
              associated with water signs in the zodiac."
            </p>
          </div>
        </Box>
      </Box>

      {["fire", "water", "air", "earth"].map((group) => (
        <Box
          sx={{
            alignContent: "center",
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

      <Box
        sx={{
          marginLeft: "10px",
          marginTop: "100px",
          color: "lightBlue",
          fontFamily: "The Next Font",
        }}
      >
        <div
          style={{
            ...textContainerStyle,
            ...(hoveredElement === "air" ? textHoverStyle : {}),
          }}
        >
          <p>
            "This is an intellectual forum where thoughts are in the air. Users debate, exchange
            ideas, and develop their abstract thinking skills." "It's a space for those who
            appreciate intellectual challenges and want to learn more about the air elements in
            astrology."
          </p>
        </div>

        <Box sx={{ marginTop: "100px", color: "green", fontFamily: "The Next Font" }}>
          <div
            style={{
              ...textContainerStyle,
              ...(hoveredElement === "earth" ? textHoverStyle : {}),
              color: "#7CFC00",
            }}
          >
            <p>
              "Practicality rules on this forum. Users discuss stability, career, and achieving
              goals related to the earth element." "This place is dedicated to those seeking
              practical tips and inspiration for building solid foundations in their lives."
            </p>
          </div>
        </Box>
      </Box>
    </Box>
  );
};
