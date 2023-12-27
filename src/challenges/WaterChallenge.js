import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { useState } from "react";

const WaterChallenge = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const waterQuestions = [
    {
      question: "Jak oceniasz swoją empatię?",
      answers: ["Niska", "Średnia", "Wysoka", "Bardzo wysoka"],
    },
    {
      question: "Czy jesteś introwertykiem czy ekstrawertykiem?",
      answers: ["Introwertyk", "Raczej introwertyk", "Raczej ekstrawertyk", "Ekstrawertyk"],
    },
    {
      question: "Jak często wyrażasz swoje emocje?",
      answers: ["Nigdy", "Rzadko", "Czasami", "Zawsze"],
    },
    {
      question: "Czy zazwyczaj unikasz konfliktów?",
      answers: ["Zawsze unikam", "Czasami unikam", "Rzadko unikam", "Nigdy nie unikam"],
    },
    {
      question: "Jak reagujesz na stres?",
      answers: ["Bardzo źle", "Źle", "Średnio", "Dobrze"],
    },
    {
      question: "Czy łatwo nawiązujesz głębokie relacje?",
      answers: ["Trudno", "Raczej trudno", "Raczej łatwo", "Łatwo"],
    },
    {
      question: "Jak często odczuwasz potrzebę pomagania innym?",
      answers: ["Nigdy", "Rzadko", "Czasami", "Zawsze"],
    },
    {
      question: "Czy często oddajesz się swoim marzeniom i fantazjom?",
      answers: ["Nigdy", "Rzadko", "Czasami", "Zawsze"],
    },
    {
      question: "Jak radzisz sobie z emocjonalnym obciążeniem?",
      answers: ["Źle", "Średnio", "Dobrze", "Bardzo dobrze"],
    },
    {
      question: "Jak często jesteś w stanie zrozumieć punkt widzenia innych osób?",
      answers: ["Nigdy", "Rzadko", "Czasami", "Zawsze"],
    },
  ];

  const handleAnswerSelection = (selectedPoints) => {
    setPoints(points + selectedPoints);
    setQuestionIndex(questionIndex + 1);
  };

  const renderQuestion = () => {
    if (questionIndex >= waterQuestions.length) {
      const percentage = (points / 40) * 100;
      return (
        <div style={{ color: "white" }}>
          <Typography variant="h4">Twój wynik dla żywiołu Wody: {points} / 40</Typography>
          <Typography variant="h5">Twój poziom integracji z żywiołem to: {percentage}%</Typography>
        </div>
      );
    }

    const currentQuestion = waterQuestions[questionIndex];
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

export default WaterChallenge;
