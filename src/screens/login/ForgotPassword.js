import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import image444 from "src/diaryImages/air/444.png";
import { useForgotPassword } from "src/hooks/useForgotPassword";
import useLoginButtons from "./useLoginButtons";

export const ForgotPassword = () => {
  const handleForgotPassword = (email) => {
    console.log("Forgot password request for email:", email);
  };
  const { email, handleChange, handleSubmit, handleBackToLoginClick } =
    useForgotPassword(handleForgotPassword);

  const { styledButton, textFieldStyles } = useLoginButtons(); // używamy hooka do stylowania guzików

  return (
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
        <Typography component="h1" variant="h5" color="white">
          Forgot Password?
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: "1rem" }}>
          <TextField
            InputLabelProps={{ placeholder: "", sx: { color: "white" } }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={handleChange}
            sx={textFieldStyles}
          />

          <Button
            type="submit"
            fullWidth
            sx={styledButton} // przekazujemy stylowanie guzika
          >
            Send Reset Instructions
          </Button>
        </form>
        <Button
          fullWidth
          sx={styledButton} // przekazujemy stylowanie guzika
          onClick={handleBackToLoginClick}
        >
          Back to Login
        </Button>
      </div>
    </Container>
  );
};
