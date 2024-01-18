import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import determineElement from "./YourElement";
import YourContext from "../ElementContext/YourContext";
import four from "../diaryImages/air/444.png"; // Obrazek początkowy
import aird1 from "../diaryImages/air/air2.jpg";
import aird from "../diaryImages/air/air3.jpg";
import dallair from "../diaryImages/air/dallair.png";
import dallearth from "../diaryImages/earth/dallearth.png";
import earthGif from "../diaryImages/earth/earth4.png";
import earthGif1 from "../diaryImages/earth/earth5.png";
import dallfire from "../diaryImages/fire/dallfire.png";
import fireGif1 from "../diaryImages/fire/fire3.jpg";
import fireGif from "../diaryImages/fire/fire4.png";
import dallwater from "../diaryImages/water/dallwater.png";
import waterGif from "../diaryImages/water/water3.png";
import waterGif1 from "../diaryImages/water/water33.png";

const ELEMENT_DESCRIPTIONS = {
  fire: {
    words: ["", "FIRE"],
    description:
      "Fire symbolizes passion, energy, and transformation. Discover your inner strength and motivation.",
    colors: ["#D70040", "#4A0404"],
    image: fireGif,
    altImage: fireGif1,
  },
  water: {
    words: ["", "WATER"],
    description:
      "Water represents emotions, intuition, and adaptation. Learn to flow with the stream of life.",
    colors: ["#1434A4", "#00FFFF"],
    image: waterGif,
    altImage: waterGif1,
  },
  air: {
    words: ["", "AIR"],
    description:
      "Air stands for intellect, communication, and creativity. Develop your thinking and self-expression skills.",
    colors: ["#ADD8E6", "white"],
    image: aird,
    altImage: aird1,
  },
  earth: {
    words: ["", "EARTH"],
    description:
      "Earth symbolizes stability, growth, and renewal. Find your roots and build solid foundations.",
    colors: ["#355E3B", "#7CFC00"],
    image: earthGif,
    altImage: earthGif1,
  },
};

const advices = [
  {
    element: "fire",
    text: "Fire can melt metals with low melting points, such as lead or aluminum.",
    color: "#D70040",
  },
  {
    element: "water",
    text: "Under certain conditions, water can exist in a triple-phase state, simultaneously as a solid (ice), liquid (water), and gas (water vapor).",
    color: "#00FFFF",
  },

  {
    element: "air",
    text: "Air pressure decreases with altitude, which is why it becomes more challenging to breathe at higher elevations.",
    color: "#87CEEB",
  },
  {
    element: "earth",
    text: "The Earth's crust is divided into tectonic plates that constantly move, leading to the formation of continents and geological phenomena like earthquakes and volcanoes.",
    color: "#90EE90",
  },

  {
    element: "fire",
    text: "Fire is the only element that humans can control and use for various purposes.",
    color: "#D70040",
  },
  {
    element: "water",
    text: "Water has the incredible ability to disperse sound, making it an excellent medium for underwater sound transmission.",
    color: "#00FFFF",
  },
  {
    element: "air",
    text: "Air is essential for human survival and contains approximately 78% nitrogen, 21% oxygen, and trace amounts of other gases.",
    color: "#87CEEB",
  },
  {
    element: "earth",
    text: "Soil is a vital part of Earth's ecosystem and contains a rich diversity of organisms, including bacteria, fungi, and insects, essential for plant growth.",
    color: "#90EE90",
  },
];
const texts = [
  "Discover how understanding the four elements - Fire, Water, Air, and Earth - can help you in your journey of self-development. Embrace the unique qualities of each element to find balance and harmony in your life.",
  "Explore the power of the four elements - Fire, Water, Air, and Earth - and see how they influence your daily life. Allow yourself a deeper understanding of these fundamental forces to better harmonize with the world around you.",
];
const Banner = () => {
  const { setElementIcon } = useContext(YourContext);
  const [hoveredElement, setHoveredElement] = useState("");
  const [otherIconsVisible, setOtherIconsVisible] = useState(true);

  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [astroElement, setAstroElement] = useState("");
  const [selectedElement, setSelectedElement] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const element = determineElement(parseInt(birthDay), parseInt(birthMonth));
    setAstroElement(element);
    setSelectedElement(element);
  };
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/dashboard/profile");
  };
  const handleClick = (element) => {
    setHoveredElement(element);
    setElementIcon(element);
    switch (element) {
      case "fire":
        navigate("/dashboard/courseModules/fire");
        break;
      case "water":
        navigate("/dashboard/courseModules/water");
        break;
      case "air":
        navigate("/dashboard/courseModules/air");
        break;
      case "earth":
        navigate("/dashboard/courseModules/earth");
        break;
      default:
        break;
    }
  };
  const handleMouseOver = (element) => {
    setHoveredElement(element);
    setOtherIconsVisible(false);
  };

  const handleMouseOut = () => {
    setHoveredElement("");
    setOtherIconsVisible(true);
  };

  const getBackgroundColor = () => {
    if (hoveredElement) {
      return ELEMENT_DESCRIPTIONS[hoveredElement].colors[0];
    }
    return "black";
  };

  const getTextColor = () => {
    if (hoveredElement) {
      return ELEMENT_DESCRIPTIONS[hoveredElement].colors[1];
    }
    return "#000";
  };

  const getCurrentAltImage = () => {
    if (hoveredElement) {
      return ELEMENT_DESCRIPTIONS[hoveredElement].altImage;
    }
    return null;
  };
  const [currentAdviceIndex, setCurrentAdviceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 10000); // Zmienia indeks tekstu co 7 sekund

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdviceIndex((prevIndex) => (prevIndex + 1) % advices.length);
    }, 7000); // Zmienia poradę co 5 sekund

    return () => clearInterval(interval);
  }, []);

  const infoContent = (
    <Box
      sx={{
        position: "absolute",
        left: 640,
        top: 140,
        transform: "translateY(-50%)",
        width: 250,
        display: otherIconsVisible ? "block" : "none",
        color: "white",
        textAlign: "end",
        padding: "0 20px",
      }}
    >
      <Typography
        key={currentTextIndex} // Dodaj klucz zależny od zmieniającego się indeksu
        fontFamily="The Next Font"
        fontSize="23px"
        className="animate__animated animate__bounceInDown" // Twoja klasa animacji
      >
        {texts[currentTextIndex]}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        transition: "opacity 0.4s ease-in-out", // Smooth transition for opacity
      }}
    >
      <div
        style={{
          backgroundColor: getBackgroundColor(),
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: getBackgroundColor(),
          }}
        >
          {hoveredElement === "" && (
            <>
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "30px",
                    left: "-240px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "15px",
                      textAlign: "left",
                      marginBottom: "-12px",
                    }}
                  >
                    put your birthday here
                  </Typography>
                  <TextField
                    type="number"
                    value={birthDay}
                    onChange={(e) => setBirthDay(e.target.value)}
                    placeholder="day"
                    margin="normal"
                    InputLabelProps={{
                      style: { color: "red" },
                    }}
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderColor: "#fff",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                    }}
                  />
                  <TextField
                    type="number"
                    value={birthMonth}
                    onChange={(e) => setBirthMonth(e.target.value)}
                    placeholder="month"
                    margin="dense"
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderColor: "#fff",
                        marginTop: "-10px",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    sx={{
                      textAlign: "left",
                      right: 0,
                      bottom: -10,
                      color: "white",
                      border: "1px solid white",
                      "&:hover": {
                        backgroundColor: "white", // Kolor tła przy najechaniu
                        color: "black", // Kolor tekstu przy najechaniu
                      },
                    }}
                  >
                    check your element
                  </Button>
                  <Box
                    sx={{
                      position: "absolute",
                      right: 0, // Przesuwa element na prawo
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    {infoContent}
                  </Box>
                </Box>
                {astroElement && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "220px",
                      left: "-240px",
                      color: "white",
                    }}
                  >
                    <Typography variant="body1" style={{ color: "#fff", fontSize: "20px" }}>
                      <Button
                        type="submit"
                        sx={{
                          alignItems: "left",
                          color: "black",
                          border: "1px solid white",
                          backgroundColor:
                            selectedElement === "fire"
                              ? "#D70040"
                              : selectedElement === "water"
                                ? "#00FFFF"
                                : selectedElement === "air"
                                  ? "#ADD8E6"
                                  : selectedElement === "earth"
                                    ? "lightGreen"
                                    : "red", // Ustaw kolor guzika na podstawie wybranego żywiołu
                          "&:hover": {
                            backgroundColor: "black", // Kolor tła przy najechaniu
                            color:
                              selectedElement === "fire"
                                ? "#D70040"
                                : selectedElement === "water"
                                  ? "#00FFFF"
                                  : selectedElement === "air"
                                    ? "#ADD8E6"
                                    : selectedElement === "earth"
                                      ? "lightGreen"
                                      : "darkRed", // Kolor tekstu przy najechaniu, użyj koloru wybranego żywiołu lub domyślnego "black"
                          },
                          marginTop: "20px", // Dodaj margines od góry
                        }}
                        //onClick={goToProfile} // Update with your desired path
                      >
                        create profil: {astroElement}
                      </Button>
                    </Typography>
                  </Box>
                )}
              </form>
            </>
          )}
          {hoveredElement && (
            <>
              <div
                style={{
                  position: "absolute",
                  left: "-140px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <p
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                    margin: 0,
                    color: ELEMENT_DESCRIPTIONS[hoveredElement].colors[0],
                    fontSize: "72px",
                    fontWeight: "bold",
                    fontFamily: "The Next Font",
                  }}
                >
                  {ELEMENT_DESCRIPTIONS[hoveredElement].words[0]}
                </p>
                <p
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                    margin: 0,
                    color: ELEMENT_DESCRIPTIONS[hoveredElement].colors[1],
                    fontSize: "72px",
                    fontWeight: "bold",
                    fontFamily: "The Next Font",
                  }}
                >
                  {ELEMENT_DESCRIPTIONS[hoveredElement].words[1]}
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "-190px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: ELEMENT_DESCRIPTIONS[hoveredElement].colors[0],
                  maxWidth: "250px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "32px",
                    fontWeight: "bold",
                    fontFamily: "The Next Font",
                    color: getTextColor(),
                  }}
                >
                  {ELEMENT_DESCRIPTIONS[hoveredElement].description}
                </p>
              </div>
            </>
          )}
          <div style={{ padding: "40px", textAlign: "center" }}>
            <h2
              style={{
                marginRight: "175px",
                marginBottom: "-20px",
                fontFamily: "Kalnia, sans-serif",
                fontSize: "12px",
                color: hoveredElement ? ELEMENT_DESCRIPTIONS[hoveredElement].colors[1] : "#fff",
              }}
            >
              Hello to your very first experience with
            </h2>
            <h1
              style={{
                marginRight: "210px",
                marginBottom: "30px",
                fontFamily: "The Next Font",
                fontSize: "40px",
                color: hoveredElement ? ELEMENT_DESCRIPTIONS[hoveredElement].colors[1] : "#fff",
              }}
            >
              ELEMENTS.
            </h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ marginRight: "20px" }}>
                <img
                  src={
                    hoveredElement === "fire"
                      ? getCurrentAltImage()
                      : ELEMENT_DESCRIPTIONS.fire.image
                  }
                  alt="Fire"
                  onClick={() => handleClick("fire")}
                  onMouseOver={() => handleMouseOver("fire")}
                  onMouseOut={handleMouseOut}
                  style={{
                    cursor: "pointer",
                    width: "100px",
                    height: "100px",
                    transition: "transform 0.3s ease-in-out",
                    opacity: hoveredElement === "fire" ? 1 : otherIconsVisible ? 1 : 0,
                  }}
                />
              </div>
              <div style={{ marginRight: "20px" }}>
                <img
                  src={
                    hoveredElement === "water"
                      ? getCurrentAltImage()
                      : ELEMENT_DESCRIPTIONS.water.image
                  }
                  alt="Water"
                  onClick={() => handleClick("water")}
                  onMouseOver={() => handleMouseOver("water")}
                  onMouseOut={handleMouseOut}
                  style={{
                    cursor: "pointer",
                    width: "100px",
                    height: "100px",
                    transition: "transform 0.3s ease-in-out",
                    opacity: hoveredElement === "water" ? 1 : otherIconsVisible ? 1 : 0,
                  }}
                />
              </div>
              <div style={{ marginRight: "20px" }}>
                <img
                  src={
                    hoveredElement === "air" ? getCurrentAltImage() : ELEMENT_DESCRIPTIONS.air.image
                  }
                  alt="Air"
                  onClick={() => handleClick("air")}
                  onMouseOver={() => handleMouseOver("air")}
                  onMouseOut={handleMouseOut}
                  style={{
                    cursor: "pointer",
                    width: "100px",
                    height: "100px",
                    transition: "transform 0.3s ease-in-out",
                    opacity: hoveredElement === "air" ? 1 : otherIconsVisible ? 1 : 0,
                  }}
                />
              </div>
              <div>
                <img
                  src={
                    hoveredElement === "earth"
                      ? getCurrentAltImage()
                      : ELEMENT_DESCRIPTIONS.earth.image
                  }
                  alt="Earth"
                  onClick={() => handleClick("earth")}
                  onMouseOver={() => handleMouseOver("earth")}
                  onMouseOut={handleMouseOut}
                  style={{
                    cursor: "pointer",
                    width: "100px",
                    height: "100px",
                    transition: "transform 0.3s ease-in-out",
                    opacity: hoveredElement === "earth" ? 1 : otherIconsVisible ? 1 : 0,
                  }}
                />
              </div>
            </div>
            <img
              src={
                hoveredElement === "fire"
                  ? dallfire
                  : hoveredElement === "water"
                    ? dallwater
                    : hoveredElement === "air"
                      ? dallair
                      : hoveredElement === "earth"
                        ? dallearth
                        : four
              }
              style={{ width: "50%", height: "auto", marginTop: "20px" }}
            />
            <div
              key={currentAdviceIndex}
              className="animate__animated animate__bounceInUp"
              style={{
                position: "absolute",
                bottom: "70px",
                left: "-241px",
                color: advices[currentAdviceIndex].color,
                fontSize: "18px",
                fontFamily: "The Next Font",
                maxWidth: "280px",
                textAlign: "left",
                opacity: hoveredElement === "" ? 1 : 0,
              }}
            >
              <h3>{advices[currentAdviceIndex].text}</h3>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Banner;
