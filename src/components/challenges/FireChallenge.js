import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const StyledListItemButton = styled(ListItemButton)({
  fontSize: "200%",
  color: "orange",
  "&:hover": {
    color: "#D70040",
    transition: "color 0.3s ease",
  },
});

export const FireChallenge = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [resultMessage, setResultMessage] = useState("");

  const roundToOneDecimalPlace = (number) => {
    return parseFloat(number.toFixed(1));
  };

  const fireQuestions = [
    {
      question: "How do you approach challenges?",
      answers: [
        { text: "Confront challenges head-on", points: 4 },
        { text: "Face challenges with determination", points: 3 },
        { text: "Take on challenges selectively", points: 2 },
        { text: "Avoid challenges to maintain peace", points: 1 },
      ],
    },
    {
      question: "What is your attitude towards authority?",
      answers: [
        { text: "Challenge authority often", points: 4 },
        { text: "Question authority when necessary", points: 3 },
        { text: "Respect authority but seek independence", points: 2 },
        { text: "Follow authority without question", points: 1 },
      ],
    },
    {
      question: "How do you express your emotions?",
      answers: [
        { text: "Express emotions openly and passionately", points: 4 },
        { text: "Share emotions selectively", points: 3 },
        { text: "Keep emotions private most of the time", points: 2 },
        { text: "Rarely express emotions openly", points: 1 },
      ],
    },
    {
      question: "What is your approach to competition?",
      answers: [
        { text: "Thrive on competition and enjoy winning", points: 4 },
        { text: "Compete but value collaboration", points: 3 },
        { text: "Prefer collaboration over competition", points: 2 },
        { text: "Avoid competition and seek harmony", points: 1 },
      ],
    },
    {
      question: "How do you handle criticism?",
      answers: [
        { text: "Welcome criticism as an opportunity to grow", points: 4 },
        { text: "Consider criticism objectively", points: 3 },
        { text: "Take criticism personally at times", points: 2 },
        { text: "Avoid criticism and maintain self-assurance", points: 1 },
      ],
    },
    {
      question: "Do you enjoy leading others?",
      answers: [
        { text: "Natural leader, enjoy taking charge", points: 4 },
        { text: "Lead when necessary but prefer collaboration", points: 3 },
        { text: "Prefer to follow but can lead if needed", points: 2 },
        { text: "Avoid leadership roles", points: 1 },
      ],
    },
    {
      question: "How do you approach risk-taking?",
      answers: [
        { text: "Love taking bold and daring risks", points: 4 },
        { text: "Enjoy moderate risks for potential rewards", points: 3 },
        { text: "Prefer safety and avoid unnecessary risks", points: 2 },
        { text: "Avoid risks to maintain stability", points: 1 },
      ],
    },
    {
      question: "What is your perspective on rules?",
      answers: [
        { text: "Challenge rules and seek flexibility", points: 4 },
        { text: "Question rules when needed", points: 3 },
        { text: "Respect rules but may bend them", points: 2 },
        { text: "Follow rules strictly for order", points: 1 },
      ],
    },
    {
      question: "How do you approach new opportunities?",
      answers: [
        { text: "Embrace new opportunities with enthusiasm", points: 4 },
        { text: "Optimistic about new opportunities", points: 3 },
        { text: "Approach with caution and skepticism", points: 2 },
        { text: "Avoid new opportunities to maintain stability", points: 1 },
      ],
    },
    {
      question: "What is your perspective on personal freedom?",
      answers: [
        { text: "Value personal freedom above all", points: 4 },
        { text: "Appreciate personal freedom but value security", points: 3 },
        { text: "Prefer security over excessive personal freedom", points: 2 },
        { text: "Seek security and follow established norms", points: 1 },
      ],
    },
  ];

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
      <Box position="fixed" bottom="20px" left="50%" transform="translateX(-50%)">
        {fireQuestions.map((_, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              borderRadius: "90%",
              backgroundColor: index <= questionIndex ? "#D70040" : "white",
              margin: "0 5px",
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
        marginTop="70px"
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
