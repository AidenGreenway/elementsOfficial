import { useState } from "react";

import YourContext from "./YourContext";
import aird from "../images/aird.png";
import earthd from "../images/earthd.png";
import fired from "../images/fired.jpg";
import waterd from "../images/waterd.png";

export const YourContextProvider = ({ children }) => {
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
