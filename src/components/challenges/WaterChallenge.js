import { List, ListItem, ListItemButton, Typography } from "@mui/material";

import { useState } from "react";

export const WaterChallenge = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const [points, setPoints] = useState(0);

  const waterQuestions = [
    {
      question: "How do you rate your empathy?",

      answers: ["Low", "Medium", "High", "Very High"],
    },

    {
      question: "Are you an introvert or an extrovert?",

      answers: ["Introvert", "Somewhat introverted", "Somewhat extroverted", "Extrovert"],
    },

    {
      question: "How often do you express your emotions?",

      answers: ["Never", "Rarely", "Sometimes", "Always"],
    },

    {
      question: "Do you usually avoid conflicts?",

      answers: ["Always avoid", "Sometimes avoid", "Rarely avoid", "Never avoid"],
    },

    {
      question: "How do you react to stress?",

      answers: ["Very poorly", "Poorly", "Average", "Well"],
    },

    {
      question: "Do you easily form deep relationships?",

      answers: ["Difficult", "Somewhat difficult", "Somewhat easy", "Easy"],
    },

    {
      question: "How often do you feel the need to help others?",

      answers: ["Never", "Rarely", "Sometimes", "Always"],
    },

    {
      question: "Do you often indulge in your dreams and fantasies?",

      answers: ["Never", "Rarely", "Sometimes", "Always"],
    },

    {
      question: "How well do you handle emotional burdens?",

      answers: ["Poorly", "Average", "Well", "Very well"],
    },

    {
      question: "How often can you understand the perspective of others?",

      answers: ["Never", "Rarely", "Sometimes", "Always"],
    },
  ];

  const handleAnswerSelection = (selectedPoints) => {
    setPoints(points + selectedPoints);

    setQuestionIndex(questionIndex + 1);
  };

  const renderQuestion = () => {
    if (questionIndex >= waterQuestions.length) {
      const percentage = (points / 40) * 100;

      return (
        <div style={{ color: "#00FFFF" }}>
          <Typography variant="h4">Your score for the Water element: {points} / 40</Typography>

          <Typography variant="h5">
            Your level of integration with the element is: {percentage}%
          </Typography>
        </div>
      );
    }

    const currentQuestion = waterQuestions[questionIndex];

    return (
      <div
        style={{
          marginTop: "70px",

          marginLeft: "0px",

          textAlign: "left",

          color: "blue",

          fontFamily: "The Next Font",
        }}
      >
        <div>
          <Typography variant="h6" sx={{ color: "blue" }}>
            Question {questionIndex + 1}
          </Typography>

          <Typography variant="body1" sx={{ color: "lightBlue", fontSize: "35px" }}>
            {currentQuestion.question}
          </Typography>

          <List>
            {currentQuestion.answers.map((answer, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => handleAnswerSelection(index + 1)}
                  variant="contained"
                  fullWidth
                  sx={{
                    "&:hover": {
                      color: "#00FFFF", // Zmiana koloru tekstu na hover

                      transition: "color 0.3s ease", // Animacja przejścia
                    },
                  }}
                >
                  * {answer}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  };

  return <div style={{ backgroundColor: "black" }}>{renderQuestion()}</div>;
};

