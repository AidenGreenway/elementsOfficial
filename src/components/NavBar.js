import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Drawer, List, ListItem, ListItemText, styled } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import YourContext from "src/YourContextFile/YourContext";

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 240,
    backgroundColor: "black",
    color: "white",
    paddingTop: theme.spacing(4),
  },
}));

const getHoverStyle = (element) => {
  switch (element) {
    case "Home":
      return { "&:hover": { borderBottom: "2px solid white" } };
    case "CourseModules":
      return { "&:hover": { borderBottom: "2px solid green" } };
    case "Challenges":
      return { "&:hover": { borderBottom: "2px solid blue" } };
    case "Forum":
      return { "&:hover": { borderBottom: "2px solid yellow" } };
    case "Profile":
      return { "&:hover": { borderBottom: "2px solid #ff5a00" } };
    default:
      return {};
  }
};

const NavBar = () => {
  const goBack = () => {
    window.history.back();
  };

  const { elementImages, yourValue } = useContext(YourContext);

  console.log({ elementImages, yourValue });

  const menuItems = ["Home", "CourseModules", "Challenges", "Forum", "Profile"];

  return (
    <CustomDrawer variant="permanent" anchor="left">
      <List>
        <ListItem>
          <Button onClick={goBack} variant="text" style={{ color: "white" }}>
            <ArrowBackIcon />
          </Button>
        </ListItem>
        {menuItems.map((item) => (
          <ListItem button component={Link} to={`/${item}`} sx={getHoverStyle(item)} key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
        <ListItem>
          {elementImages?.[yourValue] && (
            <img src={elementImages?.[yourValue]} style={{ width: "50px", height: "50px" }} />
          )}
        </ListItem>
      </List>
    </CustomDrawer>
  );
};

export default NavBar;
