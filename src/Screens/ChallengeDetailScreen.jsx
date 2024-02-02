import { useLocation } from "react-router-dom";

import { AirChallenge, EarthChallenge, FireChallenge, WaterChallenge } from "src/components";

import { ELEMENTS } from "src/constants";

export const ChallengeDetailScreen = () => {
  const location = useLocation();

  const elementType = location.pathname?.split("/")?.[3];

  console.log({ elementType });

  switch (elementType) {
    case ELEMENTS.FIRE:
      return <FireChallenge />;

    case ELEMENTS.EARTH:
      return <EarthChallenge />;

    case ELEMENTS.AIR:
      return <AirChallenge />;

    case ELEMENTS.WATER:
      return <WaterChallenge />;
  }
};

