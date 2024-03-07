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

export const Fire = () => {
  const { yourValue, setElementInfo } = useContext(ElementContext);

  const [fireValues, setFireValues] = useState({
    selectedZodiacSign: null,
    selectedStrength: null,
    selectedWeakness: null,
    selectedExercise: null,
    selectedStrategy: null,
  });

  const setSelectedZodiacSign = (value) =>
    setFireValues((prev) => ({ ...prev, selectedZodiacSign: value }));
  const setSelectedStrength = (value) =>
    setFireValues((prev) => ({ ...prev, selectedStrength: value }));
  const setSelectedWeakness = (value) =>
    setFireValues((prev) => ({ ...prev, selectedWeakness: value }));
  const setSelectedExercise = (value) =>
    setFireValues((prev) => ({ ...prev, selectedExercise: value }));
  const setSelectedStrategy = (value) =>
    setFireValues((prev) => ({ ...prev, selectedStrategy: value }));

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);

  const reset = () => {
    setFireValues({
      selectedZodiacSign: null,
      selectedStrength: null,
      selectedWeakness: null,
      selectedExercise: null,
      selectedStrategy: null,
    });

    localStorage.removeItem("fireValues");
  };

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("fireValues")) || {};
    setFireValues({
      selectedZodiacSign: storedValues.selectedZodiacSign || null,
      selectedStrength: storedValues.selectedStrength || null,
      selectedWeakness: storedValues.selectedWeakness || null,
      selectedExercise: storedValues.selectedExercise || null,
      selectedStrategy: storedValues.selectedStrategy || null,
    });
  }, []);

  const handleSelect = (item, setter, identifier) => {
    setter(item);

    const key = `selected${identifier}`;

    setFireValues((prevValues) => {
      const storedValues = {
        selectedZodiacSign: prevValues.selectedZodiacSign,
        selectedStrength: prevValues.selectedStrength,
        selectedWeakness: prevValues.selectedWeakness,
        selectedExercise: prevValues.selectedExercise,
        selectedStrategy: prevValues.selectedStrategy,
      };
      storedValues[key] = item;

      localStorage.setItem("fireValues", JSON.stringify(storedValues));

      // Aktualizacja informacji o elemencie w kontekście na podstawie aktualnych wartości.
      setElementInfo(storedValues);

      return storedValues;
    });
  };

  const listItemStyle = {
    color: "#ff0000",
    fontSize: "18px",
    transition: "font-size 0.25s ease",
    "&:hover": {
      fontSize: "20px",
      color: "#ff4500",
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

  const content = `An individual associated with the element of fire is dynamic, passionate, and full of energy. They possess a strong will, determination, and a desire for action... [continuation text]`;

  const zodiacSignsContent = [
    "Aries (March 21 - April 19): Aries is a Fire sign known for its boldness, passion, and adventurous spirit...",
    "Leo (July 23 - August 22): Leo is a Fire sign associated with creativity, self-expression, and a charismatic personality...",
    "Sagittarius (November 22 - December 21): Sagittarius, the Archer, is a Fire sign known for its love of freedom, adventure, and optimism...",
  ];

  const strengthsContent = [
    "Passion and enthusiasm: Full of energy and excitement.",
    "Leadership qualities: Natural ability to take charge...",
  ];

  const weaknessesContent = [
    "Impatience and impulsiveness: Tendency to act without careful consideration...",
    "Short temper and a tendency to be argumentative...",
  ];

  const exercisesContent = [
    "Mindfulness and meditation to channel energy positively.",
    "Learning to listen and consider others' perspectives...",
  ];

  const strategiesContent = [
    "Learning to pause and reflect before reacting.",
    "Cultivating patience and embracing the journey...",
  ];

  const sections = [
    {
      list: zodiacSignsContent,
      state: fireValues.selectedZodiacSign,
      setter: setSelectedZodiacSign,
      title: "Zodiac Signs:",
    },
    {
      list: strengthsContent,
      state: fireValues.selectedStrength,
      setter: setSelectedStrength,
      title: "Strengths:",
    },
    {
      list: weaknessesContent,
      state: fireValues.selectedWeakness,
      setter: setSelectedWeakness,
      title: "Weaknesses:",
    },
    {
      list: exercisesContent,
      state: fireValues.selectedExercise,
      setter: setSelectedExercise,
      title: "Exercises Strengthening Traits:",
    },
    {
      list: strategiesContent,
      state: fireValues.selectedStrategy,
      setter: setSelectedStrategy,
      title: "Key Strategies for Harmony:",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "black" }}>
      {yourValue === "fire" && (
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
          <Button
            onClick={reset}
            sx={{
              border: "1px white solid",
              color: "#ff4500",
              backgroundColor: "none",
              marginTop: "-5px",
              "&:hover": {
                backgroundColor: "#ff4500",
                color: "black",
              },
            }}
          >
            Reset
          </Button>
          <DetailView title="Zodiac Sign" content={fireValues.selectedZodiacSign || "-"} />
          <DetailView title="Strength" content={fireValues.selectedStrength || "-"} />
          <DetailView title="Weakness" content={fireValues.selectedWeakness || "-"} />
          <DetailView title="Exercise" content={fireValues.selectedExercise || "-"} />
          <DetailView title="Strategy" content={fireValues.selectedStrategy || "-"} />
        </Box>
      )}
      <Box sx={{ maxWidth: "70%" }}>
        <Accordion
          sx={{ backgroundColor: "transparent" }}
          id="panel1a-header-fire"
          expanded={isFirstSectionVisible}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content-fire">
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography
                className="animate__animated animate__bounceInDown"
                sx={{ fontSize: "220px", color: "#ff4500", textAlign: "left", marginTop: "-4%" }}
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
                  transition: "font-size 0.25s ease",
                  "&:hover": {
                    fontSize: "20px",
                    color: "#ff0000",
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
                sx={{ maxWidth: "90%", marginBottom: "20px", color: "#ffa07a", fontSize: "16px" }}
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
            id={`panel${index}a-header-fire`}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content-fire`}
            >
              <Typography sx={listItemStyle}>{section.title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <List sx={{ marginTop: "8px", color: "#ffa07a" }}>
                {section.list.map((item, itemIndex) => (
                  <ListItem
                    key={itemIndex}
                    button
                    onClick={() => handleSelect(item, section.setter, section.title)}
                  >
                    <ListItemText sx={{ "&:hover": { color: "#ff4500" } }} primary={`• ${item}`} />
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
        color: "#ff4500",
        transition: "font-size 0.25s ease",
        "&:hover": {
          color: "#ff4500",
        },
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        color: "#ffa07a",
        fontSize: "12px",
      }}
    >
      {content}
    </Typography>
  </Box>
);
