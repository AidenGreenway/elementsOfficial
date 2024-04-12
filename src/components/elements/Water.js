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
import { waterTexts } from "./elementsTexts";

export const Water = () => {
  const { yourValue, setElementInfo } = useContext(ElementContext);

  const [waterValues, setWaterValues] = useState({
    selectedZodiacSign: null,
    selectedStrength: null,
    selectedWeakness: null,
    selectedExercise: null,
    selectedStrategy: null,
  });

  const setSelectedZodiacSign = (value) =>
    setWaterValues((prev) => ({ ...prev, selectedZodiacSign: value }));
  const setSelectedStrength = (value) =>
    setWaterValues((prev) => ({ ...prev, selectedStrength: value }));
  const setSelectedWeakness = (value) =>
    setWaterValues((prev) => ({ ...prev, selectedWeakness: value }));
  const setSelectedExercise = (value) =>
    setWaterValues((prev) => ({ ...prev, selectedExercise: value }));
  const setSelectedStrategy = (value) =>
    setWaterValues((prev) => ({ ...prev, selectedStrategy: value }));

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);

  const reset = () => {
    setWaterValues({
      selectedZodiacSign: null,
      selectedStrength: null,
      selectedWeakness: null,
      selectedExercise: null,
      selectedStrategy: null,
    });

    localStorage.removeItem("waterValues");

    setElementInfo({
      selectedZodiacSign: null,
      selectedStrength: null,
      selectedWeakness: null,
      selectedExercise: null,
      selectedStrategy: null,
    });
  };

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("waterValues")) || {};
    setWaterValues({
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

    setWaterValues((prevValues) => {
      const storedValues = {
        selectedZodiacSign: prevValues.selectedZodiacSign,
        selectedStrength: prevValues.selectedStrength,
        selectedWeakness: prevValues.selectedWeakness,
        selectedExercise: prevValues.selectedExercise,
        selectedStrategy: prevValues.selectedStrategy,
      };
      storedValues[key] = item;

      localStorage.setItem("waterValues", JSON.stringify(storedValues));

      setElementInfo(storedValues);

      return storedValues;
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

  const content = waterTexts.content;
  const zodiacSignsContent = waterTexts.zodiacSignsContent;
  const strengthsContent = waterTexts.strengthsContent;
  const weaknessesContent = waterTexts.weaknessesContent;
  const exercisesContent = waterTexts.exercisesContent;
  const strategiesContent = waterTexts.strategiesContent;

  const sections = [
    {
      list: zodiacSignsContent,
      state: waterValues.selectedZodiacSign,
      setter: setSelectedZodiacSign,
      title: "Zodiac Signs:",
    },
    {
      list: strengthsContent,
      state: waterValues.selectedStrength,
      setter: setSelectedStrength,
      title: "Strengths:",
    },
    {
      list: weaknessesContent,
      state: waterValues.selectedWeakness,
      setter: setSelectedWeakness,
      title: "Weaknesses:",
    },
    {
      list: exercisesContent,
      state: waterValues.selectedExercise,
      setter: setSelectedExercise,
      title: "Exercises Enhancing Traits:",
    },
    {
      list: strategiesContent,
      state: waterValues.selectedStrategy,
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
          <DetailView title="Zodiac Sign" content={waterValues.selectedZodiacSign || "-"} />
          <DetailView title="Strength" content={waterValues.selectedStrength || "-"} />
          <DetailView title="Weakness" content={waterValues.selectedWeakness || "-"} />
          <DetailView title="Exercise" content={waterValues.selectedExercise || "-"} />
          <DetailView title="Strategy" content={waterValues.selectedStrategy || "-"} />
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
  <Box sx={{ marginTop: 0, padding: 1 }}>
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
