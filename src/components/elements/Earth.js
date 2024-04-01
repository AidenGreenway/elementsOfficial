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

export const Earth = () => {
  const { yourValue, setElementInfo } = useContext(ElementContext);

  const [earthValues, setEarthValues] = useState({
    selectedZodiacSign: null,
    selectedStrength: null,
    selectedWeakness: null,
    selectedExercise: null,
    selectedStrategy: null,
  });

  const setSelectedZodiacSign = (value) =>
    setEarthValues((prev) => ({ ...prev, selectedZodiacSign: value }));
  const setSelectedStrength = (value) =>
    setEarthValues((prev) => ({ ...prev, selectedStrength: value }));
  const setSelectedWeakness = (value) =>
    setEarthValues((prev) => ({ ...prev, selectedWeakness: value }));
  const setSelectedExercise = (value) =>
    setEarthValues((prev) => ({ ...prev, selectedExercise: value }));
  const setSelectedStrategy = (value) =>
    setEarthValues((prev) => ({ ...prev, selectedStrategy: value }));

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("earthValues")) || {};
    setEarthValues({
      selectedZodiacSign: storedValues.selectedZodiacSign || "",
      selectedStrength: storedValues.selectedStrength || "",
      selectedWeakness: storedValues.selectedWeakness || "",
      selectedExercise: storedValues.selectedExercise || "",
      selectedStrategy: storedValues.selectedStrategy || "",
    });
  }, []);

  const handleSelect = (item, setter, identifier) => {
    setter(item);

    const key = `selected${identifier}`;

    setEarthValues((prevValues) => {
      const storedValues = {
        selectedZodiacSign: prevValues.selectedZodiacSign,
        selectedStrength: prevValues.selectedStrength,
        selectedWeakness: prevValues.selectedWeakness,
        selectedExercise: prevValues.selectedExercise,
        selectedStrategy: prevValues.selectedStrategy,
      };
      storedValues[key] = item;

      localStorage.setItem("earthValues", JSON.stringify(storedValues));

      // Aktualizacja informacji o elemencie w kontekście na podstawie aktualnych wartości.
      setElementInfo(storedValues);

      return storedValues;
    });
  };

  const reset = () => {
    setEarthValues({
      selectedZodiacSign: null,
      selectedStrength: null,
      selectedWeakness: null,
      selectedExercise: null,
      selectedStrategy: null,
    });

    // Usuń odpowiednie klucze z localStorage
    localStorage.removeItem("earthValues");

    // Ustaw puste wartości w kontekście
    setElementInfo({
      selectedZodiacSign: null,
      selectedStrength: null,
      selectedWeakness: null,
      selectedExercise: null,
      selectedStrategy: null,
    });
  };

  const listItemStyle = {
    color: "#097969",
    fontSize: "18px",
    transition: "font-size 0.25s ease",
    "&:hover": {
      fontSize: "20px",
      color: "#00ff7f",
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

  const content = `An individual associated with the element of earth exudes calmness, stability, and deep internal strength. It's someone immersed in reality, practical, with strong moral foundations and common sense. They are characterized by perseverance, patience, and an ability to feel connected to the surrounding world. An earthy person is practical, has a sense of reality, enabling them to achieve goals step by step. Their strength lies in stability, making them a pillar of support for others. Individuals associated with the earth element need time to build trust and bonds with their surroundings, but once they do, their loyalty and dedication are unwavering.`;

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

  const sections = [
    {
      list: zodiacSignsContent,
      state: earthValues.selectedZodiacSign,
      setter: setSelectedZodiacSign,
      title: "Zodiac Signs:",
    },
    {
      list: strengthsContent,
      state: earthValues.selectedStrength,
      setter: setSelectedStrength,
      title: "Strengths:",
    },
    {
      list: weaknessesContent,
      state: earthValues.selectedWeakness,
      setter: setSelectedWeakness,
      title: "Weaknesses:",
    },
    {
      list: exercisesContent,
      state: earthValues.selectedExercise,
      setter: setSelectedExercise,
      title: "Exercises Strengthening Traits:",
    },
    {
      list: strategiesContent,
      state: earthValues.selectedStrategy,
      setter: setSelectedStrategy,
      title: "Key Strategies for Harmony:",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "black" }}>
      {yourValue === "earth" && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            padding: 2,
            margin: "0 10px 10px 0",
            maxWidth: "20%",
            textAlign: "right",
          }}
        >
          <Button
            onClick={reset}
            sx={{
              border: "1px white solid",
              color: "#00ff7f",
              backgroundColor: "none",
              marginTop: "-5px",
              "&:hover": {
                backgroundColor: "#00ff7f",
                color: "black",
              },
            }}
          >
            Reset
          </Button>
          <DetailView title="Zodiac Sign" content={earthValues.selectedZodiacSign || "-"} />
          <DetailView title="Strength" content={earthValues.selectedStrength || "-"} />
          <DetailView title="Weakness" content={earthValues.selectedWeakness || "-"} />
          <DetailView title="Exercise" content={earthValues.selectedExercise || "-"} />
          <DetailView title="Strategy" content={earthValues.selectedStrategy || "-"} />
        </Box>
      )}
      <Box sx={{ maxWidth: "70%" }}>
        <Accordion
          sx={{ backgroundColor: "transparent" }}
          id="panel1a-header"
          expanded={isFirstSectionVisible}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography
                className="animate__animated animate__bounceInDown"
                sx={{ fontSize: "220px", color: "#00ff7f", textAlign: "left", marginTop: "-4%" }}
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
                  transition: "font-size 0.25s ease",
                  "&:hover": {
                    fontSize: "20px",
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
                {content}
              </Typography>
            </AccordionDetails>
          )}
        </Accordion>

        {sections.map((section, index) => (
          <Accordion
            key={index}
            sx={{ backgroundColor: "transparent" }}
            id={`panel${index}a-header`}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
            >
              <Typography sx={listItemStyle}>{section.title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <List sx={{ marginTop: "8px", color: "#aaf0c0" }}>
                {section.list.map((item, itemIndex) => (
                  <ListItem
                    key={itemIndex}
                    button
                    onClick={() => handleSelect(item, section.setter, section.title)}
                  >
                    <ListItemText sx={{ "&:hover": { color: "#00ff7f" } }} primary={`• ${item}`} />
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
  <Box sx={{ marginTop: 2, padding: 1 }}>
    <Typography
      sx={{
        fontSize: "25px",
        color: "#00ff7f",
        transition: "font-size 0.25s ease",
        "&:hover": {
          color: "#00ff7f",
        },
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        color: "#097969",
        fontSize: "12px",
      }}
    >
      {content}
    </Typography>
  </Box>
);
