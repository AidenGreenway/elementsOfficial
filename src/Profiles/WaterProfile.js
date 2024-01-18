import { Avatar, Box, Button, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import airGif1 from "../diaryImages/air/air1.jpg";
import airGif2 from "../diaryImages/air/air2.jpg";
import airGif3 from "../diaryImages/air/air3.jpg";
import airGif4 from "../diaryImages/air/air4.jpg";

const ElementImages = {
  air: [airGif1, airGif2, airGif3, airGif4],
};

const ElementColors = {
  air: ["#ADD8E6"],
};

const Profile = () => {
  const element = "air";
  const [name, setName] = useState(localStorage.getItem("name") || "");
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
    localStorage.setItem("name", name);
    localStorage.setItem("username", username);
    // Save posts to localStorage
  }, [name, username]);

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
              variant="contained"
              onClick={handleSubmit}
              style={{
                backgroundColor: selectedColor,
                marginTop: 2,
                width: "15%",
                margin: "20px auto",
              }}
            >
              save
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
              placeholder="add new post"
              value={newPost}
              onChange={handleNewPostChange}
              sx={{ bgcolor: "white", color: "black", my: 2 }}
              autoFocus
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault(); // Zapobiegnij domyślnej akcji (np. przejście do nowej linii)
                  handleAddPost(); // Wywołaj funkcję dodawania posta
                }
              }}
            />
            <Button
              variant="contained"
              onClick={handleAddPost}
              sx={{ mb: 2, width: "50%", margin: "0 auto", backgroundColor: selectedColor }}
            >
              add post
            </Button>
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
              borderColor: ElementColors[element][0],
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
                <Typography variant="h4choseni">{username}</Typography>
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
                <strong>BIO:</strong> {description}
              </Typography>
            </Box>
            <Stack direction="column" spacing={1}>
              {/* [Buttons for adding posts, editing profile, and clearing data remain the same] */}
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
