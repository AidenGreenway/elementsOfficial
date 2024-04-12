import { Box, List, ListItem, ListItemButton, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { elementsQuestions } from "./ElementsQuestions";

const StyledListItemButton = styled(ListItemButton)({
  fontSize: "200%",
  color: "lightGreen",
  "&:hover": {
    color: "#097969",
    transition: "color 0.3s ease",
  },
});

export const EarthChallenge = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [resultMessage, setResultMessage] = useState("");

  const roundToOneDecimalPlace = (number) => {
    return parseFloat(number.toFixed(1));
  };

  const earthQuestions = elementsQuestions.earth;

  const handleAnswerSelection = (selectedPoints) => {
    setPoints((prevPoints) => prevPoints + selectedPoints);
    setQuestionIndex((prevIndex) => prevIndex + 1);

    if (questionIndex === earthQuestions.length - 1) {
      if (points >= 10 && points <= 20) {
        setResultMessage("Keep going! You're on the right track with the Earth element.");
      } else if (points >= 21 && points <= 30) {
        setResultMessage("Great job! You have a good understanding of the Earth element.");
      } else if (points >= 31 && points <= 40) {
        setResultMessage("Congratulations! You are an Earth element master!");
      }
    }
  };

  const renderProgressDots = () => {
    return (
      <Box
        position="fixed"
        bottom={isSmallScreen ? "10px" : "20px"}
        left="50%"
        transform="translateX(-50%)"
      >
        {earthQuestions.map((_, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: index <= questionIndex ? "#097969" : "white",
              margin: "0 5px",
            }}
          ></span>
        ))}
      </Box>
    );
  };

  const renderQuestion = () => {
    if (questionIndex >= earthQuestions.length) {
      const percentage = roundToOneDecimalPlace((points / (earthQuestions.length * 4)) * 100);

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
          <Typography variant="h3" sx={{ color: "#097969" }}>
            Your score for the Earth element:
            <Typography variant="h2" sx={{ color: "lightGreen" }}>
              {points} / {earthQuestions.length * 4}
            </Typography>
          </Typography>
          <Typography variant="h3" sx={{ color: "#097969", marginTop: "10px" }}>
            Your integration with the element:{" "}
            <Typography variant="h2" sx={{ color: "lightGreen" }}>
              {percentage}%
            </Typography>
          </Typography>
          <Typography variant="h3" sx={{ color: "#097969", marginTop: "10px" }}>
            {resultMessage}
          </Typography>
        </Box>
      );
    }

    const currentQuestion = earthQuestions[questionIndex];
    const shuffledAnswers = currentQuestion.answers.slice().sort(() => Math.random() - 0.5);

    return (
      <Box
        marginTop={isSmallScreen ? "20px" : "70px"}
        marginLeft="0px"
        textAlign="left"
        color="white"
        fontFamily="The Next Font"
        className="animate__animated animate__bounceInLeft"
      >
        <Box>
          <Typography variant="h6" sx={{ color: "lightGreen" }}>
            Question {questionIndex + 1}
          </Typography>
          <Typography variant="body1" sx={{ color: "#097969", fontSize: "40px" }}>
            {currentQuestion.question}
          </Typography>
          <List>
            {shuffledAnswers.map((answer, index) => (
              <ListItem key={index} disablePadding>
                <StyledListItemButton
                  onClick={() => handleAnswerSelection(answer.points)}
                  fullWidth
                >
                  <Typography sx={{ fontSize: "90%" }}> * {answer.text}</Typography>
                </StyledListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    );
  };

  return (
    <Box backgroundColor="" position="relative">
      {renderQuestion()}
      {renderProgressDots()}
    </Box>
  );
};
