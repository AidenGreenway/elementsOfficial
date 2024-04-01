import { useEffect, useState } from "react";
import aird from "../diaryImages/air/air3.jpg";
import earthd from "../diaryImages/earth/earth4.png";
import fired from "../diaryImages/fire/fire4.png";
import waterd from "../diaryImages/water/water3.png";
import YourContext from "../elementContext/ElementContext";

export const ElementContextProvider = ({ children }) => {
  const [elementValues, setElementValues] = useState({
    selectedZodiacSign: localStorage.getItem("selectedZodiacSign") || "",
    selectedStrength: localStorage.getItem("selectedStrength") || "",
    selectedWeakness: localStorage.getItem("selectedWeakness") || "",
    selectedExercise: localStorage.getItem("selectedExercise") || "",
    selectedStrategy: localStorage.getItem("selectedStrategy") || "",
    yourValue: localStorage.getItem("yourValue") || "",
    username: localStorage.getItem("username") || "",
    email: localStorage.getItem("email") || "", // Pobranie wartości email z localStorage
  });

  useEffect(() => {
    const storedElement = localStorage.getItem("yourValue");

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
    setElementValues((prevValues) => ({
      ...prevValues,
      yourValue: element,
    }));

    localStorage.setItem("selectedZodiacSign", "");
    localStorage.setItem("selectedStrength", "");
    localStorage.setItem("selectedWeakness", "");
    localStorage.setItem("selectedExercise", "");
    localStorage.setItem("selectedStrategy", "");
    localStorage.setItem("yourValue", element);
  };

  const setElementInfo = (info) => {
    setElementValues((prevValues) => {
      const updatedValues = { ...prevValues, ...info };
      localStorage.setItem("email", info.email); // Dodanie zapisu email do localStorage
      return updatedValues;
    });
  };

  return (
    <YourContext.Provider
      value={{ ...elementValues, setElementIcon, setElementInfo, elementImages }}
    >
      {children}
    </YourContext.Provider>
  );
};
