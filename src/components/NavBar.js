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
    paddingTop: theme ? theme.spacing(4) : 0,
  },
}));

const NavBar = () => {
  const goBack = () => {
    window?.history.back();
  };

  const { elementImages, yourValue } = useContext(YourContext);

  console.log({ elementImages, yourValue });

  return (
    <CustomDrawer variant="permanent" anchor="left">
      <List>
        <ListItem>
          <Button onClick={goBack} variant="text" style={{ color: "white" }}>
            <ArrowBackIcon />
          </Button>
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/CourseModules">
          <ListItemText primary="CourseModules" />
        </ListItem>
        {/* Dodaj inne nawigacyjne linki dla innych komponentów */}
        <ListItem button component={Link} to="/Challenges">
          <ListItemText primary="Challenges" />
        </ListItem>
        <ListItem button component={Link} to="/Forum">
          <ListItemText primary="Forum" />
        </ListItem>
        <ListItem button component={Link} to="/Profile">
          <ListItemText primary="Diary" />
        </ListItem>
        {/* Wyświetlanie ikony wybranej z Banner */}
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
