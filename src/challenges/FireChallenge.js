import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { useState } from "react";

const FireChallenge = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const fireQuestions = [
    {
      question: "How often do you take risks?",
      answers: ["I avoid risks", "Rarely", "Sometimes", "Often, I enjoy taking risks"],
    },
    {
      question: "How do you respond to challenges?",
      answers: [
        "I try to avoid them",
        "I attempt to avoid them",
        "I accept them occasionally",
        "I openly embrace challenges",
      ],
    },
    {
      question: "Do you get easily annoyed?",
      answers: [
        "I am calm",
        "I am rather calm",
        "I get annoyed sometimes",
        "I get annoyed frequently",
      ],
    },
    {
      question: "How do you rate your determination?",
      answers: [
        "I have low determination",
        "I have moderate determination",
        "I have fairly high determination",
        "I am highly determined",
      ],
    },
    {
      question: "Do you get bored quickly?",
      answers: ["I get bored quickly", "Rather quickly", "Not often", "I don't get bored easily"],
    },
    {
      question: "Do you prefer physical activity?",
      answers: ["I dislike moving at all", "Rarely", "Sometimes", "I love being active"],
    },
    {
      question: "How often do you seek new experiences?",
      answers: ["Never", "Rarely", "Sometimes", "Often, I love new experiences"],
    },
    {
      question: "Do you like to dominate situations?",
      answers: ["I avoid such situations", "Rarely", "Sometimes", "Yes, I like to dominate"],
    },
    {
      question: "How quickly do you make decisions?",
      answers: ["Very slowly", "Rather slowly", "Rather quickly", "Immediately"],
    },
    {
      question: "Do you get easily annoyed?",
      answers: ["Very rarely", "Rather rarely", "Sometimes", "Frequently"],
    },
  ];

  const handleAnswerSelection = (selectedPoints) => {
    setPoints(points + selectedPoints);
    setQuestionIndex(questionIndex + 1);
  };

  const renderQuestion = () => {
    if (questionIndex >= fireQuestions.length) {
      const percentage = (points / 40) * 100;
      return (
        <div style={{ color: "#D70040" }}>
          <Typography variant="h4">Your score for the Fire element: {points} / 40</Typography>
          <Typography variant="h5">
            Your level of integration with the element is: {percentage}%
          </Typography>
          {/* You can add result interpretation logic here */}
        </div>
      );
    }

    const currentQuestion = fireQuestions[questionIndex];
    return (
      <div
        style={{
          marginTop: "70px",
          marginLeft: "0px",
          textAlign: "left",
          color: "#D70040",
          fontFamily: "The Next Font",
        }}
      >
        <div>
          <Typography variant="h6" sx={{ color: "#D70040" }}>
            Question {questionIndex + 1}
          </Typography>
          <Typography variant="body1" sx={{ color: "orange", fontSize: "35px" }}>
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
                      color: "#ffcc00", // Zmiana koloru tekstu na hover
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

export default FireChallenge;
