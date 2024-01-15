import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";

import YourContext from "../YourContextFile/YourContext";
import determineElement from "../components/YourElement"; // Importuj funkcję z nowego komponentu
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
    text: "Ignite your ambitions. Embrace challenges as opportunities to grow",
    color: "#D70040",
  }, // Example color for fire
  {
    element: "water",
    text: "Flow like water. Be adaptable in your approach .",
    color: "#00FFFF",
  }, // Example color for water
  {
    element: "air",
    text: "Let your thoughts soar like the wind. Cultivate clear communication",
    color: "#87CEEB",
  }, // Example color for air
  {
    element: "earth",
    text: "Grow roots to stand tall. Embrace stability and continuous growth",
    color: "darkGreen",
  }, // Example color for earth
];
const Banner = () => {
  const { setElementIcon } = useContext(YourContext);
  const [hoveredElement, setHoveredElement] = useState("");
  const [otherIconsVisible, setOtherIconsVisible] = useState(true);

  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [astroElement, setAstroElement] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const element = determineElement(parseInt(birthDay), parseInt(birthMonth));
    setAstroElement(element);
  };

  const handleClick = (element) => {
    setHoveredElement(element);
    setElementIcon(element);
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

  const getCurrentImage = () => {
    if (hoveredElement) {
      return ELEMENT_DESCRIPTIONS[hoveredElement].image;
    }
    return null;
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
      setCurrentAdviceIndex((prevIndex) => (prevIndex + 1) % advices.length);
    }, 7000); // Zmiana rady co 3 sekundy

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
        fontFamily="The Next Font"
        fontSize="23px"
        sx={
          {
            // Tutaj możesz dodać dodatkowe style specyficzne dla Typography, jeśli są potrzebne
          }
        }
      >
        Discover how understanding the four elements - Fire, Water, Air, and Earth - can help you in
        your journey of self-development. Embrace the unique qualities of each element to find
        balance and harmony in your life.
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
          transition: "opacity 0.4s ease-in-out", // Smooth transition for opacity
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
                    // border: "1px white solid",
                  }}
                >
                  <TextField
                    type="number"
                    value={birthDay}
                    onChange={(e) => setBirthDay(e.target.value)}
                    placeholder="day"
                    margin="normal"
                    InputLabelProps={{
                      style: { color: "#fff" },
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
                    margin="normal"
                    InputLabelProps={{
                      style: { color: "#fff" },
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
                  <Button
                    type="submit"
                    sx={{
                      textAlign: "left",
                      right: 0,
                      color: "white",
                      border: "1px solid white",
                      "&:hover": {
                        backgroundColor: "white", // Kolor tła przy najechaniu
                        color: "black", // Kolor tekstu przy najechaniu
                        // Dodaj tutaj inne style, które chcesz zastosować podczas hover
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
                      // Dodaj inne style według potrzeb
                    }}
                  >
                    {infoContent}
                  </Box>
                </Box>
                {astroElement && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "230px",
                      left: "-240px",
                      color: "white",
                    }}
                  >
                    <Typography variant="body1" style={{ color: "#fff", fontSize: "20px" }}>
                      <Button
                        type="submit"
                        sx={{
                          textAlign: "left",
                          right: 0,
                          color: "white",
                          border: "1px solid white",

                          "&:hover": {
                            backgroundColor: "white", // Kolor tła przy najechaniu
                            color: "black", // Kolor tekstu przy najechaniu
                            // Dodaj tutaj inne style, które chcesz zastosować podczas hover
                          },
                        }}
                      >
                        Your element is: {astroElement}
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
              style={{
                position: "absolute",
                bottom: "140px",
                left: "-105px",
                transform: "translateX(-50%)",
                color: advices[currentAdviceIndex].color, // Dynamic color
                fontSize: "20px",
                fontFamily: "The Next Font",
                maxWidth: "350px",
                justifyContent: "left",
                opacity: hoveredElement === "" ? 1 : 0, // Visibility based on hoveredElement
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
