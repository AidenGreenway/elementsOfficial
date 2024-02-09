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

export const Earth = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);
  const listItemStyle = {
    color: "#00ff7f",
    fontSize: "18px", // Adjust the base font size as needed
    transition: "font-size 0.25s ease", // Smooth transition over 0.25 seconds
    "&:hover": {
      fontSize: "20px", // Adjust the larger font size on hover
      color: "#097969",
    },
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

  // Content arrays for each section
  const zodiacSignsContent = [
    "Taurus (April 20 - May 20): Taurus is an Earth sign known for its practical and grounded nature. Taureans are reliable, patient, and often have a strong sense of determination. They appreciate the beauty of the material world.",
    "Virgo (August 23 - September 22): Virgo is an Earth sign characterized by its attention to detail and analytical mindset. Virgos are often hardworking, reliable, and have a practical approach to problem-solving. They value precision and order.",
    "Capricorn (December 22 - January 19): Capricorn, the Sea-Goat, is an Earth sign associated with ambition and discipline. Capricorns are known for their strong work ethic, determination, and strategic thinking. They strive for long-term success and stability.",
  ];

  const strengthsContent = [
    "Stability and perseverance: Calmness, internal strength.",
    "Practicality and common sense: Ability to make pragmatic decisions.",
    "Patience and ability to build foundations.",
    "Empathy and connection with nature: Ability to feel coherence with the world.",
    "Moderation: Ability to maintain balance in difficult situations.",
  ];

  const weaknessesContent = [
    "Loss of flexibility: Excessive slowness and resistance to change.",
    "Stubbornness and resistance to adaptation in situations requiring change.",
    "Excessive focus on material aspects of life.",
    "Excessive stability, which can lead to a lack of innovation.",
    "Taking on too many commitments due to difficulty in refusal.",
  ];

  const exercisesContent = [
    "Mindfulness practice and observing nature.",
    "Developing planning skills and gradually achieving goals.",
    "Building social bonds and empathy.",
    "Flexibility and the ability to adapt to change.",
    "Developing the ability to let go of commitments that do not bring value.",
  ];

  const strategiesContent = [
    "Developing flexibility and openness to change.",
    "Maintaining a balance between stability and flexibility.",
    "Taking risks sensibly, being open to new experiences.",
    "Cultivating creativity and innovation.",
  ];

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
                transition: "font-size 0.25s ease", // Smooth transition over 0.25 seconds
                "&:hover": {
                  fontSize: "20px", // Adjust the larger font size on hover
                  color: "#097969",
                },
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
          <Typography sx={listItemStyle}>Zodiac Signs:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#aaf0c0" }}>
            {zodiacSignsContent.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "transparent" }} id="panel2a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content">
          <Typography sx={listItemStyle}>Strengths:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#aaf0c0" }}>
            {strengthsContent.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel3a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content">
          <Typography sx={listItemStyle}>Weaknesses:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#aaf0c0" }}>
            {weaknessesContent.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel4a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content">
          <Typography sx={listItemStyle}>Exercises Strengthening Earth Traits:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#aaf0c0" }}>
            {exercisesContent.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel5a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content">
          <Typography variant="body1" sx={listItemStyle}>
            Key Strategies for Harmony with Earth:
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#aaf0c0" }}>
            {strategiesContent.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
