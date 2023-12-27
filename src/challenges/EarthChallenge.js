import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { useState } from "react";

const EarthChallenge = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const earthQuestions = [
    {
      question: "Jak oceniasz swoją cierpliwość?",
      answers: ["Niska", "Średnia", "Wysoka", "Bardzo wysoka"],
    },
    {
      question: "Czy lubisz pracować długo nad jednym zadaniem?",
      answers: ["Zdecydowanie nie", "Nie zawsze", "Czasami", "Zawsze"],
    },
    {
      question: "Jak często analizujesz sytuacje przed podjęciem decyzji?",
      answers: ["Nigdy", "Rzadko", "Czasami", "Zawsze"],
    },
    {
      question: "Czy masz skłonność do planowania z góry?",
      answers: ["Zdecydowanie nie", "Raczej nie", "Czasami", "Zawsze"],
    },
    {
      question: "Jak radzisz sobie ze stresem?",
      answers: ["Źle", "Średnio", "Dobrze", "Bardzo dobrze"],
    },
    {
      question: "Czy często udzielasz pomocy innym?",
      answers: ["Rzadko", "Czasami", "Często", "Zawsze"],
    },
    {
      question: "Jak radzisz sobie w sytuacjach kryzysowych?",
      answers: [
        "Zazwyczaj tracę kontrolę",
        "Czasami tracę kontrolę",
        "Rzadko tracę kontrolę",
        "Nigdy nie tracę kontrolę",
      ],
    },
    {
      question: "Czy dbasz o swoje otoczenie?",
      answers: ["Rzadko", "Czasami", "Często", "Zawsze"],
    },
    {
      question: "Jak często bazujesz na swojej intuicji?",
      answers: ["Rzadko", "Czasami", "Często", "Zawsze"],
    },
    {
      question: "Czy zazwyczaj przed podejmowaniem decyzji słuchasz opinii innych?",
      answers: ["Rzadko", "Czasami", "Często", "Zawsze"],
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
        <div style={{ color: "white" }}>
          <Typography variant="h4">Twój wynik dla żywiołu Ziemi: {points} / 40</Typography>
          <Typography variant="h5">Twój poziom integracji z żywiołem to: {percentage}%</Typography>
        </div>
      );
    }

    const currentQuestion = earthQuestions[questionIndex];
    return (
      <div style={{ color: "white" }}>
        <Typography variant="h6">Pytanie {questionIndex + 1}</Typography>
        <Typography variant="body1">{currentQuestion.question}</Typography>
        <List>
          {currentQuestion.answers.map((answer, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => handleAnswerSelection(index + 1)}
                variant="contained"
                fullWidth
              >
                {answer}
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
