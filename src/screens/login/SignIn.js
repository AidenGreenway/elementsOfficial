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
import image444 from "src/diaryImages/air/444.png";
import { useSignIn } from "src/hooks/useSignIn";
import useLoginButtons from "./useLoginButtons";

export const SignIn = () => {
  const {
    handleForgotClick,
    handleSignUpClick,
    handleSubmit,
    error,
    email,
    setEmail,
    password,
    setPassword,
  } = useSignIn();
  const { styledButton, textFieldStyles } = useLoginButtons();
  return (
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

        <Typography sx={{ fontSize: "60px", color: "white" }}>ELEMENTS.</Typography>

        <Typography sx={{ fontSize: "24px", color: "white" }}>Login</Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            InputLabelProps={{ placeholder: "", sx: { color: "white" } }}
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
            sx={textFieldStyles}
          />
          <TextField
            InputLabelProps={{ placeholder: "", sx: { color: "white" } }}
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
            sx={textFieldStyles}
          />
          {error && (
            <Typography variant="body2" sx={{ color: "red", mt: 1 }}>
              {error}
            </Typography>
          )}
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                sx={{
                  color: "white",
                }}
              />
            }
            label={<Typography sx={{ color: "white" }}>Remember me</Typography>}
          />
          <Button type="submit" fullWidth sx={styledButton}>
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
  );
};
