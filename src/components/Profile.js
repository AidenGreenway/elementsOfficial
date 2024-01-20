import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Avatar,
  Box,
  Button,
  Fab,
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
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";

// ...

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
  air: ["#ADD8E6"],
  earth: ["#009E60"],
};

const Profile = () => {
  const [element, setElement] = useState(localStorage.getItem("element") || "earth");
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [selectedColor, setSelectedColor] = useState(ElementColors[element][0]);
  const [selectedAvatarColor, setSelectedAvatarColor] = useState(ElementColors[element][0]);
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(0);
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState(localStorage.getItem("username") || "Aiden Greenway");
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")) || []);
  const [newPost, setNewPost] = useState("");
  const [activeSection, setActiveSection] = useState("tablica");

  const handleDeletePost = (indexToDelete) => {
    const updatedPosts = posts.filter((_, index) => index !== indexToDelete);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  useEffect(() => {
    localStorage.setItem("element", element);
    localStorage.setItem("name", name);
    localStorage.setItem("username", username);
    // Save posts to localStorage
  }, [element, name, username]);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

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
      setPosts([newPost, ...posts]);
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
              label="CHANGE bio"
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
                choose icon
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
              onClick={handleSubmit}
              sx={{
                // backgroundColor: selectedColor,
                marginTop: 2,
                width: "15%",
                margin: "0px auto",
                color: "white",
                backgroundColor: "none", // Brak koloru tła
                "&:hover": {
                  backgroundColor: "none", // Tło pozostaje bez zmian
                  color: selectedColor, // Zmiana koloru ikony przy najechaniu myszką
                },
              }}
            >
              save
            </Button>
            <Button
              onClick={() => {
                localStorage.clear();
                setPosts([]); // Bezpośrednie resetowanie stanu 'posts'
              }}
              sx={{
                color: "white",
                backgroundColor: "none", // Brak koloru tła
                "&:hover": {
                  backgroundColor: "none", // Tło pozostaje bez zmian
                  color: selectedColor, // Zmiana koloru ikony przy najechaniu myszką
                },
                // backgroundColor: selectedColor,
                width: "15%",

                align: "center",
              }}
            >
              clear data{" "}
            </Button>
          </Stack>
        );
      case "nowyPost":
        return (
          <Box>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Fab
                color="primary"
                onClick={() => toggleActiveSection("nowyPost")}
                style={{ backgroundColor: selectedColor }}
              >
                <AddIcon />
              </Fab>
            </Stack>
            <Typography variant="caption" textAlign="center">
              {activeSection === "nowyPost" ? "Show Posts" : "Add Post / Edit Profile"}
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="add new post"
              value={newPost}
              onChange={handleNewPostChange}
              sx={{ bgcolor: "white", color: "black", my: 2 }}
              autoFocus
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault(); // Prevent default action (e.g., moving to a new line)
                  handleAddPost(); // Invoke the function to add a post
                }
              }}
            />
          </Box>
        );
      case "tablica":
      default:
        return (
          <Stack spacing={2}>
            <Box
              sx={{
                maxHeight: "580px", // Maksymalna wysokość kontenera z postami
                overflowY: "auto", // Dodanie paska przewijania, gdy zawartość przekracza maksymalną wysokość
              }}
            >
              {posts.map((post, index) => (
                <Paper
                  key={index}
                  sx={{ p: 2, bgcolor: "white", position: "relative", marginBottom: "15px" }}
                >
                  <Typography
                    variant="caption"
                    sx={{ position: "absolute", top: "10px", left: "10px", color: "grey" }}
                  >
                    #{posts.length - index}
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: "left", marginLeft: "20px" }}>
                    {post}
                  </Typography>
                  <Button
                    onClick={() => handleDeletePost(index)}
                    style={{ position: "absolute", right: "10px", top: "10px", color: "red" }}
                  >
                    DELETE
                  </Button>
                </Paper>
              ))}
            </Box>
          </Stack>
        );
    }
  };

  return (
    <Box bgcolor="black" p={4} borderRadius={8} color="white">
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
              height: "600px",
              backgroundColor: "black",
            }}
          >
            {/* Sekcja profilu użytkownika (username i logo/avatar) */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
              <Avatar sx={{ bgcolor: selectedAvatarColor, width: 56, height: 56, marginRight: 2 }}>
                <img
                  src={ElementImages[element][selectedAvatarIndex]}
                  alt={element}
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              </Avatar>
              <Typography sx={{ fontFamily: "The Next Font", fontSize: "30px" }}>
                {username}
              </Typography>
            </Box>

            {/* Sekcja przycisków (Settings i Add Post) */}
            <Box
              sx={{ position: "relative", marginBottom: 5, marginRight: 0, textAlign: "center" }}
            >
              <Stack
                direction="row"
                alignItems="center"
                marginLeft="470px"
                marginTop="-63px"
                spacing={1}
              >
                <IconButton
                  onClick={() => toggleActiveSection("nowyPost")}
                  sx={{
                    color: "white",
                    backgroundColor: "none", // Brak koloru tła
                    "&:hover": {
                      backgroundColor: "none", // Tło pozostaje bez zmian
                      color: selectedColor, // Zmiana koloru ikony przy najechaniu myszką
                    },
                  }}
                >
                  <AddIcon />
                </IconButton>

                <IconButton
                  onClick={() => toggleActiveSection("edycja")}
                  sx={{
                    color: "white",
                    backgroundColor: "none", // Brak koloru tła
                    "&:hover": {
                      backgroundColor: "none", // Tło pozostaje bez zmian
                      color: selectedColor, // Zmiana koloru ikony przy najechaniu myszką
                    },
                  }}
                >
                  <SettingsIcon />
                </IconButton>
              </Stack>
            </Box>

            {/* Sekcja danych personalnych (Persona, Element, Name, Bio) */}
            <Box>
              <Typography
                variant="h6"
                align="left"
                sx={{ fontSize: "1.5rem", marginBottom: 3, fontWeight: "bold" }}
              >
                Persona:
              </Typography>
              <Box>
                <Typography variant="body2" align="left" sx={{ marginBottom: 2 }}>
                  <strong>Element:</strong> {element}
                </Typography>
                <Box sx={{ borderBottom: 2, borderColor: selectedColor, mb: 2 }}></Box>

                <Typography variant="body2" align="left" sx={{ marginBottom: 2 }}>
                  <strong>NAME:</strong> {name}
                </Typography>
                <Box sx={{ borderBottom: 2, borderColor: selectedColor, mb: 2 }}></Box>

                <Typography variant="body2" align="left">
                  <strong>BIO:</strong> {description}
                </Typography>
                <Box sx={{ borderBottom: 2, borderColor: selectedColor, mb: 2 }}></Box>
              </Box>
            </Box>
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
