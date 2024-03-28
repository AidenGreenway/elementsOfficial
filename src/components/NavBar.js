import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText, styled } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import YourContext from "src/elementContext/ElementContext";
import { auth } from "src/firebaseConfig";

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
    // Tutaj wykonujemy wylogowanie użytkownika
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully");
        navigate("/"); // Przekieruj na stronę logowania po wylogowaniu
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
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
            key={item.name}
            onMouseEnter={() => {
              if (
                item.name === "Profile" &&
                !elementImages?.[yourValue] &&
                selectedItem !== "Profile"
              ) {
                console.log("put your birthday first");
              }
            }}
            onClick={() => {
              if (item.name === "Profile" && !elementImages?.[yourValue]) {
                return;
              }
              setSelectedItem(item.name);
              navigate(`/${item.path}`);
            }}
            sx={getHoverStyle(item.name, selectedItem)}
          >
            {item.name === "Profile" ? (
              <Tooltip
                title={!elementImages?.[yourValue] ? "put your birthday first" : ""}
                placement="bottom"
              >
                <ListItemText primary={item.name} />
              </Tooltip>
            ) : (
              <Link to={`/${item.path}`} style={{ textDecoration: "none", color: "inherit" }}>
                <ListItemText primary={item.name} />
              </Link>
            )}
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
          <ListItemText />
        </ListItem>
      </List>
    </CustomDrawer>
  );
};
