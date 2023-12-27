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

const Water = () => {
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
          <Typography variant="h4" sx={{ marginBottom: "12px", color: "#1a1aff" }}>
            Strongest of them All?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ marginBottom: "20px", color: "#009688", fontSize: "16px" }}>
            Water is the best teacher for adopting, it can be invsible and has no physical form
            basiclly, also it can be in form tougher than diamnods, the same water! Individuals
            associated with the water element emanate tranquility, intuition, and adaptability. They
            are deeply immersed in emotions and possess the ability to adapt to changing situations.
            Inner peace allows reflection and understanding of both themselves and others. A watery
            person has the ability for empathetic feelings and expressing emotions, making them
            supportive to others.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel2a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content">
          <Typography sx={{ color: "#1a1aff" }}>Strengths:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#009688" }}>
            <ListItem>
              <ListItemText primary="Tranquility and intuition: Immersion in emotions and intuitive approach to life." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Empathy and support: Openness and understanding for others." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Analytical thinking: Ability for reflection and understanding different perspectives." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Creativity: Creative problem-solving approach." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Flexibility and adaptation: Ability to adapt to changing situations." />
            </ListItem>
            {/* Remaining strengths */}
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel3a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content">
          <Typography sx={{ color: "#1a1aff" }}>Weaknesses:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#009688" }}>
            <ListItem>
              <ListItemText primary="Excessive emotional sensitivity: Difficulty coping with intense emotions." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Decision-making: Sometimes struggling to make quick and decisive decisions." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Excessive emotional involvement: Difficulty disengaging from challenging situations." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Lack of assertiveness: Difficulty in expressing oneself and defending positions." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Overvaluing emotions: Problems maintaining emotional balance." />
            </ListItem>
            {/* Remaining weaknesses */}
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel4a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content">
          <Typography sx={{ color: "#1a1aff" }}>Exercises for Managing Water Traits:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#009688" }}>
            <ListItem>
              <ListItemText primary="Mindfulness and meditation practice: Cultivating inner peace." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Developing assertiveness: Training to express needs and beliefs." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Decision-making exercises: Developing decision-making skills." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Enhancing emotional coping abilities: Emotional regulation training." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Developing emotional balance skills: Exercises to maintain calmness in challenging situations." />
            </ListItem>
            {/* Remaining exercises */}
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel5a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content">
          <Typography variant="body1" sx={{ color: "#1a1aff" }}>
            Key Strategies for Harmony with the Water Element:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#009688" }}>
            <ListItem>
              <ListItemText primary="Developing emotion control skills: Training in regulating emotional sensitivity." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Maintaining balance between empathy and decision-making: Working on balancing empathy with decisiveness." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Effective conflict resolution: Developing skills to resolve conflicts constructively." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fostering resilience: Building the ability to bounce back from setbacks." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Improving self-assertiveness: Training to express oneself confidently." />
            </ListItem>
            {/* Remaining strategies */}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Water;
