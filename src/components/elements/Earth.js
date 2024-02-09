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

export const Earth = () => {
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
        id="panel1a-header"
        expanded={isFirstSectionVisible}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography
              className="animate__animated animate__bounceInDown"
              sx={{ fontSize: "220px", color: "#00ff7f", textAlign: "", marginTop: "-7%" }}
            >
              earth
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
              sx={{ maxWidth: "90%", marginBottom: "20px", color: "#aaf0c0", fontSize: "16px" }}
              align="left"
            >
              An individual associated with the element of earth exudes calmness, stability, and
              deep internal strength. It's someone immersed in reality, practical, with strong moral
              foundations and common sense. They are characterized by perseverance, patience, and an
              ability to feel connected to the surrounding world. An earthy person is practical, has
              a sense of reality, enabling them to achieve goals step by step. Their strength lies
              in stability, making them a pillar of support for others. Individuals associated with
              the earth element need time to build trust and bonds with their surroundings, but once
              they do, their loyalty and dedication are unwavering.
            </Typography>
          </AccordionDetails>
        )}
      </Accordion>
      <Accordion sx={{ backgroundColor: "transparent" }} id="earth-zodiac-signs-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="earth-zodiac-signs-content"
        >
          <Typography sx={{ color: "#00ff7f" }}>Zodiac Signs:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#aaf0c0" }}>
            <ListItem>
              <ListItemText primary="Taurus (April 20 - May 20): Taurus is an Earth sign known for its practical and grounded nature. Taureans are reliable, patient, and often have a strong sense of determination. They appreciate the beauty of the material world." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Virgo (August 23 - September 22): Virgo is an Earth sign characterized by its attention to detail and analytical mindset. Virgos are often hardworking, reliable, and have a practical approach to problem-solving. They value precision and order." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Capricorn (December 22 - January 19): Capricorn, the Sea-Goat, is an Earth sign associated with ambition and discipline. Capricorns are known for their strong work ethic, determination, and strategic thinking. They strive for long-term success and stability." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "transparent" }} id="panel2a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content">
          <Typography sx={{ color: "#00ff7f" }}>Strengths:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#aaf0c0" }}>
            <ListItem>
              <ListItemText primary="Stability and perseverance: Calmness, internal strength." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Practicality and common sense: Ability to make pragmatic decisions." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Patience and ability to build foundations." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Empathy and connection with nature: Ability to feel coherence with the world." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Moderation: Ability to maintain balance in difficult situations." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel3a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content">
          <Typography sx={{ color: "#00ff7f" }}>Weaknesses:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#aaf0c0" }}>
            <ListItem>
              <ListItemText primary="Loss of flexibility: Excessive slowness and resistance to change." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Stubbornness and resistance to adaptation in situations requiring change." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Excessive focus on material aspects of life." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Excessive stability, which can lead to a lack of innovation." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Taking on too many commitments due to difficulty in refusal." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel4a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content">
          <Typography sx={{ color: "#00ff7f" }}>Exercises Strengthening Earth Traits:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#aaf0c0" }}>
            <ListItem>
              <ListItemText primary="Mindfulness practice and observing nature." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Developing planning skills and gradually achieving goals." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Building social bonds and empathy." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Flexibility and the ability to adapt to change." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Developing the ability to let go of commitments that do not bring value." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel5a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content">
          <Typography variant="body1" sx={{ color: "#00ff7f" }}>
            Key Strategies for Harmony with Earth:
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#aaf0c0" }}>
            <ListItem>
              <ListItemText primary="Developing flexibility and openness to change." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Maintaining a balance between stability and flexibility." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Taking risks sensibly, being open to new experiences." />
            </ListItem>

            <ListItem>
              <ListItemText primary="Cultivating creativity and innovation." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
