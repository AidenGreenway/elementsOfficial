import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "src/firebaseConfig"; // Zaimportuj moduł autentykacji z pliku firebaseConfig.js

import image444 from "src/diaryImages/air/444.png";

const theme = createTheme({
  typography: {
    fontFamily: '"The Next Font", Arial, sans-serif',
    color: "#FFFFFF",
  },
  palette: {
    background: {
      default: "#000000",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "4px",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.15)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
          "&:hover": {
            boxShadow: "0 6px 14px 0 rgba(0,0,0,0.4)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
  },
});

export const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("User created:", cred.user);
        setEmail(""); // Resetuj stan emaila po zakończeniu rejestracji
        setPassword(""); // Resetuj stan hasła po zakończeniu rejestracji
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };
  const handleGoToRegulamin = () => {
    navigate("/regulamin");
  };

  const handleBackToLoginClick = () => {
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar sx={{ m: 1, width: 100, height: 100 }} alt="Avatar" src={image444} />
          <Typography>ELEMENTS.</Typography>
          <Typography component="h1" variant="h3" sx={{ color: "white" }}>
            Register
          </Typography>
          <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="I accept the terms and conditions"
              />
            </Grid>
            <Button
              sx={{
                marginBottom: "10px",
                color: "white",
                fontSize: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                cursor: "pointer",
              }}
              onClick={handleGoToRegulamin}
            >
              regulamin
            </Button>
            <Button
              type="submit"
              fullWidth
              sx={{
                textAlign: "center",
                color: "white",
                border: "1px solid white",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Register
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                textAlign: "left",
                mt: 1,
                right: 0,
                color: "white",
                border: "1px solid white",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
              onClick={handleBackToLoginClick}
            >
              Back to Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
