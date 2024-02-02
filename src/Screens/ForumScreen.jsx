import { useLocation } from "react-router-dom";

import { AirBlog, EarthBlog, FireBlog, WaterBlog } from "src/components";

import { ELEMENTS } from "src/constants";

export const ForumScreen = () => {
  const location = useLocation();

  const elementType = location.pathname?.split("/")?.[3];

  switch (elementType) {
    case ELEMENTS.FIREBLOG:
      return <FireBlog />;

    case ELEMENTS.EARTHBLOG:
      return <EarthBlog />;

    case ELEMENTS.AIRBLOG:
      return <AirBlog />;

    case ELEMENTS.WATERBLOG:
      return <WaterBlog />;
  }
};

