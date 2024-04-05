import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import four from "../diaryImages/air/444.png";
import dallair from "../diaryImages/air/dallair.png";
import dallearth from "../diaryImages/earth/dallearth.png";
import dallfire from "../diaryImages/fire/dallfire.png";
import dallwater from "../diaryImages/water/dallwater.png";
import YourContext from "../elementContext/ElementContext";
import { ELEMENT_DESCRIPTIONS, advices, texts } from "./ElementData";
import determineElement from "./YourElement";

export const Banner = () => {
  const { setElementIcon } = useContext(YourContext);
  const [hoveredElement, setHoveredElement] = useState("");
  const [otherIconsVisible, setOtherIconsVisible] = useState(true);
  const [birthDate, setBirthDate] = useState({ day: "", month: "" });

  const [astroElement, setAstroElement] = useState("");
  const [selectedElement, setSelectedElement] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentAdviceIndex, setCurrentAdviceIndex] = useState(0);
  const [elementSelected, setElementSelected] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { day, month } = birthDate;
    const element = determineElement(parseInt(day), parseInt(month));
    if (element !== "wrong data") {
      setAstroElement(element);
      setSelectedElement(element);
      setElementSelected(true);
    } else {
      alert("Invalid zodiac sign. Please provide a valid birth date.");
    }
  };

  const navigate = useNavigate();
  const goToProfile = () => {
    setElementIcon(astroElement);
    localStorage.setItem("selectedElement", astroElement);
    navigate(`/dashboard/profile?element=${astroElement}`);
  };

  const handleClick = (element) => {
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

  const getBackgroundColor = () =>
    hoveredElement ? ELEMENT_DESCRIPTIONS[hoveredElement].colors[0] : "black";
  const getTextColor = () =>
    hoveredElement ? ELEMENT_DESCRIPTIONS[hoveredElement].colors[1] : "#000";
  const getCurrentAltImage = () =>
    hoveredElement ? ELEMENT_DESCRIPTIONS[hoveredElement].altImage : null;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdviceIndex((prevIndex) => (prevIndex + 1) % advices.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const infoContent = (
    <Typography
      key={currentTextIndex}
      fontFamily="The Next Font"
      fontSize="23px"
      className="animate__animated animate__bounceInDown"
    >
      {texts[currentTextIndex]}
    </Typography>
  );

  return (
    <Box
      className="animate__animated animate__fadeIn"
      sx={{
        transition: "opacity 0.5s ease-in-out",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundColor: getBackgroundColor(),
          minHeight: "100vh",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "52%",
            marginLeft: "auto",
            marginRight: "auto",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {hoveredElement === "" && (
            <>
              <form onSubmit={handleSubmit}>
                <Box
                  className="animate__animated animate__bounceInDown"
                  sx={{
                    position: "absolute",
                    top: "10%",
                    left: "-33%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "15px",
                      textAlign: "left",
                    }}
                  >
                    put your birthday here
                  </Typography>

                  <TextField
                    type="number"
                    value={birthDate.day}
                    onChange={(e) => setBirthDate((prev) => ({ ...prev, day: e.target.value }))}
                    placeholder="day"
                    margin="normal"
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
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
                    value={birthDate.month}
                    onChange={(e) => setBirthDate((prev) => ({ ...prev, month: e.target.value }))}
                    placeholder="month"
                    margin="dense"
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
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
                      display: elementSelected ? "none" : "block",
                      textAlign: "center",
                      bottom: -10,
                      color: "white",
                      border: "1px solid white",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "black",
                      },
                    }}
                  >
                    check your element
                  </Button>
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
                                    : "red",
                          "&:hover": {
                            backgroundColor: "black",
                            color:
                              selectedElement === "fire"
                                ? "#D70040"
                                : selectedElement === "water"
                                  ? "#00FFFF"
                                  : selectedElement === "air"
                                    ? "#ADD8E6"
                                    : selectedElement === "earth"
                                      ? "lightGreen"
                                      : "darkRed",
                          },
                          position: "center",
                          marginTop: "20px",
                          marginLeft: "20px",
                        }}
                        onClick={goToProfile}
                      >
                        create profile: {astroElement}
                      </Button>
                    </Typography>
                  </Box>
                )}
              </form>
            </>
          )}

          {hoveredElement && (
            <>
              <Box
                style={{
                  position: "absolute",
                  left: "-140px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <Typography
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                    margin: 0,
                    fontSize: "72px",
                    fontWeight: "bold",
                    fontFamily: "The Next Font",
                    color: ELEMENT_DESCRIPTIONS[hoveredElement].colors[0],
                  }}
                >
                  {ELEMENT_DESCRIPTIONS[hoveredElement].words[0]}
                </Typography>

                <Typography
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                    margin: 0,
                    fontSize: "72px",
                    fontWeight: "bold",
                    fontFamily: "The Next Font",
                    color: ELEMENT_DESCRIPTIONS[hoveredElement].colors[1],
                  }}
                >
                  {ELEMENT_DESCRIPTIONS[hoveredElement].words[1]}
                </Typography>
              </Box>

              <Box
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
                <Typography
                  style={{
                    margin: 0,
                    fontSize: "32px",
                    fontWeight: "bold",
                    fontFamily: "The Next Font",
                    color: getTextColor(),
                  }}
                >
                  {ELEMENT_DESCRIPTIONS[hoveredElement].description}
                </Typography>
              </Box>
            </>
          )}

          <Box style={{ padding: "5%" }}>
            <h2
              style={{
                marginRight: "31.5%",
                marginBottom: "-30px",
                fontFamily: "unset",
                fontSize: "12px",
                color: hoveredElement ? ELEMENT_DESCRIPTIONS[hoveredElement].colors[1] : "#fff",
              }}
            >
              Welcome in your very first experience with:
            </h2>

            <h1
              style={{
                marginRight: "34%",
                fontFamily: "The Next Font",
                fontSize: "45px",
                color: hoveredElement ? ELEMENT_DESCRIPTIONS[hoveredElement].colors[1] : "#fff",
              }}
            >
              ELEMENTS.
            </h1>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              {Object.keys(ELEMENT_DESCRIPTIONS).map((elementKey, index) => (
                <Box key={index} style={{ marginRight: "20px" }}>
                  <img
                    src={
                      hoveredElement === elementKey
                        ? getCurrentAltImage()
                        : ELEMENT_DESCRIPTIONS[elementKey].image
                    }
                    alt={elementKey}
                    onClick={() => handleClick(elementKey)}
                    onMouseOver={() => handleMouseOver(elementKey)}
                    onMouseOut={handleMouseOut}
                    style={{
                      cursor: "pointer",
                      width: "100px",
                      height: "100px",
                      transition: "transform 0.3s ease-in-out",
                      opacity: hoveredElement === elementKey ? 1 : otherIconsVisible ? 1 : 0,
                    }}
                  />
                </Box>
              ))}
            </Box>
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
              alt={hoveredElement}
            />
            <Box
              sx={{
                position: "absolute",
                left: "98%",
                top: "45%",
                transform: "translateY(-50%)",
                width: "35%",
                display: otherIconsVisible ? "block" : "none",
                color: "white",
                textAlign: "end",
              }}
            >
              {infoContent}
            </Box>
            <Box
              key={currentAdviceIndex}
              className="animate__animated animate__bounceInUp"
              sx={{
                position: "absolute",
                bottom: "15%",
                left: "-33%",
                color: advices[currentAdviceIndex].color,
                fontSize: "18px",
                fontFamily: "The Next Font",
                maxWidth: "40%",
                textAlign: "left",
                opacity: hoveredElement === "" ? 1 : 0,
              }}
            >
              <h3>{advices[currentAdviceIndex].text}</h3>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
