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
import image444 from "src/diaryImages/air/444.png";
import { useRegister } from "src/hooks/useRegister";
import useLoginButtons from "./useLoginButtons";

export const Register = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    acceptedTerms,
    setAcceptedTerms,
    handleRegister,
    handleGoToRegulamin,
    handleBackToLoginClick,
  } = useRegister();

  const { styledButton, textFieldStyles } = useLoginButtons();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{ marginTop: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Avatar
          sx={{ m: 1, width: 100, height: 100, color: "white" }}
          alt="Avatar"
          src={image444}
        />
        <Typography sx={{ color: "white" }}>ELEMENTS.</Typography>
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
                InputLabelProps={{ placeholder: "Enter your email", sx: { color: "white" } }}
                sx={{ ...textFieldStyles }}
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
                InputLabelProps={{ placeholder: "Enter your email", sx: { color: "white" } }}
                sx={{ ...textFieldStyles }}
              />
            </Grid>
            <FormControlLabel
              control={
                <Checkbox
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  sx={{
                    color: "white",
                  }}
                />
              }
              label={
                <Typography sx={{ color: "white" }}>I accept the terms and conditions</Typography>
              }
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
          <Button type="submit" fullWidth sx={styledButton}>
            Register
          </Button>
          <Button fullWidth sx={styledButton} onClick={handleBackToLoginClick}>
            Back to Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
