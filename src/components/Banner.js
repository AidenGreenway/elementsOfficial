import { useContext, useState } from "react";

import YourContext from "../YourContextFile/YourContext";
import videoSource from "../assets/background.mp4";
import airGif from "../diaryImages/air/air3.jpg"; // Import pliku gif dla "Air"
import earthGif from "../diaryImages/earth/earth4.jpg"; // Import pliku gif dla "Earth"
import fireGif from "../diaryImages/fire/fire4.jpg"; // Import pliku gif dla "Fire"
import waterGif from "../diaryImages/water/water3.jpg"; // Import pliku gif dla "Water"

const Banner = () => {
  const { setElementIcon } = useContext(YourContext);
  const [element, setElement] = useState("");

  const handleElementSelection = (selectedElement) => {
    setElement(selectedElement);
    setElementIcon(selectedElement);
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
        <h1
          style={{
            marginBottom: "30px",
            fontFamily: "Kalnia, sans-serif",
            fontSize: "40px",
          }}
        >
          ELEMENTS
        </h1>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ marginRight: "20px" }}>
            <img
              src={fireGif}
              alt="Fire"
              onClick={() => handleElementSelection("fire")}
              style={{ cursor: "pointer", width: "100px", height: "100px" }}
            />
          </div>
          <div style={{ marginRight: "20px" }}>
            <img
              src={waterGif}
              alt="Water"
              onClick={() => handleElementSelection("water")}
              style={{ cursor: "pointer", width: "100px", height: "100px" }}
            />
          </div>
          <div style={{ marginRight: "20px" }}>
            <img
              src={airGif}
              alt="Air"
              onClick={() => handleElementSelection("air")}
              style={{ cursor: "pointer", width: "100px", height: "100px" }}
            />
          </div>
          <div>
            <img
              src={earthGif}
              alt="Earth"
              onClick={() => handleElementSelection("earth")}
              style={{ cursor: "pointer", width: "100px", height: "100px" }}
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
