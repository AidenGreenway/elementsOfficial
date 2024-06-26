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
import { airTexts } from "./elementsTexts";

export const Air = () => {
  const { yourValue, setElementInfo } = useContext(ElementContext);

  const [airValues, setAirValues] = useState({
    selectedZodiacSign: null,
    selectedStrength: null,
    selectedWeakness: null,
    selectedExercise: null,
    selectedStrategy: null,
  });

  const setSelectedZodiacSign = (value) =>
    setAirValues((prev) => ({ ...prev, selectedZodiacSign: value }));
  const setSelectedStrength = (value) =>
    setAirValues((prev) => ({ ...prev, selectedStrength: value }));
  const setSelectedWeakness = (value) =>
    setAirValues((prev) => ({ ...prev, selectedWeakness: value }));
  const setSelectedExercise = (value) =>
    setAirValues((prev) => ({ ...prev, selectedExercise: value }));
  const setSelectedStrategy = (value) =>
    setAirValues((prev) => ({ ...prev, selectedStrategy: value }));

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);

  const reset = () => {
    setAirValues({
      selectedZodiacSign: null,
      selectedStrength: null,
      selectedWeakness: null,
      selectedExercise: null,
      selectedStrategy: null,
    });

    // Usuń odpowiednie klucze z localStorage
    localStorage.removeItem("airValues");

    // Ustaw puste wartości w kontekście
    setElementInfo({
      selectedZodiacSign: null,
      selectedStrength: null,
      selectedWeakness: null,
      selectedExercise: null,
      selectedStrategy: null,
    });
  };

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("airValues")) || {};
    setAirValues({
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

    setAirValues((prevValues) => {
      const storedValues = {
        selectedZodiacSign: prevValues.selectedZodiacSign,
        selectedStrength: prevValues.selectedStrength,
        selectedWeakness: prevValues.selectedWeakness,
        selectedExercise: prevValues.selectedExercise,
        selectedStrategy: prevValues.selectedStrategy,
      };
      storedValues[key] = item;

      localStorage.setItem("airValues", JSON.stringify(storedValues));

      setElementInfo(storedValues);

      return storedValues;
    });
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

  const content = airTexts.content;
  const zodiacSignsContent = airTexts.zodiacSignsContent;
  const strengthsContent = airTexts.strengthsContent;
  const weaknessesContent = airTexts.weaknessesContent;
  const exercisesContent = airTexts.exercisesContent;
  const strategiesContent = airTexts.strategiesContent;

  const sections = [
    {
      list: zodiacSignsContent,
      state: airValues.selectedZodiacSign,
      setter: setSelectedZodiacSign,
      title: "Zodiac Signs:",
    },
    {
      list: strengthsContent,
      state: airValues.selectedStrength,
      setter: setSelectedStrength,
      title: "Strengths:",
    },
    {
      list: weaknessesContent,
      state: airValues.selectedWeakness,
      setter: setSelectedWeakness,
      title: "Weaknesses:",
    },
    {
      list: exercisesContent,
      state: airValues.selectedExercise,
      setter: setSelectedExercise,
      title: "Exercises Strengthening Traits:",
    },
    {
      list: strategiesContent,
      state: airValues.selectedStrategy,
      setter: setSelectedStrategy,
      title: "Key Strategies for Harmony:",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "black" }}>
      {yourValue === "air" && (
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
              color: "lightBlue",
              backgroundColor: "none",
              marginTop: "-5px",
              "&:hover": {
                backgroundColor: "none",
                color: "white",
              },
            }}
          >
            Reset
          </Button>
          <DetailView title="Zodiac Sign" content={airValues.selectedZodiacSign || "-"} />
          <DetailView title="Strength" content={airValues.selectedStrength || "-"} />
          <DetailView title="Weakness" content={airValues.selectedWeakness || "-"} />
          <DetailView title="Exercise" content={airValues.selectedExercise || "-"} />
          <DetailView title="Strategy" content={airValues.selectedStrategy || "-"} />
        </Box>
      )}
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
                    transition: "font-size 0.25s ease",
                    "&:hover": {
                      fontSize: "18px",
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
                    onClick={() => handleSelect(item, section.setter, section.title)}
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
  <Box sx={{ marginTop: 0, padding: 1 }}>
    <Typography
      sx={{
        fontSize: "25px",
        color: "lightBlue",
        transition: "font-size 0.25s ease",
        "&:hover": {
          color: "white",
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
