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
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Air = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);

  const location = useLocation();

  const texts = ["read me", "hide"];

  const handleChangeText = () => {
    const newIndex = (currentTextIndex + 1) % texts.length;
    setCurrentTextIndex(newIndex);
    setIsFirstSectionVisible(newIndex === 1);
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

  const listItemStyle = {
    color: "lightBlue",
    fontSize: "18px",
    transition: "font-size 0.25s ease",
    "&:hover": {
      fontSize: "20px",
      color: "grey",
    },
  };

  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Accordion
        sx={{ backgroundColor: "transparent" }}
        id="panel1a-header-air"
        expanded={isFirstSectionVisible}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content-air">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography
              className="animate__animated animate__bounceInDown"
              sx={{ fontSize: "220px", color: "white", textAlign: "left", marginTop: "-7%" }}
            >
              air
            </Typography>
            <Box sx={{ marginTop: "-17%", marginLeft: "-42%" }}>
              <Typography
                key={currentTextIndex}
                className={`animate__animated animate__backInLeft ${texts[
                  currentTextIndex
                ].toLowerCase()}`}
                sx={{
                  color: "white",
                  fontSize: "16px",
                  marginTop: "-10%",
                  marginLeft: "-80%",
                  cursor: "pointer",
                  transition: "font-size 0.25s ease", // Smooth transition over 0.25 seconds
                  "&:hover": {
                    fontSize: "18px", // Adjust the larger font size on hover
                    color: "grey",
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
              sx={{ maxWidth: "90%", marginBottom: "20px", color: "lightBlue", fontSize: "16px" }}
              align="left"
            >
              An individual associated with the element of air is characterized by intellect,
              curiosity, and adaptability. They are quick thinkers, communicative, and enjoy
              socializing. Air individuals are often open-minded, objective, and value mental
              stimulation. They possess the ability to connect with diverse perspectives and thrive
              on change. Their strength lies in their ability to embrace new ideas, communicate
              effectively, and foster harmonious connections.
            </Typography>
          </AccordionDetails>
        )}
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="air-zodiac-signs-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="air-zodiac-signs-content">
          <Typography sx={listItemStyle}>Zodiac Signs:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "white" }}>
            <ListItem>
              <ListItemText primary="Gemini (May 21 - June 20): Gemini is an Air sign known for its versatility, curiosity, and communication skills. Geminis are adaptable, sociable, and thrive in dynamic environments." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Libra (September 23 - October 22): Libra is an Air sign characterized by its sense of balance, harmony, and social grace. Librans value relationships, beauty, and diplomatic solutions." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Aquarius (January 20 - February 18): Aquarius, the Water-Bearer, is an Air sign associated with innovation, originality, and humanitarianism. Aquarians are forward-thinking and enjoy exploring unconventional ideas." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel2a-header-air">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content-air">
          <Typography sx={listItemStyle}>Strengths:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "white" }}>
            <ListItem>
              <ListItemText primary="Intellect and curiosity: Quick thinking and a thirst for knowledge." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Adaptability: Ease in adjusting to new situations." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Communication skills: Ability to express ideas effectively." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Open-mindedness: Embracing diverse perspectives." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Harmonious connections: Fostering positive relationships." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel3a-header-air">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content-air">
          <Typography sx={listItemStyle}>Weaknesses:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "white" }}>
            <ListItem>
              <ListItemText primary="Restlessness: Difficulty staying focused on one task." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Indecisiveness: Weighing multiple options without choosing." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Overthinking: Analyzing situations excessively." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Detachment: Struggling with emotional expression." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Inconsistency: Difficulty maintaining commitments." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel4a-header-air">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content-air">
          <Typography sx={listItemStyle}>Exercises Strengthening Air Traits:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "white" }}>
            <ListItem>
              <ListItemText primary="Mindfulness meditation to enhance focus." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Engaging in diverse social activities." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Developing decision-making skills." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Practicing emotional expression." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Balancing intellectual pursuits with relaxation." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel5a-header-air">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content-air">
          <Typography variant="body1" sx={listItemStyle}>
            Key Strategies for Harmony with Air:
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "white" }}>
            <ListItem>
              <ListItemText primary="Embrace change and variety in life." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Practice effective communication skills." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Balance intellectual pursuits with emotional connection." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Cultivate patience in decision-making." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
