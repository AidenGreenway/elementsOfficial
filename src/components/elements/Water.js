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

export const Water = () => {
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
        id="water-panel1a-header"
        expanded={isFirstSectionVisible}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="water-panel1a-content">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography
              className="animate__animated animate__bounceInDown"
              sx={{ fontSize: "220px", color: "#0074cc", textAlign: "", marginTop: "-7%" }}
            >
              water
            </Typography>
            <Typography
              key={currentTextIndex}
              className={`animate__animated animate__backInLeft ${texts[
                currentTextIndex
              ].toLowerCase()}`}
              sx={{
                color: "white",
                fontSize: "18px",
                marginTop: "-8%",
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
              sx={{ maxWidth: "90%", marginBottom: "20px", color: "#66b2ff", fontSize: "16px" }}
              align="left"
            >
              An individual associated with the element of water embodies fluidity, intuition, and
              emotional depth. They are often empathetic, adaptable, and attuned to the subtle
              nuances of their surroundings. Water personalities are known for their ability to
              navigate through the complexities of emotions and connect with others on a profound
              level. Like a flowing river, they possess a natural grace and the capacity to heal and
              nurture. Individuals aligned with the water element may also have a strong sense of
              creativity and imagination.
            </Typography>
          </AccordionDetails>
        )}
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="water-zodiac-signs-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="water-zodiac-signs-content"
        >
          <Typography sx={{ color: "#0074cc" }}>Zodiac Signs:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#66b2ff" }}>
            <ListItem>
              <ListItemText primary="Cancer (June 21 - July 22): Cancer, the Crab, is a Water sign known for its emotional depth and nurturing qualities. Cancers are intuitive, empathetic, and often have a strong connection to their family and home." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Scorpio (October 23 - November 21): Scorpio is a Water sign characterized by its intensity and passion. Scorpios are often resourceful, determined, and have a keen ability to understand the hidden aspects of life." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Pisces (February 19 - March 20): Pisces, the Fish, is a Water sign associated with creativity and compassion. Pisceans are imaginative, sensitive, and have a deep connection to the spiritual and artistic realms." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="water-panel2a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="water-panel2a-content">
          <Typography sx={{ color: "#0074cc" }}>Strengths:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#66b2ff" }}>
            <ListItem>
              <ListItemText primary="Empathy and emotional intelligence: Ability to understand and connect with others on a deep level." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Adaptability and fluidity: Capacity to navigate through changing circumstances." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Intuition and sensitivity: Attuned to subtle nuances and emotions." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Creativity and imagination: Strong connection to artistic and spiritual realms." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Nurturing qualities: Ability to heal and support others." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="water-panel3a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="water-panel3a-content">
          <Typography sx={{ color: "#0074cc" }}>Weaknesses:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#66b2ff" }}>
            <ListItem>
              <ListItemText primary="Overly emotional: Tendency to be overwhelmed by emotions." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Vulnerability to mood swings: Sensitivity to external influences." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Avoidance of confrontation: Difficulty dealing with conflict." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Overly idealistic: Struggle with accepting harsh realities." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Tendency to be easily influenced by others." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="water-panel4a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="water-panel4a-content">
          <Typography sx={{ color: "#0074cc" }}>Exercises Enhancing Water Traits:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#66b2ff" }}>
            <ListItem>
              <ListItemText primary="Practicing mindfulness and emotional awareness." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Engaging in creative activities: Art, music, writing." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Developing resilience and coping mechanisms for emotional challenges." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Exploring nature and connecting with natural elements." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Participating in activities that promote self-care and relaxation." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="water-panel5a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="water-panel5a-content">
          <Typography variant="body1" sx={{ color: "#0074cc" }}>
            Key Strategies for Harmony with Water:
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#66b2ff" }}>
            <ListItem>
              <ListItemText primary="Cultivating emotional balance and self-awareness." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Creating a nurturing and supportive environment." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Expressing creativity and embracing artistic outlets." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Building healthy boundaries while maintaining empathy." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
