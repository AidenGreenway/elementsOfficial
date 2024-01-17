import { Button, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import airg from "../Assets/airg.gif";
import earthg from "../Assets/earthg.gif";
import fireg from "../Assets/fireg.gif";
import waterg from "../Assets/waterg.gif";

export const Challenges = () => {
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(false);
  const [hoveredButton, setHoveredButton] = useState("");
  const [currentGif, setCurrentGif] = useState("");

  const handleClick = (destination) => {
    navigate(destination);
  };

  const handleButtonHover = (name) => {
    setHoveredButton(name);

    // Wybór odpowiedniego gifa na podstawie nazwy przycisku
    switch (name) {
      case "fire":
        setCurrentGif(fireg);
        break;
      case "water":
        setCurrentGif(waterg);
        break;
      case "air":
        setCurrentGif(airg);
        break;
      case "earth":
        setCurrentGif(earthg);
        break;
      default:
        setCurrentGif("");
        break;
    }

    setShowAnimation(true);
  };

  const handleButtonLeave = () => {
    setShowAnimation(false);
    setHoveredButton("");
  };

  const challengesData = [
    {
      name: "fire",
      component: "FireChallenge",
      color: "#D70040",
      destination: "fire",
    },
    {
      name: "water",
      component: "WaterChallenge",
      color: "darkBlue",
      destination: "water",
    },
    {
      name: "air",
      component: "AirChallenge",
      color: "lightBlue",
      destination: "air",
    },
    {
      name: "earth",
      component: "EarthChallenge",
      color: "#00ff7f",
      destination: "earth",
    },
    // Dodaj inne wyzwania tutaj
  ];

  return (
    <div style={{ color: "white", display: "flex", justifyContent: "space-between" }}>
      <div>
        <Typography variant="h3" style={{ color: "white", marginBottom: "20px" }}>
          CHALLENGES
        </Typography>
        <List>
          {challengesData.map((challenge, index) => (
            <div key={index}>
              <ListItem>
                <ListItemText
                  primary={
                    <Button
                      variant="text"
                      style={{
                        color: hoveredButton === challenge.name ? challenge.color : "inherit",
                        fontSize: "50px",
                      }}
                      onClick={() => handleClick(challenge.destination)}
                      onMouseEnter={() => handleButtonHover(challenge.name)}
                      onMouseLeave={handleButtonLeave}
                    >
                      {challenge.name}
                    </Button>
                  }
                />
              </ListItem>
              {index !== challengesData.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </div>
      {showAnimation && (
        <div style={{ position: "fixed", top: "50px", right: "50px" }}>
          <img src={currentGif} alt="Animation" style={{ width: "600px", height: "600px" }} />
        </div>
      )}
    </div>
  );
};
