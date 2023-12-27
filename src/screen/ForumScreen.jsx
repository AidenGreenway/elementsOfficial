import { useLocation } from "react-router-dom";
import { AirBlog } from "src/Blog/AirBlog";
import EarthBlog from "src/Blog/EarthBlog";
import FireBlog from "src/Blog/FireBlog";
import WaterBlog from "src/Blog/WaterBlog";
import { ELEMENTS } from "src/constants";

export const ForumScreen = () => {
  const location = useLocation();

  const elementType = location.pathname?.split("/")?.[2];

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
