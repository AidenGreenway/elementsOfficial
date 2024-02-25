import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import "animate.css";
import { useState } from "react";

export const AirChallenge = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const roundToOneDecimalPlace = (number) => {
    return parseFloat(number.toFixed(1));
  };

  const airQuestions = [
    {
      question: "How do you perceive change?",
      answers: [
        { text: "Prefer stability", points: 1 },
        { text: "Accept changes with caution", points: 2 },
        { text: "Adapt well to changes", points: 3 },
        { text: "Embrace and thrive in a constantly changing environment", points: 4 },
      ],
    },
    {
      question: "What is your approach to decision-making?",
      answers: [
        { text: "Avoid making decisions", points: 1 },
        { text: "Make decisions cautiously", points: 2 },
        { text: "Consider options before deciding", points: 3 },
        { text: "Quick and decisive decision-maker", points: 4 },
      ],
    },
    {
      question: "How do you handle stress?",
      answers: [
        { text: "Get easily overwhelmed", points: 1 },
        { text: "Handle stress with difficulty", points: 2 },
        { text: "Manage stress well", points: 3 },
        { text: "Stay calm and focused under stress", points: 4 },
      ],
    },
    {
      question: "Are you open to new ideas and perspectives?",
      answers: [
        { text: "Prefer familiar ideas", points: 1 },
        { text: "Open to ideas with caution", points: 2 },
        { text: "Enjoy exploring new ideas", points: 3 },
        { text: "Constantly seek and embrace new perspectives", points: 4 },
      ],
    },
    {
      question: "How do you approach social interactions?",
      answers: [
        { text: "Prefer solitude", points: 1 },
        { text: "Introverted with a few close friends", points: 2 },
        { text: "Enjoy socializing in small groups", points: 3 },
        { text: "Extroverted and thrive in large social gatherings", points: 4 },
      ],
    },
    {
      question: "What is your attitude towards routine?",
      answers: [
        { text: "Crave routine and structure", points: 1 },
        { text: "Prefer some routine but value flexibility", points: 2 },
        { text: "Enjoy a balance of routine and spontaneity", points: 3 },
        { text: "Dislike routine and seek constant variety", points: 4 },
      ],
    },
    {
      question: "How do you handle conflicts?",
      answers: [
        { text: "Avoid conflicts at all costs", points: 1 },
        { text: "Prefer not to engage in conflicts", points: 2 },
        { text: "Address conflicts calmly and diplomatically", points: 3 },
        { text: "View conflicts as opportunities for growth", points: 4 },
      ],
    },
    {
      question: "Do you enjoy intellectual challenges?",
      answers: [
        { text: "Prefer simple and straightforward tasks", points: 1 },
        { text: "Enjoy moderate intellectual challenges", points: 2 },
        { text: "Thrive in solving complex problems", points: 3 },
        { text: "Constantly seek and enjoy intellectual stimulation", points: 4 },
      ],
    },
    {
      question: "How do you express your creativity?",
      answers: [
        { text: "Not particularly creative", points: 1 },
        { text: "Creativity in specific areas of interest", points: 2 },
        { text: "Express creativity in various forms", points: 3 },
        { text: "Constantly exploring and pushing creative boundaries", points: 4 },
      ],
    },
    {
      question: "What is your approach to learning?",
      answers: [
        { text: "Prefer established knowledge", points: 1 },
        { text: "Value both tradition and innovation in learning", points: 2 },
        { text: "Embrace new knowledge and perspectives", points: 3 },
        { text: "Constantly seek and absorb new information", points: 4 },
      ],
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
      const percentage = roundToOneDecimalPlace((points / (airQuestions.length * 4)) * 100);

      let resultMessage = "";
      if (percentage >= 0 && percentage <= 25) {
        resultMessage = "You may not resonate strongly with the Air element.";
      } else if (percentage > 25 && percentage <= 50) {
        resultMessage = "You have some qualities associated with the Air element.";
      } else if (percentage > 50 && percentage <= 75) {
        resultMessage = "You resonate well with the Air element.";
      } else {
        resultMessage = "Congratulations! You embody the essence of the Air element.";
      }

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
              {points} / {airQuestions.length * 4}
            </Typography>
          </Typography>
          <Typography variant="h3" style={{ color: "lightBlue", marginTop: "10px" }}>
            Your integration with the element:{" "}
            <Typography variant="h2" sx={{ color: "white" }}>
              {percentage}%
            </Typography>
          </Typography>
          <Typography variant="h3" style={{ color: "lightBlue", marginTop: "10px" }}>
            {resultMessage}
          </Typography>
        </div>
      );
    }

    const currentQuestion = airQuestions[questionIndex];
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
          <Typography variant="h6" sx={{ color: "white" }}>
            Question {questionIndex + 1}
          </Typography>
          <Typography variant="body1" sx={{ color: "#87CEEB", fontSize: "40px" }}>
            {currentQuestion.question}
          </Typography>
          <List>
            {shuffledAnswers.map((answer, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => handleAnswerSelection(answer.points)}
                  fullWidth
                  sx={{
                    fontSize: "200%",
                    "&:hover": {
                      color: "#00BFFF",
                      transition: "color 0.3s ease",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "90%" }}> * {answer.text}</Typography>
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
