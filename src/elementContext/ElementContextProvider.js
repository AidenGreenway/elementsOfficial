import { useEffect, useState } from "react";
import aird from "../diaryImages/air/air3.jpg";
import earthd from "../diaryImages/earth/earth4.png";
import fired from "../diaryImages/fire/fire4.png";
import waterd from "../diaryImages/water/water3.png";
import YourContext from "../elementContext/ElementContext";

export const ElementContextProvider = ({ children }) => {
  const [elementValues, setElementValues] = useState({
    yourValue: "",
    selectedZodiacSign: localStorage.getItem("selectedZodiacSign") || "",
    selectedStrength: localStorage.getItem("selectedStrength") || "",
    selectedWeakness: localStorage.getItem("selectedWeakness") || "",
    selectedExercise: localStorage.getItem("selectedExercise") || "",
    selectedStrategy: localStorage.getItem("selectedStrategy") || "",
    username: localStorage.getItem("username") || "", // Pobierz username z localStorage
  });
  useEffect(() => {
    // Pobierz wybrany element z pamięci lokalnej
    const storedElement = localStorage.getItem("selectedElement");

    // Jeśli jest zapisany, ustaw go jako ikonę
    if (storedElement) {
      setElementIcon(storedElement);
    }
  }, []);
  const [elementImages] = useState({
    fire: fired,
    water: waterd,
    air: aird,
    earth: earthd,
  });

  const setElementIcon = (element) => {
    setElementValues((prevValues) => ({ ...prevValues, yourValue: element }));
  };

  const setElementInfo = (info) => {
    if (info && Object.keys(info).length > 0) {
      setElementValues((prevValues) => ({ ...prevValues, ...info }));
    }
  };

  return (
    <YourContext.Provider
      value={{ ...elementValues, setElementIcon, setElementInfo, elementImages }}
    >
      {children}
    </YourContext.Provider>
  );
};
