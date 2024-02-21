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

  const [selectedZodiacSign, setSelectedZodiacSign] = useState(null);
  const [selectedStrength, setSelectedStrength] = useState(null);
  const [selectedWeakness, setSelectedWeakness] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Utwórz nowy stan do zarządzania widocznością sekcji akordeonów
  const [sectionVisibility, setSectionVisibility] = useState(Array(5).fill(false));

  const reset = () => {
    setSelectedZodiacSign(null);
    setSelectedStrength(null);
    setSelectedWeakness(null);
    setSelectedExercise(null);
    setSelectedStrategy(null);

    localStorage.removeItem("fireValues");
  };

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("fireValues")) || {};
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
      localStorage.setItem("fireValues", JSON.stringify(storedValues));

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

  const handleAccordionChange = (index) => {
    const newVisibility = sectionVisibility.map((visibility, i) =>
      i === index ? !visibility : visibility
    );
    setSectionVisibility(newVisibility);
  };

  const listItemStyle = {
    color: "#9C0808",
    fontSize: "18px",
    transition: "font-size 0.25s ease",
    "&:hover": {
      fontSize: "20px",
      color: "red",
    },
  };

  const location = useLocation();

  const texts = ["read me", "hide"];

  const handleChangeText = () => {
    const newIndex = (currentTextIndex + 1) % texts.length;
    setCurrentTextIndex(newIndex);

    // Zaktualizuj widoczność wszystkich sekcji akordeonów
    setSectionVisibility(Array(5).fill(newIndex === 1));
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

  const content = `An individual associated with the element of fire exudes energy, passion, and a strong sense of self. It's someone who is adventurous, dynamic, and loves to take risks. They are characterized by charisma, warmth, and a magnetic personality. A fiery person is enthusiastic, optimistic, and has a zest for life. Their strength lies in their ability to inspire and motivate others. Individuals associated with the fire element are natural leaders, but they need to be careful not to let their enthusiasm lead to impulsiveness.`;

  const zodiacSignsContent = [
    "Aries (March 21 - April 19): Aries is a Fire sign known for its adventurous and energetic nature. Arians are courageous, optimistic, and often have a strong sense of self. They are natural leaders and pioneers.",
    "Leo (July 23 - August 22): Leo is a Fire sign characterized by its charisma and warmth. Leos are generous, loyal, and have a magnetic personality. They are natural-born leaders who enjoy being in the spotlight.",
    "Sagittarius (November 22 - December 21): Sagittarius is a Fire sign associated with optimism and a love for freedom. Sagittarians are adventurous, enthusiastic, and have a great sense of humor. They are known for their wisdom and philosophical outlook on life.",
  ];

  const strengthsContent = [
    "Energy and passion: Enthusiasm, warmth, and charisma.",
    "Adventurousness and dynamism: Love for challenges and risks.",
    "Charisma and magnetism: Ability to inspire and motivate others.",
    "Optimism and enthusiasm: Positive outlook on life.",
  ];

  const weaknessesContent = [
    "Impulsiveness and impatience: Acting without thinking.",
    "Self-centeredness and dominance: Tendency to focus on their own needs.",
    "Quick temper and irritability: Reacting impulsively to frustration.",
    "Lack of persistence: Moving on to the next thing too quickly.",
  ];

  const exercisesContent = [
    "Mindfulness practice to manage impulsiveness.",
    "Team sports or group activities to develop patience and persistence.",
    "Volunteering or mentoring to cultivate empathy and selflessness.",
    "Regular exercise to channel energy and reduce irritability.",
  ];

  const strategiesContent = [
    "Developing self-awareness and emotional intelligence.",
    "Practicing active listening and empathy.",
    "Setting boundaries and learning to say 'no' when necessary.",
    "Cultivating a sense of purpose and meaning in life.",
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
      title: "Exercises Strengthening Traits:",
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
      {yourValue === "fire" && (
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
              color: "#9C0808",
              backgroundColor: "none",
              marginTop: "-5px",
              "&:hover": {
                backgroundColor: "none",
                color: "red",
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
          id="fire-panel1a-header"
          expanded={sectionVisibility[(0, 1, 2, 3, 4)]}
          onClick={handleChangeText}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="fire-panel1a-content">
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography
                className="animate__animated animate__bounceInDown"
                sx={{ fontSize: "220px", color: "#DC143C", textAlign: "", marginTop: "-7%" }}
              >
                fire
              </Typography>
              <Typography
                // key={null}
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
                    color: "#ea5455",
                  },
                }}
                onClick={handleChangeText}
              >
                {texts[currentTextIndex]}
              </Typography>
            </Box>
          </AccordionSummary>

          {sectionVisibility[0] && (
            <AccordionDetails>
              <Typography
                sx={{ maxWidth: "90%", marginBottom: "20px", color: "#DC143C", fontSize: "16px" }}
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
            id={`fire-panel${index}a-header`}
            expanded={sectionVisibility[index]}
            onChange={() => handleAccordionChange(index)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`fire-panel${index}a-content`}
            >
              <Typography sx={listItemStyle}>{section.title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <List sx={{ marginTop: "8px", color: "#FE5F5F" }}>
                {section.list.map((item, itemIndex) => (
                  <ListItem
                    key={itemIndex}
                    button
                    onClick={() => handleSelect(item, section.setter, section.title)}
                  >
                    <ListItemText sx={{ "&:hover": { color: "red" } }} primary={`• ${item}`} />
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

// Komponent do wyświetlania szczegółów
const DetailView = ({ title, content }) => (
  <Box sx={{ marginTop: 0, padding: 2 }}>
    <Typography
      sx={{
        fontSize: "25px",
        color: "red",
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        color: "#FE5F5F",
        fontSize: "12px",
      }}
    >
      {content}
    </Typography>
  </Box>
);
