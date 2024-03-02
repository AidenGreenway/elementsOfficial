import Avatar from "@mui/material/Avatar";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

import Checkbox from "@mui/material/Checkbox";

import Container from "@mui/material/Container";

import CssBaseline from "@mui/material/CssBaseline";

import FormControlLabel from "@mui/material/FormControlLabel";

import Grid from "@mui/material/Grid";

import Link from "@mui/material/Link";

import TextField from "@mui/material/TextField";

import Typography from "@mui/material/Typography";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

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

          "& .Mui-focused": {
            border: "none",
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

export const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "M" && password === "M") {
      navigate("/dashboard");
    } else {
      console.log("Niepoprawne dane logowania");
    }
  };

  const handleSignUpClick = () => {
    // Navigate to the registration page when "Sign Up" is clicked

    navigate("/register");
  };

  const handleForgotClick = () => {
    // Navigate to the registration page when "Sign Up" is clicked

    navigate("/forgot-password");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 3,

            display: "flex",

            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, width: 140, height: 140 }} alt="Avatar" src={image444}></Avatar>

          <Typography sx={{ fontSize: "60px" }}>ELEMENTS.</Typography>

          <Typography sx={{ fontSize: "24px" }}>Login</Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              sx={{
                textAlign: "left",

                mt: 2,

                mb: 2,

                right: 0,

                color: "white",

                border: "1px solid white",

                "&:hover": {
                  backgroundColor: "white", // Kolor tła przy najechaniu

                  color: "black", // Kolor tekstu przy najechaniu

                  // Dodaj tutaj inne style, które chcesz zastosować podczas hover
                },
              }}
            >
              Login
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{ color: "white" }} onClick={handleForgotClick}>
                  Forgot password?
                </Link>
              </Grid>

              <Grid item>
                <Link href="#" variant="body2" sx={{ color: "white" }} onClick={handleSignUpClick}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
