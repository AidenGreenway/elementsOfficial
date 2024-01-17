import { useLocation } from "react-router-dom";
import Air from "src/Elements/Air";
import Earth from "src/Elements/Earth";
import Fire from "src/Elements/Fire";
import Water from "src/Elements/Water";

import { ELEMENTS } from "../Constants";

export const ElementScreen = () => {
  const location = useLocation();

  const elementType = location.pathname?.split("/")?.[3];

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
