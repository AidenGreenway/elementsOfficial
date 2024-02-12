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
  const [selectedZodiacSign, setSelectedZodiacSign] = useState(null);
  const [selectedStrength, setSelectedStrength] = useState(null);
  const [selectedWeakness, setSelectedWeakness] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);

  const handleSelect = (item, setter) => {
    setter(item);
  };

  const listItemStyle = {
    color: "lightBlue",
    fontSize: "18px",
    transition: "font-size 0.25s ease",
    "&:hover": {
      fontSize: "20px",
      color: "white",
    },
  };

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

  const content = `An individual associated with the element of air is characterized by intellect, curiosity, and adaptability. They are quick thinkers, communicative, and enjoy socializing. Air individuals are often open-minded, objective, and value mental stimulation. They possess the ability to connect with diverse perspectives and thrive on change. Their strength lies in their ability to embrace new ideas, communicate effectively, and foster harmonious connections.`;

  const zodiacSigns = [
    "Gemini (May 21 - June 20): Gemini is an Air sign known for its versatility, curiosity, and communication skills. Geminis are adaptable, sociable, and thrive in dynamic environments.",
    "Libra (September 23 - October 22): Libra is an Air sign characterized by its sense of balance, harmony, and social grace. Librans value relationships, beauty, and diplomatic solutions.",
    "Aquarius (January 20 - February 18): Aquarius, the Water-Bearer, is an Air sign associated with innovation, originality, and humanitarianism. Aquarians are forward-thinking and enjoy exploring unconventional ideas.",
  ];

  const strengths = [
    "Intellect and curiosity: Quick thinking and a thirst for knowledge.",
    "Adaptability: Ease in adjusting to new situations.",
    "Communication skills: Ability to express ideas effectively.",
    "Open-mindedness: Embracing diverse perspectives.",
    "Harmonious connections: Fostering positive relationships.",
  ];

  const weaknesses = [
    "Restlessness: Difficulty staying focused on one task.",
    "Indecisiveness: Weighing multiple options without choosing.",
    "Overthinking: Analyzing situations excessively.",
    "Detachment: Struggling with emotional expression.",
    "Inconsistency: Difficulty maintaining commitments.",
  ];

  const exercises = [
    "Mindfulness meditation to enhance focus.",
    "Engaging in diverse social activities.",
    "Developing decision-making skills.",
    "Practicing emotional expression.",
    "Balancing intellectual pursuits with relaxation.",
  ];

  const strategies = [
    "Embrace change and variety in life.",
    "Practice effective communication skills.",
    "Balance intellectual pursuits with emotional connection.",
    "Cultivate patience in decision-making.",
  ];

  const sections = [
    {
      list: zodiacSigns,
      state: selectedZodiacSign,
      setter: setSelectedZodiacSign,
      title: "Zodiac Signs:",
    },
    { list: strengths, state: selectedStrength, setter: setSelectedStrength, title: "Strengths:" },
    {
      list: weaknesses,
      state: selectedWeakness,
      setter: setSelectedWeakness,
      title: "Weaknesses:",
    },
    {
      list: exercises,
      state: selectedExercise,
      setter: setSelectedExercise,
      title: "Exercises Strengthening Traits:",
    },
    {
      list: strategies,
      state: selectedStrategy,
      setter: setSelectedStrategy,
      title: "Key Strategies for Harmony:",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          padding: 2,
          maxWidth: "20%",
          textAlign: "right",
        }}
      >
        <DetailView title="Zodiac Sign" content={selectedZodiacSign || "-"} />
        <DetailView title="Strength" content={selectedStrength || "-"} />
        <DetailView title="Weakness" content={selectedWeakness || "-"} />
        <DetailView title="Exercise" content={selectedExercise || "-"} />
        <DetailView title="Strategy" content={selectedStrategy || "-"} />
      </Box>
      <Box sx={{ maxWidth: "70%" }}>
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
                      color: "white",
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
                {content}
              </Typography>
            </AccordionDetails>
          )}
        </Accordion>

        {sections.map((section, index) => (
          <Accordion
            key={index}
            sx={{ backgroundColor: "transparent" }}
            id={`panel${index}a-header-air`}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content-air`}
            >
              <Typography sx={listItemStyle}>{section.title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <List sx={{ marginTop: "8px", color: "white" }}>
                {section.list.map((item, itemIndex) => (
                  <ListItem
                    key={itemIndex}
                    button
                    onClick={() => handleSelect(item, section.setter)}
                  >
                    <ListItemText
                      sx={{ "&:hover": { color: "lightBlue" } }}
                      primary={`• ${item}`}
                    />{" "}
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

const DetailView = ({ title, content }) => (
  <Box sx={{ marginTop: 2, padding: 2 }}>
    <Typography
      sx={{
        fontSize: "25px",
        color: "lightBlue",
        transition: "font-size 0.25s ease",
        "&:hover": {
          color: "#white",
        },
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        color: "white",
        fontSize: "12px",
      }}
    >
      {content}
    </Typography>
  </Box>
);
