import { useLocation } from "react-router-dom";

import AirChallange from "../Challenges/AirChallenge";
import EarthChallenge from "../Challenges/EarthChallenge";
import FireChallenge from "../Challenges/FireChallenge";
import WaterChallenge from "../Challenges/WaterChallenge";
import { ELEMENTS } from "../Constants";

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
      return <AirChallange />;
    case ELEMENTS.WATER:
      return <WaterChallenge />;
  }
};
