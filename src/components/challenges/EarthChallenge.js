import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import "animate.css";
import { useState } from "react";

export const EarthChallenge = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [resultMessage, setResultMessage] = useState("");

  const roundToOneDecimalPlace = (number) => {
    return parseFloat(number.toFixed(1));
  };

  const earthQuestions = [
    {
      question: "How do you handle change?",
      answers: [
        { text: "Embrace change and adapt easily", points: 4 },
        { text: "Adapt to change with time", points: 3 },
        { text: "Prefer stability but can handle change", points: 2 },
        { text: "Avoid change and seek stability", points: 1 },
      ],
    },
    {
      question: "What is your approach to teamwork?",
      answers: [
        { text: "Enjoy collaborating with a diverse team", points: 4 },
        { text: "Work well in a team but prefer individual tasks", points: 3 },
        { text: "Prefer working independently but can cooperate", points: 2 },
        { text: "Prefer solo work and avoid group projects", points: 1 },
      ],
    },
    {
      question: "How do you connect with nature?",
      answers: [
        { text: "Feel deeply connected to nature and spend time outdoors", points: 4 },
        { text: "Appreciate nature and enjoy occasional outdoor activities", points: 3 },
        { text: "Like nature but prefer indoor activities", points: 2 },
        { text: "Rarely spend time in nature and prefer urban settings", points: 1 },
      ],
    },
    {
      question: "What is your attitude towards material possessions?",
      answers: [
        { text: "Value experiences over material possessions", points: 4 },
        { text: "Appreciate meaningful possessions but not overly attached", points: 3 },
        { text: "Enjoy collecting and owning material things", points: 2 },
        { text: "Seek minimalism and avoid unnecessary belongings", points: 1 },
      ],
    },
    {
      question: "How do you handle stress?",
      answers: [
        { text: "Stay calm and find practical solutions", points: 4 },
        { text: "Manage stress with a balanced approach", points: 3 },
        { text: "Feel stressed but cope with time", points: 2 },
        { text: "Easily overwhelmed by stress and struggle to cope", points: 1 },
      ],
    },
    {
      question: "What is your approach to learning?",
      answers: [
        { text: "Constantly seek knowledge and enjoy learning", points: 4 },
        { text: "Learn when needed and find it enjoyable", points: 3 },
        { text: "Prefer practical learning and hands-on experience", points: 2 },
        { text: "Avoid learning new things unless necessary", points: 1 },
      ],
    },
    {
      question: "How do you approach decision-making?",
      answers: [
        { text: "Consider all factors and take time to decide", points: 4 },
        { text: "Make decisions based on logic and reasoning", points: 3 },
        { text: "Rely on intuition and gut feelings", points: 2 },
        { text: "Struggle with decision-making and often second-guess", points: 1 },
      ],
    },
    {
      question: "What is your perspective on routines?",
      answers: [
        { text: "Thrive on routines and find comfort in structure", points: 4 },
        { text: "Have a balanced approach to routines", points: 3 },
        { text: "Prefer flexibility but have some routines", points: 2 },
        { text: "Avoid routines and enjoy spontaneity", points: 1 },
      ],
    },
    {
      question: "How do you express gratitude?",
      answers: [
        { text: "Express gratitude openly and regularly", points: 4 },
        { text: "Show gratitude through actions more than words", points: 3 },
        { text: "Feel grateful but don't always express it", points: 2 },
        { text: "Rarely express gratitude and keep feelings to yourself", points: 1 },
      ],
    },
    {
      question: "What is your approach to personal growth?",
      answers: [
        { text: "Seek constant personal growth and improvement", points: 4 },
        { text: "Value personal growth and work towards it", points: 3 },
        { text: "Focus on stability rather than personal growth", points: 2 },
        { text: "Avoid personal growth efforts and maintain status quo", points: 1 },
      ],
    },
  ];

  const handleAnswerSelection = (selectedPoints) => {
    setPoints(points + selectedPoints);
    setQuestionIndex(questionIndex + 1);

    if (questionIndex === earthQuestions.length - 1) {
      if (points >= 10 && points <= 20) {
        setResultMessage("Keep going! You're on the right track with the Earth element.");
      } else if (points >= 21 && points <= 30) {
        setResultMessage("Great job! You have a good understanding of the Earth element.");
      } else if (points >= 31 && points <= 40) {
        setResultMessage("Congratulations! You are an Earth element master!");
      }
    }
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
            backgroundColor: i <= questionIndex ? "#008000" : "white",
            margin: "0 5px",
          }}
        ></span>
      );
    }
    return progressDots;
  };

  const renderQuestion = () => {
    if (questionIndex >= earthQuestions.length) {
      const percentage = roundToOneDecimalPlace((points / (earthQuestions.length * 4)) * 100);

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
          <Typography variant="h3" style={{ color: "#008000" }}>
            Your score for the Earth element:
            <Typography variant="h2" sx={{ color: "white" }}>
              {points} / {earthQuestions.length * 4}
            </Typography>
          </Typography>
          <Typography variant="h3" style={{ color: "#008000", marginTop: "10px" }}>
            Your integration with the element:{" "}
            <Typography variant="h2" sx={{ color: "white" }}>
              {percentage}%
            </Typography>
          </Typography>
          <Typography variant="h3" style={{ color: "#008000", marginTop: "10px" }}>
            {resultMessage}
          </Typography>
        </div>
      );
    }

    const currentQuestion = earthQuestions[questionIndex];

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
          <Typography variant="h6" sx={{ color: "lightGreen" }}>
            Question {questionIndex + 1}
          </Typography>
          <Typography variant="body1" sx={{ color: "#097969", fontSize: "40px" }}>
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
                    color: "lightGreen",
                    "&:hover": {
                      color: "#097969",
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
