import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ElementColors = {
  fire: ["#000000", "#FF0000", "#FFA500"],
  water: ["#0000FF", "#008000", "#00FFFF"],
  air: ["#4B0082", "#00BFFF", "#FFFF00"],
  earth: ["#A52A2A", "#008000", "#808080"],
  // Dodaj więcej żywiołów i kolory
};

const Profile = () => {
  const [element, setElement] = useState("fire");
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState(ElementColors[element][0]);
  const [description, setDescription] = useState("");
  const [showSettings, setShowSettings] = useState(false); // Dodane zmienne

  const handleElementChange = (event) => {
    const selectedElement = event.target.value;
    setElement(selectedElement);
    setSelectedColor(ElementColors[selectedElement][0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tutaj można dodać logikę zapisu danych profilu, np. do bazy danych
    // Przykładowo:
    // saveProfileData({ element, name, selectedColor, description });
  };

  return (
    <Box bgcolor="#000000" color="#FFFFFF" minHeight="100vh" p={4}>
      <Typography variant="h4" mb={2}>
        User Profile
      </Typography>
      {/* Wyświetlanie zapisanych informacji */}
      <Box mb={4}>
        <Typography variant="h6">Zapisane informacje:</Typography>
        <Typography variant="body1">
          <strong>Element:</strong> {element}
        </Typography>
        <Typography variant="body1">
          <strong>Name:</strong> {name}
        </Typography>
        <Typography variant="body1">
          <strong>Color:</strong> {selectedColor}
        </Typography>
        <Typography variant="body1">
          <strong>Description:</strong> {description}
        </Typography>
      </Box>
      <Typography
        variant="body1"
        mb={2}
        style={{ cursor: "pointer" }}
        onClick={() => setShowSettings(!showSettings)}
      >
        Ustawienia
      </Typography>
      {showSettings && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="element-label" style={{ color: "#FFFFFF" }}>
                Element
              </InputLabel>
              <Select
                labelId="element-label"
                id="element-select"
                value={element}
                label="Element"
                onChange={handleElementChange}
                inputProps={{ style: { color: "#FFFFFF" } }}
              >
                {Object.keys(ElementColors).map((key) => (
                  <MenuItem key={key} value={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={handleNameChange}
              sx={{ mt: 2 }}
              InputLabelProps={{ style: { color: "#FFFFFF" } }}
              InputProps={{ style: { color: "#FFFFFF" } }}
            />
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id="color-label" style={{ color: "#FFFFFF" }}>
                Color
              </InputLabel>
              <Select
                labelId="color-label"
                id="color-select"
                value={selectedColor}
                label="Color"
                onChange={handleColorChange}
                inputProps={{ style: { color: "#FFFFFF" } }}
              >
                {ElementColors[element].map((color, index) => (
                  <MenuItem key={index} value={color}>
                    {color}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Description"
              multiline
              rows={4}
              fullWidth
              value={description}
              onChange={handleDescriptionChange}
              sx={{ mt: 2 }}
              InputLabelProps={{ style: { color: "#FFFFFF" } }}
              InputProps={{ style: { color: "#FFFFFF" } }}
            />
            <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
              Save
            </Button>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                backgroundColor: selectedColor,
                mx: "auto",
                my: 2,
              }}
            >
              {element.toUpperCase()}
            </Avatar>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Profile;
