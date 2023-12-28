import CloudIcon from "@mui/icons-material/Cloud";
import NatureIcon from "@mui/icons-material/Nature"; // Zamiennik dla Eco
import WavesIcon from "@mui/icons-material/Waves";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
// Inne propozycje:
// import TerrainIcon from "@mui/icons-material/Terrain";
// import FilterVintageIcon from "@mui/icons-material/FilterVintage";
// import GrainIcon from "@mui/icons-material/Grain";

const ElementIcons = {
  fire: <WhatshotIcon />,
  water: <WavesIcon />,
  air: <CloudIcon />,
  earth: <NatureIcon />, // Zamiennik dla Eco
  // Możesz użyć innych ikon z propozycji powyżej
};

const ElementColors = {
  fire: ["red", "yellow", "orange"],
  water: ["blue", "darkBlue", "grey"],
  air: ["#4B0082", "#00BFFF", "#FFFF00"],
  earth: ["#A52A2A", "#008000", "#808080"],
  // Dodaj więcej żywiołów i kolory
};

const Profile = () => {
  const [element, setElement] = useState("fire");
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState(ElementColors[element][0]);
  const [selectedAvatarColor, setSelectedAvatarColor] = useState(ElementColors[element][0]);
  const [description, setDescription] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  const handleInputChange = (event, inputType) => {
    const value = event.target.value;
    switch (inputType) {
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tutaj można dodać logikę zapisu danych profilu, np. do bazy danych
    // Przykładowo:
    // saveProfileData({ element, name, selectedColor, description });
  };

  return (
    <Box bgcolor="black" p={4} borderRadius={8} color="white">
      <Typography variant="h4" mb={2}>
        Twój Profil
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box mb={4} bgcolor={selectedColor} p={2} borderRadius={8}>
            <Typography variant="h6" style={{ marginLeft: "-400px", fontSize: "1.5rem" }}>
              Twoje dane:
            </Typography>
            <Avatar
              style={{
                width: 25,
                height: 25,
                backgroundColor: selectedAvatarColor,
                marginTop: -5,
                marginLeft: 295,
              }}
            >
              {ElementIcons[element]}
            </Avatar>
            <Typography variant="body2" color="white">
              <strong>Element:</strong> {element}
            </Typography>
            <Typography variant="body2" color="white">
              <strong>Imię:</strong> {name}
            </Typography>
            <Typography variant="body2" color="white">
              <strong>Opis:</strong> {description}
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={() => setShowSettings(!showSettings)}
            style={{ marginTop: 100, backgroundColor: selectedColor }}
          >
            Edytuj Profil
          </Button>
        </Grid>

        {showSettings && (
          <Grid item xs={12} md={6}>
            <Stack direction="column" spacing={2}>
              <TextField
                label="Zmień imię"
                fullWidth
                size="small"
                value={name}
                onChange={(event) => handleInputChange(event, "name")}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white", backgroundColor: "black", borderColor: "white" },
                }}
                style={{ marginTop: 8 }}
                variant="outlined"
              />
              <TextField
                label="Zmień opis"
                multiline
                rows={4}
                fullWidth
                size="small"
                value={description}
                onChange={(event) => handleInputChange(event, "description")}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white", backgroundColor: "black", borderColor: "white" },
                }}
                style={{ marginTop: 8 }}
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 2,
                }}
              >
                {ElementColors[element].map((color, index) => (
                  <Avatar
                    key={index}
                    onClick={() => setSelectedAvatarColor(color)}
                    style={{
                      backgroundColor: color,
                      cursor: "pointer",
                      margin: "0 5px",
                    }}
                  >
                    {ElementIcons[element]}
                  </Avatar>
                ))}
              </Box>
              <Box
                sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: 2,
                  display: "block",
                }}
              >
                <Button variant="contained" onClick={handleSubmit}>
                  Zapisz
                </Button>
              </Box>
            </Stack>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Profile;
