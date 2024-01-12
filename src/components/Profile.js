import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import airGif1 from "../diaryImages/air/air1.jpg";
import airGif2 from "../diaryImages/air/air2.jpg";
import airGif3 from "../diaryImages/air/air3.jpg";
import airGif4 from "../diaryImages/air/air4.jpg";
import earthGif1 from "../diaryImages/earth/earth1.jpg";
import earthGif2 from "../diaryImages/earth/earth2.jpg";
import earthGif3 from "../diaryImages/earth/earth3.jpg";
import earthGif4 from "../diaryImages/earth/earth4.png";
import earthGif5 from "../diaryImages/earth/earth5.png";
import fireGif1 from "../diaryImages/fire/fire1.jpg";
import fireGif2 from "../diaryImages/fire/fire2.jpg";
import fireGif3 from "../diaryImages/fire/fire3.jpg";
import fireGif4 from "../diaryImages/fire/fire4.png";
import waterGif1 from "../diaryImages/water/water1.jpg";
import waterGif2 from "../diaryImages/water/water2.jpg";
import waterGif3 from "../diaryImages/water/water3.png";
import waterGif4 from "../diaryImages/water/water4.jpg";
const ElementImages = {
  fire: [fireGif1, fireGif2, fireGif3, fireGif4],
  water: [waterGif1, waterGif2, waterGif3, waterGif4],
  air: [airGif1, airGif2, airGif3, airGif4],
  earth: [earthGif1, earthGif2, earthGif3, earthGif4, earthGif5],
};

const ElementColors = {
  fire: ["#FF3131"],
  water: ["#0047AB"],
  air: ["#ADD8E6 "],
  earth: ["	#009E60	"],
};

const Profile = () => {
  const [element, setElement] = useState("earth");
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState(ElementColors[element][0]);
  const [selectedAvatarColor, setSelectedAvatarColor] = useState(ElementColors[element][0]);
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(0);
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("Aiden Greenway");
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [activeSection, setActiveSection] = useState("tablica"); // "tablica", "edycja", "nowyPost"

  const toggleActiveSection = (section) => {
    setActiveSection(activeSection === section ? "tablica" : section);
  };

  const handleInputChange = (event, inputType) => {
    const value = event.target.value;
    switch (inputType) {
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "username":
        setUsername(value);
        break;
      default:
        break;
    }
  };

  const handleElementChange = (event) => {
    const selectedElement = event.target.value;
    setElement(selectedElement);
    setSelectedColor(ElementColors[selectedElement][0]);
    setSelectedAvatarColor(ElementColors[selectedElement][0]);
    setSelectedAvatarIndex(0); // Reset indeksu obrazka
  };

  const handleNewPostChange = (event) => {
    setNewPost(event.target.value);
  };

  const handleAddPost = () => {
    if (newPost) {
      setPosts([...posts, newPost]);
      setNewPost("");
      setActiveSection("tablica");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logika zapisu danych profilu
    setActiveSection("tablica");
  };

  const handleAvatarChange = (step) => {
    const newAvatarIndex = selectedAvatarIndex + step;

    if (newAvatarIndex >= 0 && newAvatarIndex < ElementImages[element].length) {
      setSelectedAvatarIndex(newAvatarIndex);
    }
  };

  const renderRightSection = () => {
    switch (activeSection) {
      case "edycja":
        return (
          <Stack direction="column" spacing={2}>
            <TextField
              label="CHANGE NAME"
              fullWidth
              size="small"
              value={name}
              onChange={(event) => handleInputChange(event, "name")}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: { color: "white", backgroundColor: "black", borderColor: "white" },
              }}
              variant="outlined"
            />
            <TextField
              label="CHANGE USERNAME"
              fullWidth
              size="small"
              value={username}
              onChange={(event) => handleInputChange(event, "username")}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: { color: "white", backgroundColor: "black", borderColor: "white" },
              }}
              variant="outlined"
            />
            <TextField
              label="CHANGE TEXT"
              multiline
              rows={4}
              fullWidth
              size="small"
              value={description}
              onChange={(event) => handleInputChange(event, "description")}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: { color: "white", backgroundColor: "black", borderColor: "white" },
              }}
              variant="outlined"
            />
            <FormControl fullWidth size="small" sx={{ backgroundColor: "black" }}>
              <InputLabel id="element-label" style={{ color: "white" }}>
                Element
              </InputLabel>
              <Select
                labelId="element-label"
                id="element-select"
                value={element}
                label="Element"
                onChange={handleElementChange}
                sx={{
                  color: "white",
                  "& .MuiSelect-icon": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: "black",
                      color: "white",
                    },
                  },
                }}
              >
                {Object.keys(ElementColors).map((key) => (
                  <MenuItem key={key} value={key} style={{ color: "white" }}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth size="small" sx={{ backgroundColor: "black" }}>
              <InputLabel id="avatar-label" style={{ color: "white" }}>
                Wybierz obrazek
              </InputLabel>
              <Select
                labelId="avatar-label"
                id="avatar-select"
                value={selectedAvatarIndex}
                onChange={(event) => setSelectedAvatarIndex(event.target.value)}
                sx={{
                  color: "white",
                  "& .MuiSelect-icon": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: "black",
                      color: "white",
                    },
                  },
                }}
              >
                {ElementImages[element].map((image, index) => (
                  <MenuItem key={index} value={index}>
                    <Avatar
                      sx={{
                        bgcolor: selectedAvatarColor,
                        width: 56,
                        height: 56,
                        marginRight: 2,
                      }}
                    >
                      <img
                        src={image}
                        alt={element}
                        style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                      />
                    </Avatar>
                    {`Obrazek ${index + 1}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              onClick={handleSubmit}
              style={{
                backgroundColor: selectedColor,
                marginTop: 2,
                width: "15%",
                margin: "20px auto",
              }}
            >
              Zapisz
            </Button>
          </Stack>
        );
      case "nowyPost":
        return (
          <Box>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Dodaj nowy post..."
              value={newPost}
              onChange={handleNewPostChange}
              sx={{ bgcolor: "white", color: "black", my: 2 }}
            />
            <Button
              variant="contained"
              onClick={handleAddPost}
              sx={{ mb: 2, width: "50%", margin: "0 auto", backgroundColor: selectedColor }}
            >
              Dodaj Post
            </Button>
          </Box>
        );
      case "tablica":
      default:
        return (
          <Stack spacing={2}>
            {posts.map((post, index) => (
              <Paper key={index} sx={{ p: 2, bgcolor: "grey" }}>
                {post}
              </Paper>
            ))}
          </Stack>
        );
    }
  };

  return (
    <Box bgcolor="black" p={4} borderRadius={8} color="white">
      <Typography variant="h4" mb={2}>
        PROFILE
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            mb={4}
            p={2}
            borderRadius={8}
            sx={{
              borderColor: selectedColor,
              borderWidth: 2,
              borderStyle: "solid",
            }}
          >
            <Box
              sx={{
                p: 4,
                borderRadius: 2,
                backgroundColor: "inherit",
                color: "white",
              }}
            >
              <Box sx={{ display: "flex", marginBottom: 2 }}>
                <Avatar
                  sx={{ bgcolor: selectedAvatarColor, width: 56, height: 56, marginRight: 2 }}
                >
                  <img
                    src={ElementImages[element][selectedAvatarIndex]}
                    alt={element}
                    style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  />
                </Avatar>
                <Typography variant="h5">{username}</Typography>
              </Box>
              <Typography variant="h6" style={{ fontSize: "1.5rem" }} align="left">
                Persona:
              </Typography>
              <Typography variant="body2" color="white" align="left">
                <strong>Element:</strong> {element}
              </Typography>
              <Typography variant="body2" color="white" align="left">
                <strong>NAME:</strong> {name}
              </Typography>
              <Typography variant="body2" color="white" align="left">
                <strong>TEXT:</strong> {description}
              </Typography>
            </Box>
            <Stack direction="column" spacing={1}>
              <Button
                variant="contained"
                onClick={() => toggleActiveSection("nowyPost")}
                style={{ backgroundColor: selectedColor, width: "40%", margin: "0 auto" }}
              >
                Dodaj Nowy Post
              </Button>
              <Button
                variant="contained"
                onClick={() => toggleActiveSection("edycja")}
                style={{ backgroundColor: selectedColor, width: "40%", margin: "10px auto" }}
              >
                Edytuj Profil
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {renderRightSection()}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
