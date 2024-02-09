import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText, styled } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import YourContext from "src/elementContext/ElementContext";

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 240,
    backgroundColor: "black",
    color: "white",
    paddingTop: theme.spacing(4),
  },
}));

const getHoverStyle = (element, selectedItem) => {
  switch (element) {
    case "Home":
      return selectedItem === element
        ? { borderBottom: "2px solid #D70040" }
        : { "&:hover": { borderBottom: "2px solid #D70040" } };

    case "Course Modules":
      return selectedItem === element
        ? { borderBottom: "2px solid #1434A4" }
        : { "&:hover": { borderBottom: "2px solid #1434A4" } };

    case "Challenges":
      return selectedItem === element
        ? { borderBottom: "2px solid #ADD8E6" }
        : { "&:hover": { borderBottom: "2px solid #ADD8E6" } };

    case "Forum":
      return selectedItem === element
        ? { borderBottom: "2px solid #7CFC00" }
        : { "&:hover": { borderBottom: "2px solid #7CFC00" } };

    case "Profile":
      return selectedItem === element
        ? { borderBottom: "2px solid purple" }
        : { "&:hover": { borderBottom: "2px solid purple" } };

    default:
      return {};
  }
};

export const NavBar = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(""); // Dodany stan dla aktualnie wybranego elementu

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
            onClick={() => setSelectedItem(item.name)} // Aktualizuj stan po kliknięciu
            sx={getHoverStyle(item.name, selectedItem)}
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
