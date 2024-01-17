import { createContext, useState } from "react";

const YourContext = createContext();

export const YourContextProvider = ({ children }) => {
  const [yourValue, setYourValue] = useState(""); // Przykładowy stan
  const [selectedElement, setSelectedElement] = useState(""); // Nowy stan dla wybranego żywiołu
  const [elementImages] = useState({
    fire: fired,
    water: waterd,
    air: aird,
    earth: earthd,
  });

  const setElementIcon = (element) => {
    setYourValue(element);
  };

  // Dodaj funkcję do ustawiania wybranego żywiołu
  const setSelectedElement = (element) => {
    setSelectedElement(element);
  };

  return (
    <YourContext.Provider
      value={{ yourValue, setElementIcon, elementImages, selectedElement, setSelectedElement }}
    >
      {children}
    </YourContext.Provider>
  );
};
