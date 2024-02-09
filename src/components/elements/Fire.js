import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import "animate.css/animate.min.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Fire = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);
  const listItemStyle = {
    color: "#FF4500",
    fontSize: "18px",
    transition: "font-size 0.25s ease",
    "&:hover": {
      fontSize: "20px",
      color: "#A80000",
    },
  };
  const listItemStyle1 = {
    color: "#FF8314",
    fontSize: "18px",
  };
  const location = useLocation();

  const texts = ["read me", "hide"];

  const handleChangeText = () => {
    const newIndex = (currentTextIndex + 1) % texts.length;
    setCurrentTextIndex(newIndex);

    if (newIndex === 1) {
      setIsFirstSectionVisible(true);
    } else {
      setIsFirstSectionVisible(false);
    }
  };

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  const content = `An individual associated with the element of fire embodies passion, energy, and
  creativity. They are dynamic, confident, and often seek inspiration and excitement.
  Fire individuals are driven by their desires, and they possess a natural charisma that
  attracts others. Their strength lies in their ability to initiate action, express
  themselves boldly, and bring warmth to those around them. They thrive in environments
  that allow their creativity to flourish.`;

  const zodiacSigns = [
    "Aries (March 21 - April 19): Aries is a Fire sign known for its enthusiasm, courage, and pioneering spirit. Arians are natural leaders, driven by a desire for challenges and new experiences.",
    "Leo (July 23 - August 22): Leo is a Fire sign characterized by its confidence, generosity, and leadership qualities. Leos seek recognition and enjoy expressing their creativity and passion.",
    "Sagittarius (November 22 - December 21): Sagittarius, the Archer, is a Fire sign associated with exploration and optimism. Sagittarians are adventurous, philosophical, and enjoy expanding their horizons.",
  ];

  const strengths = [
    "Passion and energy: Enthusiasm and dynamism.",
    "Leadership qualities: Confidence and generosity.",
    "Creativity and expression: Bold self-expression.",
    "Charisma: Natural ability to attract and influence others.",
    "Initiation of action: Proactive and goal-oriented.",
  ];

  const weaknesses = [
    "Impulsivity: Tendency to act without careful consideration.",
    "Short-tempered: Quick to anger in challenging situations.",
    "Restlessness: Desire for constant stimulation and change.",
    "Overly competitive: Striving for dominance in various situations.",
    "Difficulty with routine tasks: Thriving in dynamic environments.",
  ];

  const exercises = [
    "Practicing patience and mindfulness.",
    "Developing strategic thinking and planning.",
    "Cultivating emotional intelligence and self-awareness.",
    "Balancing passion with practicality.",
    "Learning to appreciate and navigate routine tasks.",
  ];

  const strategies = [
    "Channeling passion into constructive endeavors.",
    "Balancing assertiveness with empathy.",
    "Finding creative outlets for self-expression.",
    "Cultivating a sense of adventure and curiosity.",
  ];

  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Accordion
        sx={{ backgroundColor: "transparent" }}
        id="panel1a-header-fire"
        expanded={isFirstSectionVisible}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content-fire">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography
              className="animate__animated animate__bounceInDown"
              sx={{ fontSize: "220px", color: "#FF4500", textAlign: "", marginTop: "-7%" }}
            >
              fire
            </Typography>
            <Box sx={{ marginTop: "-14%", marginLeft: "-50%" }}>
              <Typography
                key={currentTextIndex}
                className={`animate__animated animate__backInLeft ${texts[
                  currentTextIndex
                ].toLowerCase()}`}
                sx={{
                  color: "white",
                  fontSize: "18px",
                  marginTop: "-10%",
                  marginLeft: "-80%",
                  cursor: "pointer",
                  transition: "font-size 0.25s ease", // Smooth transition over 0.25 seconds
                  "&:hover": {
                    fontSize: "20px", // Adjust the larger font size on hover
                    color: "#A80000",
                  },
                }}
                onClick={handleChangeText}
              >
                {texts[currentTextIndex]}
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>

        {isFirstSectionVisible && (
          <AccordionDetails>
            <Typography
              sx={{ maxWidth: "90%", marginBottom: "20px", color: "white", fontSize: "16px" }}
              align="left"
            >
              {content}
            </Typography>
          </AccordionDetails>
        )}
      </Accordion>
      <Accordion sx={{ backgroundColor: "transparent" }} id="fire-zodiac-signs-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="fire-zodiac-signs-content">
          <Typography sx={listItemStyle}>Zodiac Signs:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={listItemStyle1}>
            {zodiacSigns.map((sign, index) => (
              <ListItem key={index}>
                <ListItemText primary={sign} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "transparent" }} id="panel2a-header-fire">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content-fire">
          <Typography sx={listItemStyle}>Strengths:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={listItemStyle1}>
            {strengths.map((strength, index) => (
              <ListItem key={index}>
                <ListItemText primary={strength} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel3a-header-fire">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content-fire">
          <Typography sx={listItemStyle}>Weaknesses:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={listItemStyle1}>
            {weaknesses.map((weakness, index) => (
              <ListItem key={index}>
                <ListItemText primary={weakness} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel4a-header-fire">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content-fire">
          <Typography sx={listItemStyle}>Exercises Strengthening Fire Traits:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={listItemStyle1}>
            {exercises.map((exercise, index) => (
              <ListItem key={index}>
                <ListItemText primary={exercise} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel5a-header-fire">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content-fire">
          <Typography variant="body1" sx={listItemStyle}>
            Key Strategies for Harmony with Fire:
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={listItemStyle1}>
            {strategies.map((strategy, index) => (
              <ListItem key={index}>
                <ListItemText primary={strategy} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
