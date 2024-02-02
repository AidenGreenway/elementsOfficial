import { useState } from "react";

import aird from "../diaryImages/air/air3.jpg";
import earthd from "../diaryImages/earth/earth4.png";
import fired from "../diaryImages/fire/fire4.png";
import waterd from "../diaryImages/water/water3.png";
import YourContext from "./ElementContext";

export const ElementContextProvider = ({ children }) => {
  const [yourValue, setYourValue] = useState(""); // Przykładowy stan
  const [elementImages] = useState({
    fire: fired,
    water: waterd,
    air: aird,
    earth: earthd,
  });

  const setElementIcon = (element) => {
    setYourValue(element);
  };

  return (
    <YourContext.Provider value={{ yourValue, setElementIcon, elementImages }}>
      {children}
    </YourContext.Provider>
  );
};
