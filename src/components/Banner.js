import { useContext, useState } from "react";

import YourContext from "../YourContextFile/YourContext";
import videoSource from "../assets/background.mp4";
import aird1 from "../diaryImages/air/air2.jpg";
import aird from "../diaryImages/air/air3.jpg";
import earthGif from "../diaryImages/earth/earth4.png";
import earthGif1 from "../diaryImages/earth/earth5.png";
import fireGif1 from "../diaryImages/fire/fire3.jpg";
import fireGif from "../diaryImages/fire/fire4.png";
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
    colors: ["#355E3B", "#4CBB17"],
    image: earthGif,
    altImage: earthGif1,
  },
};

const Banner = () => {
  const { setElementIcon } = useContext(YourContext);
  const [hoveredElement, setHoveredElement] = useState("");
  const [otherIconsVisible, setOtherIconsVisible] = useState(true);

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

  return (
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
        {hoveredElement ? (
          <>
            <div
              style={{
                position: "absolute",
                left: "-120px",
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
        ) : null}

        <div
          style={{
            padding: "40px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
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
                    ? ELEMENT_DESCRIPTIONS.fire.altImage
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
                    ? ELEMENT_DESCRIPTIONS.water.altImage
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
                  hoveredElement === "air"
                    ? ELEMENT_DESCRIPTIONS.air.altImage
                    : ELEMENT_DESCRIPTIONS.air.image
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
                    ? ELEMENT_DESCRIPTIONS.earth.altImage
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

          <p
            style={{
              marginBottom: "10px",
              fontFamily: "Kalnia, sans-serif",
              fontSize: "14px",
              color: hoveredElement ? ELEMENT_DESCRIPTIONS[hoveredElement].colors[1] : "#fff",
            }}
          >
            CHOOSE ELEMENT
          </p>

          <video
            autoPlay
            loop
            muted
            controls
            src={videoSource}
            style={{
              width: "60%",
              height: "auto",
              borderRadius: "8px",
              border: "1px solid white",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              marginTop: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
