import { useContext, useState } from "react";

import YourContext from "../YourContextFile/YourContext";
import videoSource from "../assets/background.mp4";
import airGif from "../diaryImages/air/air3.jpg";
import earthGif from "../diaryImages/earth/earth4.jpg";
import fireGif from "../diaryImages/fire/fire4.jpg";
import waterGif from "../diaryImages/water/water3.jpg";

// Mapowanie żywiołów do par słów opisujących ich cechy oraz kolorów
const elementDescriptions = {
  fire: { words: ["Passion", "Energy"], color: "red" },
  water: { words: ["Flow", "Emotions"], color: "blue" },
  air: { words: ["Freedom", "Movement"], color: "lightblue" },
  earth: { words: ["Stability", "Discipline"], color: "green" },
};

// Komponent do wyświetlania tekstu w pionie
const VerticalText = ({ word, color }) => (
  <p
    style={{
      writingMode: "vertical-rl",
      textOrientation: "upright",
      margin: 0,
      color,
      fontSize: "24px",
      fontWeight: "bold",
      fontFamily: "The Next Font",
    }}
  >
    {word}
  </p>
);

const Banner = () => {
  const { setElementIcon } = useContext(YourContext);
  const [element, setElement] = useState("");
  const [hoveredElement, setHoveredElement] = useState(""); // Stan dla najechanego żywiołu

  const handleElementSelection = (selectedElement) => {
    setElement(selectedElement);
    setElementIcon(selectedElement);
  };

  const handleMouseOver = (element) => {
    setHoveredElement(element);
  };

  const handleMouseOut = () => {
    setHoveredElement("");
  };

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "600px",
        marginLeft: "210px",
        marginTop: "40px",
        color: "#fff",
      }}
    >
      {hoveredElement && (
        <>
          <div
            style={{
              position: "absolute",
              left: "-210px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <VerticalText
              word={elementDescriptions[hoveredElement].words[0]}
              color={elementDescriptions[hoveredElement].color}
            />
          </div>
          <div
            style={{
              position: "absolute",
              right: "-210px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <VerticalText
              word={elementDescriptions[hoveredElement].words[1]}
              color={elementDescriptions[hoveredElement].color}
            />
          </div>
        </>
      )}

      <div
        style={{
          backgroundColor: "none",
          padding: "40px",
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          color: "#fff",
        }}
      >
        <h2 style={{ marginBottom: "-20px", fontFamily: "Kalnia, sans-serif", fontSize: "12px" }}>
          Hello to your very first experience with
        </h2>

        <h1 style={{ marginBottom: "30px", fontFamily: "The Next Font", fontSize: "40px" }}>
          ELEMENTS
        </h1>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* Fire Element */}
          <div style={{ marginRight: "20px" }}>
            <img
              src={fireGif}
              alt="Fire"
              onClick={() => handleElementSelection("fire")}
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
              onClick={() => handleElementSelection("water")}
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
              onClick={() => handleElementSelection("air")}
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
              onClick={() => handleElementSelection("earth")}
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
      </div>

      <p
        style={{
          marginBottom: "10px",
          marginTop: "-25px",
          fontFamily: "Kalnia, sans-serif",
          fontSize: "14px",
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
  );
};

export default Banner;
