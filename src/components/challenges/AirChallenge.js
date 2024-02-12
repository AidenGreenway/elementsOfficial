import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import "animate.css";
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

  const renderProgressDots = () => {
    const progressDots = [];
    for (let i = 0; i < airQuestions.length; i++) {
      progressDots.push(
        <span
          key={i}
          style={{
            display: "inline-block",
            width: "20px",
            height: "20px",
            borderRadius: "90%",
            backgroundColor: i <= questionIndex ? "#00BFFF" : "white",
            margin: "0 5px",
          }}
        ></span>
      );
    }
    return progressDots;
  };

  const renderQuestion = () => {
    if (questionIndex >= airQuestions.length) {
      const percentage = (points / 40) * 100;

      return (
        <div
          className="animate__animated animate__bounceInDown"
          style={{
            color: "white",
            marginTop: "16%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            fontFamily: "The Next Font",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h3" style={{ color: "lightBlue" }}>
            Your score for the Air element:
            <Typography variant="h2" sx={{ color: "white" }}>
              {points} / 40
            </Typography>
          </Typography>
          <Typography variant="h3" style={{ color: "lightBlue", marginTop: "10px" }}>
            Your integration with the element:{" "}
            <Typography variant="h2" sx={{ color: "white" }}>
              {percentage}%
            </Typography>
          </Typography>
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
          color: "white",
          fontFamily: "The Next Font",
        }}
        className="animate__animated animate__bounceInLeft"
      >
        <div>
          <Typography variant="h6" sx={{ color: "white" }}>
            Question {questionIndex + 1}
          </Typography>
          <Typography variant="body1" sx={{ color: "#87CEEB", fontSize: "40px" }}>
            {currentQuestion.question}
          </Typography>
          <List>
            {currentQuestion.answers.map((answer, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => handleAnswerSelection(index + 1)}
                  fullWidth
                  sx={{
                    fontSize: "200%",
                    "&:hover": {
                      color: "#00BFFF",
                      transition: "color 0.3s ease",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "90%" }}> * {answer}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "black", position: "relative" }}>
      {renderQuestion()}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {renderProgressDots()}
      </div>
    </div>
  );
};
