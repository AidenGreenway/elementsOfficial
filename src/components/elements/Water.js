import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ElementContext from "src/elementContext/ElementContext";

export const Water = () => {
  const { yourValue, setElementInfo } = useContext(ElementContext);

  const [selectedZodiacSign, setSelectedZodiacSign] = useState(null);
  const [selectedStrength, setSelectedStrength] = useState(null);
  const [selectedWeakness, setSelectedWeakness] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);

  const reset = () => {
    setSelectedZodiacSign(null);
    setSelectedStrength(null);
    setSelectedWeakness(null);
    setSelectedExercise(null);
    setSelectedStrategy(null);

    localStorage.removeItem("waterValues");
  };

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("waterValues")) || {};
    setSelectedZodiacSign(storedValues.selectedZodiacSign || null);
    setSelectedStrength(storedValues.selectedStrength || null);
    setSelectedWeakness(storedValues.selectedWeakness || null);
    setSelectedExercise(storedValues.selectedExercise || null);
    setSelectedStrategy(storedValues.selectedStrategy || null);
  }, []);

  const handleSelect = (item, setter, identifier) => {
    setter(() => {
      const key = `selected${identifier}`;

      const storedValues = {
        selectedZodiacSign,
        selectedStrength,
        selectedWeakness,
        selectedExercise,
        selectedStrategy,
      };
      storedValues[key] = item;
      localStorage.setItem("waterValues", JSON.stringify(storedValues));

      setElementInfo({
        selectedZodiacSign,
        selectedStrength,
        selectedWeakness,
        selectedExercise,
        selectedStrategy,
      });

      return item;
    });
  };

  const listItemStyle = {
    color: "#0181E5",
    fontSize: "18px",
    transition: "font-size 0.25s ease",
    "&:hover": {
      fontSize: "20px",
      color: "#00F3FF",
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

  const content = `An individual associated with the element of water embodies fluidity, intuition, and emotional depth. They are often empathetic, adaptable, and attuned to the subtle nuances of their surroundings. Water personalities are known for their ability to navigate through the complexities of emotions and connect with others on a profound level. Like a flowing river, they possess a natural grace and the capacity to heal and nurture. Individuals aligned with the water element may also have a strong sense of creativity and imagination.`;

  const zodiacSignsContent = [
    "Cancer (June 21 - July 22): Cancer, the Crab, is a Water sign known for its emotional depth and nurturing qualities. Cancers are intuitive, empathetic, and often have a strong connection to their family and home.",
    "Scorpio (October 23 - November 21): Scorpio is a Water sign characterized by its intensity and passion. Scorpios are often resourceful, determined, and have a keen ability to understand the hidden aspects of life.",
    "Pisces (February 19 - March 20): Pisces, the Fish, is a Water sign associated with creativity and compassion. Pisceans are imaginative, sensitive, and have a deep connection to the spiritual and artistic realms.",
  ];

  const strengthsContent = [
    "Empathy and emotional intelligence: Ability to understand and connect with others on a deep level.",
    "Adaptability and fluidity: Capacity to navigate through changing circumstances.",
    "Intuition and sensitivity: Attuned to subtle nuances and emotions.",
    "Creativity and imagination: Strong connection to artistic and spiritual realms.",
    "Nurturing qualities: Ability to heal and support others.",
  ];

  const weaknessesContent = [
    "Overly emotional: Tendency to be overwhelmed by emotions.",
    "Vulnerability to mood swings: Sensitivity to external influences.",
    "Avoidance of confrontation: Difficulty dealing with conflict.",
    "Overly idealistic: Struggle with accepting harsh realities.",
    "Tendency to be easily influenced by others.",
  ];

  const exercisesContent = [
    "Practicing mindfulness and emotional awareness.",
    "Engaging in creative activities: Art, music, writing.",
    "Developing resilience and coping mechanisms for emotional challenges.",
    "Exploring nature and connecting with natural elements.",
    "Participating in activities that promote self-care and relaxation.",
  ];

  const strategiesContent = [
    "Cultivating emotional balance and self-awareness.",
    "Creating a nurturing and supportive environment.",
    "Expressing creativity and embracing artistic outlets.",
    "Building healthy boundaries while maintaining empathy.",
  ];

  const sections = [
    {
      list: zodiacSignsContent,
      state: selectedZodiacSign,
      setter: setSelectedZodiacSign,
      title: "Zodiac Signs:",
    },
    {
      list: strengthsContent,
      state: selectedStrength,
      setter: setSelectedStrength,
      title: "Strengths:",
    },
    {
      list: weaknessesContent,
      state: selectedWeakness,
      setter: setSelectedWeakness,
      title: "Weaknesses:",
    },
    {
      list: exercisesContent,
      state: selectedExercise,
      setter: setSelectedExercise,
      title: "Exercises Enhancing Traits:",
    },
    {
      list: strategiesContent,
      state: selectedStrategy,
      setter: setSelectedStrategy,
      title: "Key Strategies for Harmony:",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "black" }}>
      {yourValue === "water" && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            padding: 3,
            maxWidth: "20%",
            textAlign: "right",
          }}
        >
          <Button
            onClick={reset}
            sx={{
              border: "1px white solid",
              color: "#0181E5",
              backgroundColor: "none",
              marginTop: "-5px",
              "&:hover": {
                backgroundColor: "none",
                color: "#00F3FF",
              },
            }}
          >
            Reset
          </Button>
          <DetailView title="Zodiac Sign" content={selectedZodiacSign || "-"} />
          <DetailView title="Strength" content={selectedStrength || "-"} />
          <DetailView title="Weakness" content={selectedWeakness || "-"} />
          <DetailView title="Exercise" content={selectedExercise || "-"} />
          <DetailView title="Strategy" content={selectedStrategy || "-"} />
        </Box>
      )}
      <Box sx={{ maxWidth: "70%" }}>
        <Accordion
          sx={{ backgroundColor: "transparent" }}
          id="water-panel1a-header"
          expanded={isFirstSectionVisible}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="water-panel1a-content">
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography
                className="animate__animated animate__bounceInDown"
                sx={{ fontSize: "220px", color: "#00FFF3", textAlign: "", marginTop: "-7%" }}
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
                  marginTop: "-9%",
                  marginLeft: "-80%",
                  cursor: "pointer",
                  transition: "font-size 0.25s ease",
                  "&:hover": {
                    fontSize: "20px",
                    color: "#00F3FF",
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
                sx={{ maxWidth: "90%", marginBottom: "20px", color: "#66b2ff", fontSize: "16px" }}
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
            id={`water-panel${index}a-header`}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`water-panel${index}a-content`}
            >
              <Typography sx={listItemStyle}>{section.title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <List sx={{ marginTop: "8px", color: "#66b2ff" }}>
                {section.list.map((item, itemIndex) => (
                  <ListItem
                    key={itemIndex}
                    button
                    onClick={() => handleSelect(item, section.setter, section.title)}
                  >
                    <ListItemText sx={{ "&:hover": { color: "#0181E5" } }} primary={`• ${item}`} />
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
  <Box sx={{ marginTop: 0, padding: 2 }}>
    <Typography
      sx={{
        fontSize: "25px",
        color: "#0181E5",
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        color: "#66b2ff",
        fontSize: "12px",
      }}
    >
      {content}
    </Typography>
  </Box>
);
