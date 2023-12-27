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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Fire = () => {
  const location = useLocation();

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
    <Box sx={{ backgroundColor: "black", padding: "20px", borderRadius: "8px" }}>
      <Accordion sx={{ backgroundColor: "transparent" }} id="panel1a-header" defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
          <Typography variant="h4" sx={{ marginBottom: "12px", color: "yellow" }}>
            Burn Baby Burn
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ marginBottom: "20px", color: "orange", fontSize: "16px" }}>
            Fire is the most charismatic, most dengerous and "cool" type of persona. An individual
            associated with the element of fire is a person who exudes intensity and fervor. Their
            life is driven by unstoppable energy and passion, which is hard to miss. This person
            engages in everything they do with tremendous enthusiasm and commitment. They possess an
            extraordinary ability to express emotions and act at full throttle, making their
            surroundings always lively. They fearlessly take on challenges and confront them with
            determination, acting with incredible intensity. The energy stemming from this element
            makes them creative, inspiring to others, and characterized by extraordinary dynamism.
            They possess an unwavering willpower and a fiery temperament capable of transforming the
            world around them. Individuals associated with the fire element may sometimes act
            impulsively, occasionally needing moments of reflection on their reactions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel2a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content">
          <Typography sx={{ color: "yellow" }}>Strengths:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "orange" }}>
            <ListItem>
              <ListItemText primary="Energy and passion: Intensity, enthusiasm, commitment." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Inspiration and creativity: Creative potential, ability to express oneself." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Courage and fearlessness: Willingness to face challenges head-on." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Charismatic and influential: Ability to captivate and lead." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Optimism and confidence: Positive outlook and self-assurance." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel3a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content">
          <Typography sx={{ color: "yellow" }}>Weaknesses:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "orange" }}>
            <ListItem>
              <ListItemText primary="Impulsive risk-taking without consideration." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Emotional impulsivity and difficulty controlling anger." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Overly competitive nature leading to conflicts." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Restlessness and impatience in slower-paced situations." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Tendency towards dominance and overpowering behaviors." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel4a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content">
          <Typography sx={{ color: "yellow" }}>Exercises to Manage Fire Traits:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "orange" }}>
            <ListItem>
              <ListItemText primary="Fire meditation: Visualizing calmness and positive energy." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Engaging in creative challenges: Art, writing, creativity." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Mindfulness practice for emotional regulation." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Physical activities to channel excess energy." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Learning conflict resolution and patience." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel5a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content">
          <Typography variant="body1" sx={{ color: "yellow" }}>
            Key Strategies for Controlling Fire:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "orange" }}>
            <ListItem>
              <ListItemText primary="Self-control and reflection on impulsive reactions." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Anger management techniques and relaxation practices." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Developing empathy and understanding others' perspectives." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Embracing patience and practicing moderation." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Learning assertiveness without aggression." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Fire;
