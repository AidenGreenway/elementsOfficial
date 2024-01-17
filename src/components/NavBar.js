import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExitToAppIcon from "@mui/icons-material/ExitToApp"; // Ikona wylogowania
import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText, styled } from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import YourContext from "src/ElementContext/YourContext";

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
      return { "&:hover": { borderBottom: "2px solid #D70040" } };
    case "Course Modules":
      return { "&:hover": { borderBottom: "2px solid #1434A4" } };
    case "Challenges":
      return { "&:hover": { borderBottom: "2px solid #ADD8E6" } };
    case "Forum":
      return { "&:hover": { borderBottom: "2px solid #7CFC00" } };
    case "Profile":
      return { "&:hover": { borderBottom: "2px solid purple" } };
    default:
      return {};
  }
};

const NavBar = () => {
  const navigate = useNavigate();

  const goBack = () => {
    window.history.back();
  };

  const handleLogout = () => {
    // Tutaj logika wylogowania
    navigate("/"); // Przekieruj na stronę główną / logowania
  };

  const { elementImages, yourValue } = useContext(YourContext);

  const menuItems = [
    { name: "Home", path: "dashboard/home" },
    { name: "Course Modules", path: "dashboard/courseModules" },
    { name: "Challenges", path: "dashboard/challenges" },
    { name: "Forum", path: "dashboard/forum" },
    { name: "Profile", path: "dashboard/profile" },
  ];

  return (
    <CustomDrawer variant="permanent" anchor="left">
      <List>
        <ListItem>
          <Button onClick={goBack} variant="text" style={{ color: "white" }}>
            <ArrowBackIcon />
          </Button>
        </ListItem>
        {menuItems.map((item) => (
          <ListItem
            button
            component={Link}
            to={`/${item.path}`}
            sx={getHoverStyle(item.name)}
            key={item.name}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
        {elementImages?.[yourValue] && (
          <ListItem>
            <ListItemIcon>
              <img
                src={elementImages?.[yourValue]}
                style={{ width: "50px", height: "50px" }}
                alt="Element"
              />
            </ListItemIcon>
          </ListItem>
        )}
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="" />
        </ListItem>
      </List>
    </CustomDrawer>
  );
};

export default NavBar;
