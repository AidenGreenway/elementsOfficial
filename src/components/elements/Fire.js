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
              }}
              onClick={handleChangeText}
            >
              {texts[currentTextIndex]}
            </Typography>
          </Box>
        </AccordionSummary>

        {isFirstSectionVisible && (
          <AccordionDetails>
            <Typography
              sx={{ maxWidth: "90%", marginBottom: "20px", color: "white", fontSize: "16px" }}
              align="left"
            >
              An individual associated with the element of fire embodies passion, energy, and
              creativity. They are dynamic, confident, and often seek inspiration and excitement.
              Fire individuals are driven by their desires, and they possess a natural charisma that
              attracts others. Their strength lies in their ability to initiate action, express
              themselves boldly, and bring warmth to those around them. They thrive in environments
              that allow their creativity to flourish.
            </Typography>
          </AccordionDetails>
        )}
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="fire-zodiac-signs-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="fire-zodiac-signs-content">
          <Typography sx={{ color: "#FF4500" }}>Zodiac Signs:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "white" }}>
            <ListItem>
              <ListItemText primary="Aries (March 21 - April 19): Aries is a Fire sign known for its enthusiasm, courage, and pioneering spirit. Arians are natural leaders, driven by a desire for challenges and new experiences." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Leo (July 23 - August 22): Leo is a Fire sign characterized by its confidence, generosity, and leadership qualities. Leos seek recognition and enjoy expressing their creativity and passion." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Sagittarius (November 22 - December 21): Sagittarius, the Archer, is a Fire sign associated with exploration and optimism. Sagittarians are adventurous, philosophical, and enjoy expanding their horizons." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel2a-header-fire">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content-fire">
          <Typography sx={{ color: "#FF4500" }}>Strengths:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "white" }}>
            <ListItem>
              <ListItemText primary="Passion and enthusiasm: A zest for life and creative pursuits." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Courage and boldness: Willingness to take risks." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Leadership qualities: Natural ability to inspire and guide." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Creativity and expressiveness: A flair for self-expression." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Warmth and charisma: A magnetic and inviting presence." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel3a-header-fire">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content-fire">
          <Typography sx={{ color: "#FF4500" }}>Weaknesses:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "white" }}>
            <ListItem>
              <ListItemText primary="Impulsiveness: Acting without thorough consideration." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Stubbornness and impatience in dealing with obstacles." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Risk of burnout due to excessive energy expenditure." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Overconfidence: Underestimating challenges." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Potential for conflicts arising from strong opinions." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel4a-header-fire">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content-fire">
          <Typography sx={{ color: "#FF4500" }}>Exercises Strengthening Fire Traits:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "white" }}>
            <ListItem>
              <ListItemText primary="Engaging in creative activities: Art, music, or writing." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Physical exercises to channel energy positively." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Setting and pursuing ambitious goals." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Mindfulness and meditation for balance." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Developing patience in decision-making." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel5a-header-fire">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content-fire">
          <Typography variant="body1" sx={{ color: "#FF4500" }}>
            Key Strategies for Harmony with Fire:
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "white" }}>
            <ListItem>
              <ListItemText primary="Balancing passion with practicality." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Embracing challenges as opportunities for growth." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Maintaining a healthy work-life balance." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Fostering humility and openness to feedback." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
