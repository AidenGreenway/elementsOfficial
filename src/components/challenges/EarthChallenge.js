import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import "animate.css";
import { useState } from "react";

export const EarthChallenge = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const earthQuestions = [
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
    for (let i = 0; i < earthQuestions.length; i++) {
      progressDots.push(
        <span
          key={i}
          style={{
            display: "inline-block",
            width: "20px",
            height: "20px",
            borderRadius: "90%",
            backgroundColor: i <= questionIndex ? "#228B22" : "white", // Earth element color
            margin: "0 5px",
          }}
        ></span>
      );
    }
    return progressDots;
  };

  const renderQuestion = () => {
    if (questionIndex >= earthQuestions.length) {
      const percentage = (points / (earthQuestions.length * 4)) * 100;

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
          <Typography variant="h3" style={{ color: "#228B22" }}>
            Your score for the Earth element:
            <Typography variant="h2" sx={{ color: "white" }}>
              {points} / {earthQuestions.length * 4}
            </Typography>
          </Typography>
          <Typography variant="h3" style={{ color: "#228B22", marginTop: "10px" }}>
            Your integration with the element:{" "}
            <Typography variant="h2" sx={{ color: "white" }}>
              {percentage}%
            </Typography>
          </Typography>
        </div>
      );
    }

    const currentQuestion = earthQuestions[questionIndex];

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
          <Typography variant="h6" sx={{ color: "#228B22" }}>
            Question {questionIndex + 1}
          </Typography>
          <Typography variant="body1" sx={{ color: "#00A36C", fontSize: "40px" }}>
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
                    color: "#228B22",
                    "&:hover": {
                      color: "#00A36C",
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
