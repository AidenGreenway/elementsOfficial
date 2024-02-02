import { List, ListItem, ListItemButton, Typography } from "@mui/material";

import { useState } from "react";

export const AirChallenge = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const [points, setPoints] = useState(0);

  const airQuestions = [
    {
      question: "How do you rate your optimism?",

      answers: ["Pessimist", "Somewhat pessimistic", "Somewhat optimistic", "Optimist"],
    },

    {
      question: "Do you like changes?",

      answers: ["Avoid changes", "Not always", "Sometimes", "Love changes"],
    },

    {
      question: "How often do you emphasize your opinion?",

      answers: ["Never", "Rarely", "Sometimes", "Always"],
    },

    {
      question: "Can you be analytical?",

      answers: ["Definitely not", "Rather not", "Sometimes", "Definitely yes"],
    },

    {
      question: "How often do you adapt to changing situations?",

      answers: ["Never", "Rarely", "Sometimes", "Always"],
    },

    {
      question: "How often do you change your mind?",

      answers: ["Very rarely", "Rarely", "Sometimes", "Often"],
    },

    {
      question: "Do you get bored with routine quickly?",

      answers: ["Very quickly", "Rather quickly", "Not often", "Never"],
    },

    {
      question: "How do you react to stressful situations?",

      answers: ["Very poorly", "Poorly", "Average", "Well"],
    },

    {
      question: "Can you be analytical?",

      answers: ["Definitely not", "Rather not", "Sometimes", "Definitely yes"],
    },

    {
      question: "How often do you adapt to changing situations?",

      answers: ["Never", "Rarely", "Sometimes", "Always"],
    },
  ];

  const handleAnswerSelection = (selectedPoints) => {
    setPoints(points + selectedPoints);

    setQuestionIndex(questionIndex + 1);
  };

  const renderQuestion = () => {
    if (questionIndex >= airQuestions.length) {
      const percentage = (points / 40) * 100; // Calculate the percentage score

      return (
        <div style={{ color: "white" }}>
          <Typography variant="h4">Your score for the Air element: {points} / 40</Typography>

          <Typography variant="h5">Your integration with the element is: {percentage}%</Typography>
        </div>
      );
    }

    const currentQuestion = airQuestions[questionIndex];

    return (
      <div
        style={{
          marginTop: "70px",

          marginLeft: "0px",

          textAlign: "left",

          color: "white", // Light blue color for Air element

          fontFamily: "The Next Font",
        }}
      >
        <div>
          <Typography variant="h6" sx={{ color: "white" }}>
            Question {questionIndex + 1}
          </Typography>

          <Typography variant="body1" sx={{ color: "#87CEEB", fontSize: "35px" }}>
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
                      color: "#00BFFF", // Change text color on hover to gold

                      transition: "color 0.3s ease", // Transition animation
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

