import { Box } from "@mui/material";
import { useContext, useState } from "react";

import YourContext from "../YourContextFile/YourContext";
import videoSource from "../assets/background.mp4";
import airGif from "../diaryImages/air/air3.jpg";
import earthGif from "../diaryImages/earth/earth4.png";
import fireGif from "../diaryImages/fire/fire4.png";
import waterGif from "../diaryImages/water/water3.png";

const elementDescriptions = {
  fire: {
    words: ["", "burn"],
    description:
      "Fire symbolizes passion, energy, and transformation. Discover your inner strength and motivation.",
    colors: ["#D70040", "#4A0404"], // Dodaj kolory dla każdego słowa
  },
  water: {
    words: ["", "freeze"],
    description:
      "Water represents emotions, intuition, and adaptation. Learn to flow with the stream of life.",
    colors: ["#1434A4", "#00FFFF"], // Dodaj kolory dla każdego słowa
  },
  air: {
    words: ["", "aware"],
    description:
      "Air stands for intellect, communication, and creativity. Develop your thinking and self-expression skills.",
    colors: ["#ADD8E6", "white"], // Dodaj kolory dla każdego słowa
  },
  earth: {
    words: ["", "stable"],
    description:
      "Earth symbolizes stability, growth, and renewal. Find your roots and build solid foundations.",
    colors: ["#355E3B", "black"], // Dodaj kolory dla każdego słowa
  },
};

const VerticalText = ({ words, colors }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    {words.map((word, index) => (
      <p
        key={index}
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
          margin: 0,
          color: colors[index],
          fontSize: "72px",
          fontWeight: "bold",
          fontFamily: "The Next Font",
        }}
      >
        {word}
      </p>
    ))}
  </div>
);

const Banner = () => {
  const { setElementIcon } = useContext(YourContext);
  const [hoveredElement, setHoveredElement] = useState("");

  const handleClick = (element) => {
    setHoveredElement(element);
    setElementIcon(element); // Aktualizacja ikony w drawerze po kliknięciu
  };

  const handleMouseOver = (element) => {
    setHoveredElement(element);
  };

  const handleMouseOut = () => {
    setHoveredElement("");
  };

  const getBackgroundColor = () => {
    if (hoveredElement) {
      return elementDescriptions[hoveredElement].colors[0]; // Ustaw kolor tła dla pierwszego słowa
    } else {
      // Domyślny kolor tła strony, gdy nie najezdżamy na żadną ikonę
      return "black"; // Tutaj możesz ustawić dowolny kolor
    }
  };

  const getTextColor = () => {
    if (hoveredElement) {
      return elementDescriptions[hoveredElement].colors[1]; // Ustaw kolor tekstu dla drugiego słowa
    } else {
      // Domyślny kolor tekstu, gdy nie najezdżamy na żadną ikonę
      return "#000"; // Tutaj możesz ustawić dowolny kolor tekstu
    }
  };

  const getElementsTextColor = () => {
    if (hoveredElement) {
      return elementDescriptions[hoveredElement].colors[1]; // Ustaw kolor tekstu dla drugiego słowa
    } else {
      // Domyślny kolor tekstu, gdy nie najezdżamy na żadną ikonę
      return "#fff"; // Kolor tekstu "ELEMENTS" na stronie głównej
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: getBackgroundColor(), // Zmiana koloru tła strony
        // transition: "background-color 0.3s ease-in-out",
        minHeight: "100vh", // Ustal odpowiednią wysokość
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "700px",
          marginLeft: "210px",
          marginTop: "40px",
          backgroundColor: getBackgroundColor(), // Zmiana koloru tła strony
          color: "#fff",
        }}
      >
        {hoveredElement && (
          <>
            <div
              style={{
                position: "absolute",
                left: "-120px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <VerticalText
                words={elementDescriptions[hoveredElement].words}
                colors={elementDescriptions[hoveredElement].colors} // Przekaż kolory do komponentu VerticalText
              />
            </div>
            <div
              style={{
                position: "absolute",
                right: "-190px",
                top: "50%",
                transform: "translateY(-50%)",
                color: elementDescriptions[hoveredElement].colors[0], // Ustaw kolor tła dla pierwszego słowa
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
                  color: getTextColor(), // Ustaw kolor tekstu
                }}
              >
                {elementDescriptions[hoveredElement].description}
              </p>
            </div>
          </>
        )}

        <div
          style={{
            padding: "40px",
            textAlign: "center",
            //borderRadius: "8px",
            //  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{
              marginBottom: "-20px",
              fontFamily: "Kalnia, sans-serif",
              fontSize: "12px",
              marginRight: "177px",
              color: getElementsTextColor(),
            }}
          >
            Hello to your very first experience with
          </h2>

          <h1
            style={{
              marginBottom: "30px",
              fontFamily: "The Next Font",
              fontSize: "40px",
              marginRight: "215px",
              color: getElementsTextColor(), // Ustaw kolor tekstu "ELEMENTS"
            }}
          >
            ELEMENTS.
          </h1>

          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* Fire Element */}
            <div style={{ marginRight: "20px" }}>
              <img
                src={fireGif}
                alt="Fire"
                onClick={() => handleClick("fire")}
                onMouseOver={() => handleMouseOver("fire")}
                onMouseOut={handleMouseOut}
                style={{
                  cursor: "pointer",
                  width: "100px",
                  height: "100px",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </div>

            {/* Water Element */}
            <div style={{ marginRight: "20px" }}>
              <img
                src={waterGif}
                alt="Water"
                onClick={() => handleClick("water")}
                onMouseOver={() => handleMouseOver("water")}
                onMouseOut={handleMouseOut}
                style={{
                  cursor: "pointer",
                  width: "100px",
                  height: "100px",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </div>

            {/* Air Element */}
            <div style={{ marginRight: "20px" }}>
              <img
                src={airGif}
                alt="Air"
                onClick={() => handleClick("air")}
                onMouseOver={() => handleMouseOver("air")}
                onMouseOut={handleMouseOut}
                style={{
                  cursor: "pointer",
                  width: "100px",
                  height: "100px",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </div>

            {/* Earth Element */}
            <div>
              <img
                src={earthGif}
                alt="Earth"
                onClick={() => handleClick("earth")}
                onMouseOver={() => handleMouseOver("earth")}
                onMouseOut={handleMouseOut}
                style={{
                  cursor: "pointer",
                  width: "100px",
                  height: "100px",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </div>
          </div>

          <p
            style={{
              marginBottom: "10px",
              fontFamily: "Kalnia, sans-serif",
              fontSize: "14px",
              color: getElementsTextColor(),
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
    </Box>
  );
};

export default Banner;
