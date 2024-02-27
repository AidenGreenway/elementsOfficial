import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const StyledListItemButton = styled(ListItemButton)({
  fontSize: "200%",
  color: "#4682B4",
  "&:hover": {
    color: "#1E90FF",
    transition: "color 0.3s ease",
  },
});

export const WaterChallenge = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const roundToOneDecimalPlace = (number) => {
    return parseFloat(number.toFixed(1));
  };

  const waterQuestions = [
    {
      question: "How do you handle emotions?",
      answers: [
        { text: "Emotionally detached", points: 1 },
        { text: "Moderate", points: 2 },
        { text: "Sensitive", points: 3 },
        { text: "Highly empathetic", points: 4 },
      ],
    },
    {
      question: "Are you adaptable?",
      answers: [
        { text: "Prefer routine", points: 1 },
        { text: "Adapt with effort", points: 2 },
        { text: "Adaptable", points: 3 },
        { text: "Embrace change", points: 4 },
      ],
    },
    {
      question: "How do you approach relationships?",
      answers: [
        { text: "Independent", points: 1 },
        { text: "Balanced", points: 2 },
        { text: "Close-knit", points: 3 },
        { text: "Deep emotional connections", points: 4 },
      ],
    },
    {
      question: "Do you trust easily?",
      answers: [
        { text: "Distrustful", points: 1 },
        { text: "Cautiously trusting", points: 2 },
        { text: "Trust moderately", points: 3 },
        { text: "Easily trusting", points: 4 },
      ],
    },
    {
      question: "How do you handle stress?",
      answers: [
        { text: "Stoic", points: 1 },
        { text: "Handle it well", points: 2 },
        { text: "Feel stressed but cope", points: 3 },
        { text: "Get overwhelmed", points: 4 },
      ],
    },
    {
      question: "Are you intuitive?",
      answers: [
        { text: "Rely on facts", points: 1 },
        { text: "Occasionally intuitive", points: 2 },
        { text: "Fairly intuitive", points: 3 },
        { text: "Highly intuitive", points: 4 },
      ],
    },
    {
      question: "How do you communicate?",
      answers: [
        { text: "Reserved", points: 1 },
        { text: "Clear and concise", points: 2 },
        { text: "Expressive", points: 3 },
        { text: "In-depth and detailed", points: 4 },
      ],
    },
    {
      question: "How do you handle conflicts?",
      answers: [
        { text: "Avoid conflicts", points: 1 },
        { text: "Prefer compromise", points: 2 },
        { text: "Assertive", points: 3 },
        { text: "Address conflicts openly", points: 4 },
      ],
    },
    {
      question: "Are you introverted or extroverted?",
      answers: [
        { text: "Introverted", points: 1 },
        { text: "Balanced", points: 2 },
        { text: "Slightly extroverted", points: 3 },
        { text: "Extroverted", points: 4 },
      ],
    },
    {
      question: "How do you recharge?",
      answers: [
        { text: "Alone time", points: 1 },
        { text: "Quiet environment", points: 2 },
        { text: "In nature", points: 3 },
        { text: "Socializing with loved ones", points: 4 },
      ],
    },
  ];

  const handleAnswerSelection = (selectedPoints) => {
    setPoints((prevPoints) => prevPoints + selectedPoints);
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const renderProgressDots = () => {
    return (
      <Box position="fixed" bottom="20px" left="45%" transform="translateX(-50%)">
        {waterQuestions.map((_, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              borderRadius: "90%",
              backgroundColor: index <= questionIndex ? "#4682B4" : "white", // Water element color
              margin: "0 5px",
            }}
          ></span>
        ))}
      </Box>
    );
  };

  const renderQuestion = () => {
    if (questionIndex >= waterQuestions.length) {
      const percentage = roundToOneDecimalPlace((points / (waterQuestions.length * 4)) * 100);

      let resultMessage = "";
      if (percentage >= 0 && percentage <= 25) {
        resultMessage = "You may not resonate strongly with the Water element.";
      } else if (percentage > 25 && percentage <= 50) {
        resultMessage = "You have some qualities associated with the Water element.";
      } else if (percentage > 50 && percentage <= 75) {
        resultMessage = "You resonate well with the Water element.";
      } else {
        resultMessage = "Congratulations! You embody the essence of the Water element.";
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
          <Typography variant="h3" style={{ color: "#4682B4" }}>
            Your score for the Water element:
            <Typography variant="h2" sx={{ color: "white" }}>
              {points} / {waterQuestions.length * 4}
            </Typography>
          </Typography>
          <Typography variant="h3" style={{ color: "#4682B4", marginTop: "10px" }}>
            Your integration with the element:{" "}
            <Typography variant="h2" sx={{ color: "white" }}>
              {percentage}%
            </Typography>
          </Typography>
          <Typography variant="h3" style={{ color: "#4682B4", marginTop: "10px" }}>
            {resultMessage}
          </Typography>
        </Box>
      );
    }

    const currentQuestion = waterQuestions[questionIndex];
    const shuffledAnswers = currentQuestion.answers.slice().sort(() => Math.random() - 0.5);

    return (
      <Box
        marginTop="70px"
        marginLeft="0px"
        textAlign="left"
        color="white"
        fontFamily="The Next Font"
        className="animate__animated animate__bounceInLeft"
      >
        <Box>
          <Typography variant="h6" style={{ color: "#4682B4" }}>
            Question {questionIndex + 1}
          </Typography>
          <Typography variant="body1" style={{ color: "#1E90FF", fontSize: "40px" }}>
            {currentQuestion.question}
          </Typography>
          <List>
            {shuffledAnswers.map((answer, index) => (
              <ListItem key={index} disablePadding>
                <StyledListItemButton
                  onClick={() => handleAnswerSelection(answer.points)}
                  fullWidth
                >
                  <Typography style={{ fontSize: "90%" }}> * {answer.text}</Typography>
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
