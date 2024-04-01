import { useEffect, useState } from "react";
import aird from "../diaryImages/air/air3.jpg";
import earthd from "../diaryImages/earth/earth4.png";
import fired from "../diaryImages/fire/fire4.png";
import waterd from "../diaryImages/water/water3.png";
import { auth } from "../firebaseConfig";
import ElementContext from "./ElementContext";

export const ElementContextProvider = ({ children }) => {
  const [elementValues, setElementValues] = useState({
    selectedZodiacSign: localStorage.getItem("selectedZodiacSign") || "",
    selectedStrength: localStorage.getItem("selectedStrength") || "",
    selectedWeakness: localStorage.getItem("selectedWeakness") || "",
    selectedExercise: localStorage.getItem("selectedExercise") || "",
    selectedStrategy: localStorage.getItem("selectedStrategy") || "",
    yourValue: localStorage.getItem("yourValue") || "",
    username: localStorage.getItem("username") || "",
    email: "", // Usuwamy wartość email z localStorage
  });
  const setElementInfo = (info) => {
    setElementValues((prevValues) => ({
      ...prevValues,
      ...info,
    }));
  };
  useEffect(() => {
    const storedElement = localStorage.getItem("yourValue");

    if (storedElement) {
      setElementIcon(storedElement);
    }

    // Pobieramy bieżącego użytkownika Firebase i aktualizujemy jego adres e-mail
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setElementInfo({ email: user.email });
      }
    });

    return () => unsubscribe();
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

  return (
    <ElementContext.Provider
      value={{ ...elementValues, setElementIcon, setElementInfo, elementImages }}
    >
      {children}
    </ElementContext.Provider>
  );
};

export default ElementContext;
