import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
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
import IconButton from "@mui/material/IconButton";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ElementContext from "src/elementContext/ElementContext";
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
  water: ["#1F51FF"],
  air: ["#ADD8E6"],
  earth: ["limeGreen"],
};

export const Profile = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const elementFromBanner = searchParams.get("element");
  const { setElementInfo } = useContext(ElementContext);

  const [element, setElement] = useState(
    elementFromBanner || localStorage.getItem("element") || "earth"
  );
  const {
    selectedZodiacSign,
    selectedStrength,
    selectedWeakness,
    selectedExercise,
    selectedStrategy,
  } = useContext(ElementContext) || {};
  const [year, setYear] = useState(localStorage.getItem("year") || "");
  const [selectedColor, setSelectedColor] = useState(ElementColors[element][0]);
  const [selectedAvatarColor, setSelectedAvatarColor] = useState(ElementColors[element][0]);
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(
    localStorage.getItem("selectedAvatarIndex") || 3
  );

  const [description, setDescription] = useState(localStorage.getItem("description") || "");
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")) || []);
  const [newPost, setNewPost] = useState("");
  const [activeSection, setActiveSection] = useState("tablica");

  const handleDeletePost = (indexToDelete) => {
    const updatedPosts = posts.filter((_, index) => index !== indexToDelete);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };
  useEffect(() => {
    localStorage.setItem("selectedZodiacSign", selectedZodiacSign);
    localStorage.setItem("selectedStrength", selectedStrength);
    localStorage.setItem("selectedWeakness", selectedWeakness);
    localStorage.setItem("selectedExercise", selectedExercise);
    localStorage.setItem("selectedStrategy", selectedStrategy);
  }, [selectedZodiacSign, selectedStrength, selectedWeakness, selectedExercise, selectedStrategy]);

  useEffect(() => {
    localStorage.setItem("selectedAvatarIndex", selectedAvatarIndex);
    localStorage.setItem("element", element);
    localStorage.setItem("year", year);
    localStorage.setItem("username", username);
    localStorage.setItem("description", description);
    setElementInfo({ username: username }); // Dodaj username do kontekstu przy każdej zmianie
  }, [element, year, username, description, selectedAvatarIndex]);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const toggleActiveSection = (section) => {
    setActiveSection(activeSection === section ? "tablica" : section);
  };

  const handleInputChange = (event, inputType) => {
    const value = event.target.value;

    const MAX_USERNAME_LENGTH = 14;
    let truncatedValue;

    switch (inputType) {
      case "year":
        setYear(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "username":
        truncatedValue = value.slice(0, MAX_USERNAME_LENGTH);
        setUsername(truncatedValue);
        setElementInfo({ username: truncatedValue });

        break;
    }
  };

  const handleElementChange = (event) => {
    const selectedElement = event.target.value;
    setElement(selectedElement);
    setSelectedColor(ElementColors[selectedElement][0]);
    setSelectedAvatarColor(ElementColors[selectedElement][0]);
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

  const renderRightSection = () => {
    switch (activeSection) {
      case "edycja":
        return (
          <Stack direction="column" spacing={2}>
            <TextField
              placeholder="change username"
              fullWidth
              size="small"
              value={username}
              onChange={(event) => handleInputChange(event, "username")}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: {
                  color: "white",
                  backgroundColor: "black",
                  borderColor: "white",
                  border: "1px white solid",
                },
              }}
              variant="outlined"
            />

            <TextField
              placeholder="change year"
              fullWidth
              size="small"
              value={year}
              onChange={(event) => handleInputChange(event, "year")}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: {
                  color: "white",
                  backgroundColor: "black",
                  borderColor: "white",
                  border: "1px white solid",
                },
              }}
              variant="outlined"
            />
            <TextField
              placeholder="change bio"
              multiline
              rows={4}
              fullWidth
              size="small"
              value={description}
              onChange={(event) => handleInputChange(event, "description")}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: { color: "white", backgroundColor: "black", border: "1px white solid" },
              }}
              variant="outlined"
            />

            <FormControl fullWidth size="small" sx={{ display: "none", backgroundColor: "black" }}>
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

            <FormControl
              fullWidth
              size="small"
              sx={{ backgroundColor: "black", "& .MuiSelect-root": { borderColor: "white" } }}
            >
              <InputLabel id="avatar-label" style={{ color: "white" }}></InputLabel>

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

                  "&:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white !important",
                    },
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
              onClick={() => {
                localStorage.clear();
                setPosts([]); // Bezpośrednie resetowanie stanu 'posts'
              }}
              sx={{
                border: "1px white solid",
                color: "white",
                backgroundColor: "none", // Brak koloru tła
                "&:hover": {
                  backgroundColor: "none", // Tło pozostaje bez zmian
                  color: "red", // Zmiana koloru ikony przy najechaniu myszką
                },
                width: "15%",
                fontSize: "12px",
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
            <TextField
              fullWidth
              multiline
              rows={10}
              placeholder="write new post...save"
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

            <Button
              onClick={handleAddPost}
              sx={{
                border: "1px white solid",
                width: "15%",
                marginLeft: "515px ",
                color: "#00e676",
                backgroundColor: "none", // Brak koloru tła
                "&:hover": {
                  backgroundColor: "none", // Tło pozostaje bez zmian
                  color: "#69f0ae", // Zmiana koloru ikony przy najechaniu myszką
                },
              }}
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box>
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

            <Box
              sx={{ position: "relative", marginBottom: 5, marginLeft: -14, textAlign: "center" }}
            >
              <Stack
                direction="row"
                alignItems="center"
                marginLeft="470px"
                marginTop="-63px"
                spacing={1}
              >
                <Link
                  to={`/dashboard/courseModules/${element.toLowerCase()}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      border: "1px white solid",
                      color: selectedColor,
                      backgroundColor: "none",
                      "&:hover": {
                        backgroundColor: selectedColor,
                        color: "black",
                      },
                    }}
                  >
                    element info
                  </Button>
                </Link>
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

            <Box>
              <Typography
                variant="h6"
                align="left"
                sx={{ fontSize: "1.5rem", marginBottom: 3, fontWeight: "bold" }}
              >
                Persona:
              </Typography>

              <Box>
                <Typography variant="body2" align="left" sx={{ marginBottom: 2, maxWidth: "90%" }}>
                  <strong>Element:</strong> &nbsp;&nbsp;&nbsp;&nbsp;{element}
                </Typography>

                <Box
                  sx={{ borderBottom: 2, borderColor: selectedColor, mb: 2, maxWidth: "90%" }}
                ></Box>
                <Typography variant="body2" align="left" sx={{ marginBottom: 2, maxWidth: "90%" }}>
                  <strong>year:</strong> &nbsp;&nbsp;&nbsp;&nbsp;{year}
                </Typography>

                <Box
                  sx={{ borderBottom: 2, borderColor: selectedColor, mb: 2, maxWidth: "90%" }}
                ></Box>
                <Typography variant="body2" align="left" sx={{ marginBottom: 2, maxWidth: "90%" }}>
                  <strong>BIO:</strong> &nbsp;&nbsp;&nbsp;&nbsp;{description}
                </Typography>
                <Box
                  sx={{ borderBottom: 2, borderColor: selectedColor, mb: 2, maxWidth: "90%" }}
                ></Box>
                <Typography variant="body2" align="left" sx={{ marginBottom: 2, maxWidth: "90%" }}>
                  <strong>Zodiac Sign :</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                  {selectedZodiacSign}
                </Typography>
                <Box
                  sx={{ borderBottom: 2, borderColor: selectedColor, mb: 2, maxWidth: "90%" }}
                ></Box>
                <Typography variant="body2" align="left" sx={{ marginBottom: 2, maxWidth: "90%" }}>
                  <strong>Strength:</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                  {selectedStrength}
                </Typography>
                <Box
                  sx={{ borderBottom: 2, borderColor: selectedColor, mb: 2, maxWidth: "90%" }}
                ></Box>
                <Typography variant="body2" align="left" sx={{ marginBottom: 2, maxWidth: "90%" }}>
                  <strong>Weakness:</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                  {selectedWeakness}
                </Typography>
                <Box
                  sx={{ borderBottom: 2, borderColor: selectedColor, mb: 2, maxWidth: "90%" }}
                ></Box>

                <Typography variant="body2" align="left" sx={{ marginBottom: 2, maxWidth: "90%" }}>
                  <strong>Exercise:</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                  {selectedExercise}
                </Typography>
                <Box
                  sx={{ borderBottom: 2, borderColor: selectedColor, mb: 2, maxWidth: "90%" }}
                ></Box>

                <Typography variant="body2" align="left" sx={{ marginBottom: 2, maxWidth: "90%" }}>
                  <strong>Strategy:</strong>&nbsp;&nbsp;&nbsp;&nbsp; {selectedStrategy}
                </Typography>
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
