import { useEffect, useState } from "react";
import aird from "../diaryImages/air/air3.jpg";
import earthd from "../diaryImages/earth/earth4.png";
import fired from "../diaryImages/fire/fire4.png";
import waterd from "../diaryImages/water/water3.png";
import YourContext from "../elementContext/ElementContext";

export const ElementContextProvider = ({ children }) => {
  const [elementValues, setElementValues] = useState({
    yourValue: "",
    selectedZodiacSign: "",
    selectedStrength: "",
    selectedWeakness: "",
    selectedExercise: "",
    selectedStrategy: "",
    username: localStorage.getItem("username") || "", // Pobierz username z localStorage
  });

  const [elementImages] = useState({
    fire: fired,
    water: waterd,
    air: aird,
    earth: earthd,
  });
  useEffect(() => {
    console.log("Username from context:", elementValues.username);
  }, [elementValues.username]);

  const setElementIcon = (element) => {
    setElementValues((prevValues) => ({ ...prevValues, yourValue: element }));
  };

  const setElementInfo = (info) => {
    setElementValues((prevValues) => ({ ...prevValues, ...info }));
  };

  return (
    <YourContext.Provider
      value={{ ...elementValues, setElementIcon, setElementInfo, elementImages }}
    >
      {children}
    </YourContext.Provider>
  );
};
