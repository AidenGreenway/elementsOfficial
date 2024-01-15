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

// import airGif from "../images/airgif.gif";
const Air = () => {
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
    <Box sx={{ backgroundColor: "#ADD8E6", padding: "20px", borderRadius: "8px" }}>
      <Accordion sx={{ backgroundColor: "transparent" }} id="panel1a-header" defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
          <Typography variant="h4" sx={{ marginBottom: "12px", color: "white", align: "left" }}>
            Air
          </Typography>
          {/* <Typography variant="h4" sx={{ marginLeft: "-360px", color: "white", align: "left" }}>
            <img src={airGif} width="10%" />
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ marginBottom: "20px", color: "white", fontSize: "16px" }} align="left">
            Individuals associated with the air element are intelligent, dynamic, and communicative.
            They are characterized by openness to change and new experiences. They are social, enjoy
            interacting with others, and have the ability to analyze situations from various
            perspectives.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel2a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content">
          <Typography sx={{ color: "white" }}>Strengths:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#b3b3b3" }}>
            <ListItem>
              <ListItemText primary="Intelligence and flexibility: Ability to adapt to new situations." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Analytical approach: Skill in analyzing from different perspectives." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Open-mindedness and curiosity: Readiness to explore and learn." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Adaptability and resourcefulness: Ability to navigate diverse situations." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Communication skills: Effective expression and reception of ideas." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel3a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content">
          <Typography sx={{ color: "white" }}>Weaknesses:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#b3b3b3" }}>
            <ListItem>
              <ListItemText primary="Emotional instability: Difficulty maintaining calmness in tense situations." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Overanalysis: Inclination to excessively analyze every detail." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Indecisiveness: Struggle in making quick decisions." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Restlessness and detachment: Difficulty in focusing on one thing." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Overly critical tendencies: Inclination to be overly judgmental." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel4a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content">
          <Typography sx={{ color: "white" }}>Exercises for Managing Air Traits:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#b3b3b3" }}>
            <ListItem>
              <ListItemText primary="Stress management practices: Exercises to reduce tension." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Focus training: Developing the ability to concentrate on one task." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Mindfulness techniques for decision-making." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Practice in patience and grounding exercises." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Engagement in structured planning activities." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel5a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content">
          <Typography variant="body1" sx={{ color: "white" }}>
            Key Strategies for Harmonizing with the Air Element:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#b3b3b3" }}>
            <ListItem>
              <ListItemText primary="Maintaining balance between adaptability and calmness: Training in balancing adaptation with maintaining tranquility." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Developing the ability to see the big picture while also analyzing details." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Cultivating patience and embracing change gracefully." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Enhancing decision-making skills without overthinking." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Practicing effective communication and active listening." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Air;
