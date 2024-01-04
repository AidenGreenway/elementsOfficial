import { Box, Typography } from "@mui/material";

const CourseDescription = () => {
  return (
    <Box
      id="course-section"
      sx={{
        backgroundColor: "none",
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        margin: "auto",
        marginLeft: "0px",
        marginTop: "40px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          marginBottom: "20px",
          fontFamily: "Roboto, sans-serif",
          fontSize: "2.5rem",
          color: "#333",
        }}
      >
        O czym jest nasz kurs?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "30px",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "1.2rem",
          lineHeight: "1.6",
          color: "#555",
        }}
      >
        Kurs skupia się na interpretacji 4 żywiołów: ogień, woda, powietrze, ziemia. Odkryj, jak te
        żywioły odzwierciedlają ludzkie cechy i jak ta wiedza może być wykorzystana do rozwoju
        osobistego. Poznaj sposoby, w jakie te symboliczne elementy natury wpływają na nasze
        charaktery i jak możemy korzystać z tej wiedzy dla własnego rozwoju.
      </Typography>
    </Box>
  );
};

export default CourseDescription;
