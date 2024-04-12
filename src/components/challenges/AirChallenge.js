import { Box, List, ListItem, ListItemButton, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { elementsQuestions } from "./ElementsQuestions";

const StyledListItemButton = styled(ListItemButton)({
  fontSize: "200%",
  "&:hover": {
    color: "#00BFFF",
    transition: "color 0.3s ease",
  },
});

export const AirChallenge = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const roundToOneDecimalPlace = (number) => {
    return parseFloat(number.toFixed(1));
  };

  const airQuestions = elementsQuestions.air;

  const handleAnswerSelection = (selectedPoints) => {
    setPoints((prevPoints) => prevPoints + selectedPoints);
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const renderProgressDots = () => {
    return (
      <Box position="fixed" bottom="20px" left="50%" transform="translateX(-50%)">
        {airQuestions.map((_, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "90%",
              backgroundColor: index <= questionIndex ? "#00BFFF" : "white",
              margin: isSmallScreen ? "0 2px" : "0 3px",
            }}
          ></span>
        ))}
      </Box>
    );
  };

  const renderQuestion = () => {
    if (questionIndex >= airQuestions.length) {
      const percentage = roundToOneDecimalPlace((points / (airQuestions.length * 4)) * 100);

      let resultMessage = "";
      if (percentage >= 0 && percentage <= 25) {
        resultMessage = "You may not resonate strongly with the Air element.";
      } else if (percentage > 25 && percentage <= 50) {
        resultMessage = "You have some qualities associated with the Air element.";
      } else if (percentage > 50 && percentage <= 75) {
        resultMessage = "You resonate well with the Air element.";
      } else {
        resultMessage = "Congratulations! You embody the essence of the Air element.";
      }

      return (
        <Box
          className="animate__animated animate__bounceInDown"
          sx={{
            color: "white",
            marginTop: "8%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            fontFamily: "The Next Font",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h3" style={{ color: "#87CEEB" }}>
            Your score for the Air element:
            <Typography variant="h2" sx={{ color: "white" }}>
              {points} / {airQuestions.length * 4}
            </Typography>
          </Typography>
          <Typography variant="h3" style={{ color: "#87CEEB", marginTop: "10px" }}>
            Your integration with the element:{" "}
            <Typography variant="h2" sx={{ color: "white" }}>
              {percentage}%
            </Typography>
          </Typography>
          <Typography variant="h3" style={{ color: "#87CEEB", marginTop: "10px" }}>
            {resultMessage}
          </Typography>
        </Box>
      );
    } else {
      const currentQuestion = airQuestions[questionIndex];
      return (
        <Box
          className="animate__animated animate__bounceInDown"
          sx={{
            color: "white",
            marginTop: "8%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            fontFamily: "The Next Font",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h3" style={{ color: "#87CEEB" }}>
            Question {questionIndex + 1} / {airQuestions.length}:
          </Typography>
          <Typography variant="h2" sx={{ color: "white", marginTop: "20px" }}>
            {currentQuestion.question}
          </Typography>
          <List sx={{ marginTop: "30px" }}>
            {currentQuestion.answers.map((answer, index) => (
              <ListItem key={index} disablePadding>
                <StyledListItemButton onClick={() => handleAnswerSelection(answer.points)}>
                  {answer.text}
                </StyledListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#2C3E50",
        minHeight: "100vh",
      }}
    >
      {renderQuestion()}
      {renderProgressDots()}
    </Box>
  );
};
