import { Box, List, ListItem, ListItemButton, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { elementsQuestions } from "./ElementsQuestions";

const StyledListItemButton = styled(ListItemButton)({
  fontSize: "200%",
  color: "orange",
  "&:hover": {
    color: "#D70040",
    transition: "color 0.3s ease",
  },
});

export const FireChallenge = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [resultMessage, setResultMessage] = useState("");

  const roundToOneDecimalPlace = (number) => {
    return parseFloat(number.toFixed(1));
  };

  const fireQuestions = elementsQuestions.fire;

  const handleAnswerSelection = (selectedPoints) => {
    setPoints((prevPoints) => prevPoints + selectedPoints);
    setQuestionIndex((prevIndex) => prevIndex + 1);

    if (questionIndex === fireQuestions.length - 1) {
      if (points >= 10 && points <= 20) {
        setResultMessage("Keep going! You're on the right track with the Fire element.");
      } else if (points >= 21 && points <= 30) {
        setResultMessage("Great job! You have a good understanding of the Fire element.");
      } else if (points >= 31 && points <= 40) {
        setResultMessage("Congratulations! You are a Fire element master!");
      }
    }
  };

  const renderProgressDots = () => {
    return (
      <Box position="fixed" bottom="20px" left="45%" transform="translateX(-50%)">
        {fireQuestions.map((_, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "90%",
              backgroundColor: index <= questionIndex ? "#D70040" : "white",
              margin: isSmallScreen ? "0 2px" : "0 5px",
            }}
          ></span>
        ))}
      </Box>
    );
  };

  const renderQuestion = () => {
    if (questionIndex >= fireQuestions.length) {
      const percentage = roundToOneDecimalPlace((points / (fireQuestions.length * 4)) * 100);

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
          <Typography variant="h3" sx={{ color: "#D70040" }}>
            Your score for the Fire element:
            <Typography variant="h2" sx={{ color: "orange" }}>
              {points} / {fireQuestions.length * 4}
            </Typography>
          </Typography>
          <Typography variant="h3" sx={{ color: "#D70040", marginTop: "10px" }}>
            Your integration with the element:{" "}
            <Typography variant="h2" sx={{ color: "orange" }}>
              {percentage}%
            </Typography>
          </Typography>
          <Typography variant="h3" sx={{ color: "#D70040", marginTop: "10px" }}>
            {resultMessage}
          </Typography>
        </Box>
      );
    }

    const currentQuestion = fireQuestions[questionIndex];
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
          <Typography variant="h6" sx={{ color: "orange" }}>
            Question {questionIndex + 1}
          </Typography>
          <Typography variant="body1" sx={{ color: "#D70040", fontSize: "40px" }}>
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
