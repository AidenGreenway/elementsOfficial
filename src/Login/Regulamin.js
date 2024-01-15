import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const Regulamin = () => {
  const typographyStyle = {
    color: "white",
    fontFamily: "The Next Font",
  };
  const backButtonStyle = {
    color: "white", // Kolor ikony strzałki
    backgroundColor: "transparent", // Tło przycisku przezroczyste
  };

  return (
    <div style={{ backgroundColor: "black", padding: "20px" }}>
      <Link to="/register">
        <IconButton style={backButtonStyle}>
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <Typography variant="h4" gutterBottom style={typographyStyle}>
        Terms of Use for ELEMENTS Service
      </Typography>
      <Typography variant="h6" gutterBottom style={typographyStyle}>
        1. General Provisions
      </Typography>
      <Typography paragraph style={typographyStyle}>
        Welcome to the ELEMENTS website - a platform dedicated to personal development and the four
        elements. Before using the service, please read the following terms of use.
      </Typography>
      <Typography variant="h6" gutterBottom style={typographyStyle}>
        2. Copyright and Content
      </Typography>
      <Typography paragraph style={typographyStyle}>
        All content, photos, texts, and materials on this site are protected by copyright. Copying,
        reproducing, or distributing these materials without the written permission of the copyright
        owner is prohibited.
      </Typography>
      <Typography paragraph style={typographyStyle}>
        All content, photos, texts, and materials on this site are protected by copyright. Copying,
        reproducing, or distributing these materials without the written permission of the copyright
        owner is prohibited.
      </Typography>{" "}
      <Typography paragraph style={typographyStyle}>
        All content, photos, texts, and materials on this site are protected by copyright. Copying,
        reproducing, or distributing these materials without the written permission of the copyright
        owner is prohibited.
      </Typography>
      <Typography paragraph style={typographyStyle}>
        All content, photos, texts, and materials on this site are protected by copyright. Copying,
        reproducing, or distributing these materials without the written permission of the copyright
        owner is prohibited.
      </Typography>
      <Typography variant="h6" gutterBottom style={typographyStyle}>
        3. Respect Other Users
      </Typography>
      <Typography paragraph style={typographyStyle}>
        We encourage polite and respectful discussions. It is unacceptable to insult, discriminate,
        or defame other users based on race, religion, gender, or any other factor.
      </Typography>
      <Typography variant="h6" gutterBottom style={typographyStyle}>
        4. Freedom of Speech
      </Typography>
      <Typography paragraph style={typographyStyle}>
        ELEMENTS values freedom of speech and expression of opinions. However, any content that
        promotes hatred, violence, or harm will not be tolerated. The administration reserves the
        right to remove such content.
      </Typography>
      <Typography variant="h6" gutterBottom style={typographyStyle}>
        5. Reporting Violations
      </Typography>
      <Typography paragraph style={typographyStyle}>
        If you believe that any content on this site violates the terms of use or copyright, please
        report it to the administration immediately.
      </Typography>
      <Typography variant="h6" gutterBottom style={typographyStyle}>
        6. Changes to the Terms
      </Typography>
      <Typography paragraph style={typographyStyle}>
        The ELEMENTS administration reserves the right to change the terms of use at any time. The
        current version of the terms will always be available on this page.
      </Typography>
      <Typography paragraph style={typographyStyle}>
        Thank you for using ELEMENTS, and we wish you a fruitful journey through the world of the
        four elements!
      </Typography>
    </div>
  );
};

export default Regulamin;
