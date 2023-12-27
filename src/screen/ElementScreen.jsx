import { useLocation } from "react-router-dom";
import Air from "src/elements/Air";
import Earth from "src/elements/Earth";
import Fire from "src/elements/Fire";
import Water from "src/elements/Water";

import { ELEMENTS } from "../constants";

export const ElementScreen = () => {
  const location = useLocation();

  const elementType = location.pathname?.split("/")?.[2];

  switch (elementType) {
    case ELEMENTS.FIRE:
      return <Fire />;
    case ELEMENTS.EARTH:
      return <Earth />;
    case ELEMENTS.AIR:
      return <Air />;
    case ELEMENTS.WATER:
      return <Water />;
  }
};
