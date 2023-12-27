import { useLocation } from "react-router-dom";

import AirChallange from "../challenges/AirChallenge";
import EarthChallenge from "../challenges/EarthChallenge";
import FireChallenge from "../challenges/FireChallenge";
import WaterChallenge from "../challenges/WaterChallenge";
import { ELEMENTS } from "../constants";

export const ChallengeDetailScreen = () => {
  const location = useLocation();

  const elementType = location.pathname?.split("/")?.[2];

  console.log({ elementType });

  switch (elementType) {
    case ELEMENTS.FIRE:
      return <FireChallenge />;
    case ELEMENTS.EARTH:
      return <EarthChallenge />;
    case ELEMENTS.AIR:
      return <AirChallange />;
    case ELEMENTS.WATER:
      return <WaterChallenge />;
  }
};
