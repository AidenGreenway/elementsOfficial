import { Avatar } from "@mui/material";

import Button from "@mui/material/Button";

import Container from "@mui/material/Container";

import CssBaseline from "@mui/material/CssBaseline";

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

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add logic to handle the forgot password request and send reset instructions

    console.log("Forgot password request for email:", email);
  };

  const handleBackToLoginClick = () => {
    // Navigate back to the login page when "Back to Login" is clicked

    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div
          style={{
            display: "flex",

            flexDirection: "column",

            alignItems: "center",

            marginTop: "6rem",
          }}
        >
          <Avatar sx={{ m: 1, width: 50, height: 50 }} alt="Avatar" src={image444}></Avatar>

          <Typography component="h1" variant="h5">
            Forgot Password?
          </Typography>

          <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: "1rem" }}>
            <TextField
              variant="outlined"
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

            <Button
              type="submit"
              fullWidth
              sx={{
                textAlign: "left",

                mt: 0,

                mb: 1,

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
              Send Reset Instructions
            </Button>
          </form>

          <Button
            fullWidth
            sx={{
              textAlign: "left",

              right: 0,

              color: "white",

              border: "1px solid white",

              "&:hover": {
                backgroundColor: "white", // Kolor tła przy najechaniu

                color: "black", // Kolor tekstu przy najechaniu

                // Dodaj tutaj inne style, które chcesz zastosować podczas hover
              },
            }}
            onClick={handleBackToLoginClick}
          >
            Back to Login
          </Button>
        </div>
      </Container>
    </ThemeProvider>
  );
};

