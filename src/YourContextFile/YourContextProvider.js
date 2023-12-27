import { useState } from "react";

import YourContext from "./YourContext";
import airGif from "../images/airgif.gif";
import earthGif from "../images/earthgif.gif";
import fireGif from "../images/firegif.gif";
import waterGif from "../images/watergif.gif";

export const YourContextProvider = ({ children }) => {
  const [yourValue, setYourValue] = useState(""); // Przykładowy stan
  const [elementImages] = useState({
    fire: fireGif,
    water: waterGif,
    air: airGif,
    earth: earthGif,
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
