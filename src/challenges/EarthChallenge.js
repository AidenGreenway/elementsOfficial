import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { useState } from "react";

const EarthChallenge = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const earthQuestions = [
    {
      question: "How do you rate your patience?",
      answers: ["Low", "Medium", "High", "Very High"],
    },
    {
      question: "Do you like to work on one task for a long time?",
      answers: ["Definitely not", "Not always", "Sometimes", "Always"],
    },
    {
      question: "How often do you analyze situations before making decisions?",
      answers: ["Never", "Rarely", "Sometimes", "Always"],
    },
    {
      question: "Do you have a tendency to plan ahead?",
      answers: ["Definitely not", "Not usually", "Sometimes", "Always"],
    },
    {
      question: "How well do you handle stress?",
      answers: ["Poorly", "Average", "Well", "Very well"],
    },
    {
      question: "How often do you offer help to others?",
      answers: ["Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How do you handle crisis situations?",
      answers: [
        "Usually lose control",
        "Sometimes lose control",
        "Rarely lose control",
        "Never lose control",
      ],
    },
    {
      question: "Do you take care of your environment?",
      answers: ["Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you rely on your intuition?",
      answers: ["Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you usually listen to others' opinions before making decisions?",
      answers: ["Rarely", "Sometimes", "Often", "Always"],
    },
  ];

  const handleAnswerSelection = (selectedPoints) => {
    setPoints(points + selectedPoints);
    setQuestionIndex(questionIndex + 1);
  };

  const renderQuestion = () => {
    if (questionIndex >= earthQuestions.length) {
      const percentage = (points / 40) * 100;
      return (
        <div
          style={{
            color: "#228B22",
            textAlign: "left",
            fontFamily: "The Next Font",
            marginTop: "20px",
            marginLeft: "20px",
          }}
        >
          <Typography variant="h4">Your score for the Earth element: {points} / 40</Typography>
          <Typography variant="h5">
            Your level of integration with the element is: {percentage}%
          </Typography>
        </div>
      );
    }

    const currentQuestion = earthQuestions[questionIndex];
    return (
      <div
        style={{
          marginTop: "60px",
          marginLeft: "0px",
          textAlign: "left",
          color: "lightGreen",
          fontFamily: "The Next Font",
        }}
      >
        <Typography variant="h6" sx={{ color: "lightGreen" }}>
          Question {questionIndex + 1}
        </Typography>
        <Typography variant="body1" sx={{ color: "#50C878", fontSize: "30px" }}>
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
                    color: "#2E8B57",
                    transition: "color 0.3s ease",
                  },
                }}
              >
                * {answer}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  return <div style={{ backgroundColor: "black" }}>{renderQuestion()}</div>;
};

export default EarthChallenge;
