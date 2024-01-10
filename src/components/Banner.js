import { useContext, useState } from "react";

import YourContext from "../YourContextFile/YourContext";
import videoSource from "../assets/background.mp4";
import airGif from "../diaryImages/air/air3.jpg";
import earthGif from "../diaryImages/earth/earth4.jpg";
import fireGif from "../diaryImages/fire/fire4.jpg";
import waterGif from "../diaryImages/water/water3.jpg";

const elementDescriptions = {
  fire: {
    words: ["fire", "burn"],
    description:
      "Fire symbolizes passion, energy, and transformation. Discover your inner strength and motivation.",
    color: "#D70040",
  },
  water: {
    words: ["water", "freeze"],
    description:
      "Water represents emotions, intuition, and adaptation. Learn to flow with the stream of life.",
    color: "#1F51FF",
  },
  air: {
    words: ["air", "aware"],
    description:
      "Air stands for intellect, communication, and creativity. Develop your thinking and self-expression skills.",
    color: "#F0FFFF",
  },
  earth: {
    words: ["earth", "stable"],
    description:
      "Earth symbolizes stability, growth, and renewal. Find your roots and build solid foundations.",
    color: "#009E60",
  },
};

const VerticalText = ({ word, color }) => (
  <p
    style={{
      writingMode: "vertical-rl",
      textOrientation: "upright",
      margin: 0,
      color,
      fontSize: "72px",
      fontWeight: "bold",
      fontFamily: "The Next Font",
    }}
  >
    {word}
  </p>
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

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "700px",
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
              left: "-120px",
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
              right: "-190px",
              top: "50%",
              transform: "translateY(-50%)",
              color: elementDescriptions[hoveredElement].color,
              maxWidth: "250px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "28px",
                fontWeight: "bold",
                fontFamily: "The Next Font",
              }}
            >
              {elementDescriptions[hoveredElement].description}
            </p>
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
        <h2
          style={{
            marginBottom: "-20px",
            fontFamily: "Kalnia, sans-serif",
            fontSize: "12px",
            marginRight: "177px",
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
  );
};

export default Banner;
