import { useLocation } from "react-router-dom";

import { Air, Earth, Fire, Water } from "src/components";

import { ELEMENTS } from "src/constants";

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

