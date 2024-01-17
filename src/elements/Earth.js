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

import earthGif from "../Images/earthgif.gif";

const Earth = () => {
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
          <Typography variant="h4" sx={{ marginBottom: "12px", color: "#00ff7f" }} align="left">
            Earth
          </Typography>
          <img src={earthGif} width="10%" />
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{ marginBottom: "20px", color: "#aaf0c0", fontSize: "16px" }}
            align="left"
          >
            An individual associated with the element of earth exudes calmness, stability, and deep
            internal strength. It's someone immersed in reality, practical, with strong moral
            foundations and common sense. They are characterized by perseverance, patience, and an
            ability to feel connected to the surrounding world. An earthy person is practical, has a
            sense of reality, enabling them to achieve goals step by step. Their strength lies in
            stability, making them a pillar of support for others. Individuals associated with the
            earth element need time to build trust and bonds with their surroundings, but once they
            do, their loyalty and dedication are unwavering.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel2a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content">
          <Typography sx={{ color: "#00ff7f" }}>Strengths:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#aaf0c0" }}>
            <ListItem>
              <ListItemText primary="Stability and perseverance: Calmness, internal strength." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Practicality and common sense: Ability to make pragmatic decisions." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Patience and ability to build foundations." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Empathy and connection with nature: Ability to feel coherence with the world." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Moderation: Ability to maintain balance in difficult situations." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel3a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content">
          <Typography sx={{ color: "#00ff7f" }}>Weaknesses:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#aaf0c0" }}>
            <ListItem>
              <ListItemText primary="Loss of flexibility: Excessive slowness and resistance to change." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Stubbornness and resistance to adaptation in situations requiring change." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Excessive focus on material aspects of life." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Excessive stability, which can lead to a lack of innovation." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Taking on too many commitments due to difficulty in refusal." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel4a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content">
          <Typography sx={{ color: "#00ff7f" }}>Exercises Strengthening Earth Traits:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#aaf0c0" }}>
            <ListItem>
              <ListItemText primary="Mindfulness practice and observing nature." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Developing planning skills and gradually achieving goals." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Building social bonds and empathy." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Flexibility and the ability to adapt to change." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Developing the ability to let go of commitments that do not bring value." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent" }} id="panel5a-header">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content">
          <Typography variant="body1" sx={{ color: "#00ff7f" }}>
            Key Strategies for Harmony with Earth:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ marginTop: "8px", color: "#aaf0c0" }}>
            <ListItem>
              <ListItemText primary="Developing flexibility and openness to change." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Maintaining a balance between stability and flexibility." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Taking risks sensibly, being open to new experiences." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Cultivating creativity and innovation." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Earth;
