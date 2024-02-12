import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import "animate.css";
import { useState } from "react";

export const WaterChallenge = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const waterQuestions = [
    {
      question: "How do you handle emotions?",
      answers: ["Emotionally detached", "Moderate", "Sensitive", "Highly empathetic"],
    },
    {
      question: "Are you adaptable?",
      answers: ["Prefer routine", "Adapt with effort", "Adaptable", "Embrace change"],
    },
    {
      question: "How do you approach relationships?",
      answers: ["Independent", "Balanced", "Close-knit", "Deep emotional connections"],
    },
    {
      question: "Do you trust easily?",
      answers: ["Distrustful", "Cautiously trusting", "Trust moderately", "Easily trusting"],
    },
    {
      question: "How do you handle stress?",
      answers: ["Stoic", "Handle it well", "Feel stressed but cope", "Get overwhelmed"],
    },
    {
      question: "Are you intuitive?",
      answers: ["Rely on facts", "Occasionally intuitive", "Fairly intuitive", "Highly intuitive"],
    },
    {
      question: "How do you communicate?",
      answers: ["Reserved", "Clear and concise", "Expressive", "In-depth and detailed"],
    },
    {
      question: "How do you handle conflicts?",
      answers: ["Avoid conflicts", "Prefer compromise", "Assertive", "Address conflicts openly"],
    },
    {
      question: "Are you introverted or extroverted?",
      answers: ["Introverted", "Balanced", "Slightly extroverted", "Extroverted"],
    },
    {
      question: "How do you recharge?",
      answers: ["Alone time", "Quiet environment", "In nature", "Socializing with loved ones"],
    },
  ];

  const handleAnswerSelection = (selectedPoints) => {
    setPoints(points + selectedPoints);
    setQuestionIndex(questionIndex + 1);
  };

  const renderProgressDots = () => {
    const progressDots = [];
    for (let i = 0; i < waterQuestions.length; i++) {
      progressDots.push(
        <span
          key={i}
          style={{
            display: "inline-block",
            width: "20px",
            height: "20px",
            borderRadius: "90%",
            backgroundColor: i <= questionIndex ? "#4682B4" : "white", // Water element color
            margin: "0 5px",
          }}
        ></span>
      );
    }
    return progressDots;
  };

  const renderQuestion = () => {
    if (questionIndex >= waterQuestions.length) {
      const percentage = (points / (waterQuestions.length * 4)) * 100;

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
          color: "white",
          fontFamily: "The Next Font",
        }}
        className="animate__animated animate__bounceInLeft"
      >
        <div>
          <Typography variant="h6" sx={{ color: "#4682B4" }}>
            Question {questionIndex + 1}
          </Typography>
          <Typography variant="body1" sx={{ color: "#1E90FF", fontSize: "40px" }}>
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
                    color: "#4682B4",
                    "&:hover": {
                      color: "#1E90FF",
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
    <div style={{ backgroundColor: "", position: "relative" }}>
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
