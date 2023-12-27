import { Box, Button, Input, Typography } from "@mui/material";

const NewsletterForm = ({ handleSubscribe }) => {
  return (
    <Box
      className="newsletter-form"
      sx={{
        textAlign: "center",
        '& input[type="email"]': {
          padding: "8px",
          margin: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "300px",
          maxWidth: "100%",
        },
        '& button[type="submit"]': {
          padding: "8px 16px",
          margin: "8px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: "#0056b3",
          },
        },
      }}
    >
      <Typography sx={{ fontSize: "24px" }}>Dołącz do naszego newslettera!</Typography>
      <form onSubmit={handleSubscribe}>
        <Input type="email" placeholder="Wpisz swój adres e-mail" />
        <Button type="submit">Subskrybuj</Button>
      </form>
    </Box>
  );
};

export default NewsletterForm;
