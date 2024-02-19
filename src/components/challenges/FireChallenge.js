import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import "animate.css";
import { useState } from "react";

export const FireChallenge = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const fireQuestions = [
    {
      question: "How do you handle challenges?",
      answers: [
        "Avoid challenges",
        "Deal with them reluctantly",
        "Face them bravely",
        "Seek challenges",
      ],
    },
    {
      question: "Are you spontaneous?",
      answers: [
        "Very structured",
        "Somewhat structured",
        "Somewhat spontaneous",
        "Very spontaneous",
      ],
    },
    {
      question: "Do you enjoy taking risks?",
      answers: [
        "Prefer safety",
        "Take calculated risks",
        "Enjoy moderate risks",
        "Love taking risks",
      ],
    },
    {
      question: "How do you express your emotions?",
      answers: ["Reserved", "Moderate", "Expressive", "Very expressive"],
    },
    {
      question: "Are you competitive?",
      answers: ["Not at all", "Slightly", "Moderately", "Very competitive"],
    },
    {
      question: "How do you handle criticism?",
      answers: [
        "Avoid it",
        "Take it personally",
        "Consider it objectively",
        "Welcome constructive criticism",
      ],
    },
    {
      question: "Do you enjoy leading others?",
      answers: ["Prefer to follow", "Lead when necessary", "Enjoy leading", "Natural leader"],
    },
    {
      question: "How do you approach new opportunities?",
      answers: ["Skeptical", "Cautious", "Open-minded", "Enthusiastic"],
    },
    {
      question: "Do you enjoy socializing?",
      answers: [
        "Prefer solitude",
        "Introverted",
        "Extroverted with limits",
        "Extroverted and social",
      ],
    },
    {
      question: "How do you handle failure?",
      answers: ["Devastated", "Disheartened", "Learn from it", "See it as a stepping stone"],
    },
  ];

  const handleAnswerSelection = (selectedPoints) => {
    setPoints(points + selectedPoints);
    setQuestionIndex(questionIndex + 1);
  };

  const renderProgressDots = () => {
    const progressDots = [];
    for (let i = 0; i < fireQuestions.length; i++) {
      progressDots.push(
        <span
          key={i}
          style={{
            display: "inline-block",
            width: "20px",
            height: "20px",
            borderRadius: "90%",
            backgroundColor: i <= questionIndex ? "#FF4500" : "white", // Fire element color
            margin: "0 5px",
          }}
        ></span>
      );
    }
    return progressDots;
  };

  const renderQuestion = () => {
    if (questionIndex >= fireQuestions.length) {
      const percentage = (points / (fireQuestions.length * 4)) * 100;

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
          <Typography variant="h3" style={{ color: "#FF4500" }}>
            Your score for the Fire element:
            <Typography variant="h2" sx={{ color: "white" }}>
              {points} / {fireQuestions.length * 4}
            </Typography>
          </Typography>
          <Typography variant="h3" style={{ color: "#FF4500", marginTop: "10px" }}>
            Your integration with the element:{" "}
            <Typography variant="h2" sx={{ color: "white" }}>
              {percentage}%
            </Typography>
          </Typography>
        </div>
      );
    }

    const currentQuestion = fireQuestions[questionIndex];

    // Create a shuffled copy of the answers array
    const shuffledAnswers = currentQuestion.answers.slice().sort(() => Math.random() - 0.5);

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
          <Typography variant="h6" sx={{ color: "orange" }}>
            Question {questionIndex + 1}
          </Typography>
          <Typography variant="body1" sx={{ color: "#D70040", fontSize: "40px" }}>
            {currentQuestion.question}
          </Typography>
          <List>
            {shuffledAnswers.map((answer, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => handleAnswerSelection(index + 1)}
                  fullWidth
                  sx={{
                    fontSize: "200%",
                    color: "orange",
                    "&:hover": {
                      color: "#D70040",
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
