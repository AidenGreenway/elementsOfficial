import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { useState } from "react";

const AirChallenge = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const airQuestions = [
    {
      question: "Jak oceniasz swoją optymistyczność?",
      answers: ["Pesymista", "Raczej pesymista", "Raczej optymista", "Optymista"],
    },
    {
      question: "Czy lubisz zmiany?",
      answers: ["Unikam zmian", "Nie zawsze", "Czasami", "Uwielbiam zmiany"],
    },
    {
      question: "Jak często podkreślasz swoje zdanie?",
      answers: ["Nigdy", "Rzadko", "Czasami", "Zawsze"],
    },
    {
      question: "Czy potrafisz być analityczny?",
      answers: ["Zdecydowanie nie", "Raczej nie", "Czasami", "Zdecydowanie tak"],
    },
    {
      question: "Jak często dostosowujesz się do zmieniającej się sytuacji?",
      answers: ["Nigdy", "Rzadko", "Czasami", "Zawsze"],
    },
    {
      question: "Jak często zmieniasz zdanie?",
      answers: ["Bardzo rzadko", "Rzadko", "Czasami", "Często"],
    },
    {
      question: "Czy szybko się nudzisz rutyną?",
      answers: ["Bardzo szybko", "Raczej szybko", "Raczej nie", "Nigdy"],
    },
    {
      question: "Jak reagujesz na sytuacje stresowe?",
      answers: ["Bardzo źle", "Źle", "Średnio", "Dobrze"],
    },
    {
      question: "Czy potrafisz być analityczny?",
      answers: ["Zdecydowanie nie", "Raczej nie", "Czasami", "Zdecydowanie tak"],
    },
    {
      question: "Jak często dostosowujesz się do zmieniającej się sytuacji?",
      answers: ["Nigdy", "Rzadko", "Czasami", "Zawsze"],
    },
  ];

  const handleAnswerSelection = (selectedPoints) => {
    setPoints(points + selectedPoints);
    setQuestionIndex(questionIndex + 1);
  };

  const renderQuestion = () => {
    if (questionIndex >= airQuestions.length) {
      const percentage = (points / 40) * 100; // Obliczenie procentowego wyniku
      return (
        <div style={{ color: "white" }}>
          <Typography variant="h4">Twój wynik dla żywiołu Powietrza: {points} / 40</Typography>
          <Typography variant="h5">Twoja integracja z żywiołem wynosi: {percentage}%</Typography>
        </div>
      );
    }

    const currentQuestion = airQuestions[questionIndex];
    return (
      <div style={{ color: "white" }}>
        <div>
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
      </div>
    );
  };
  return <div style={{ backgroundColor: "black" }}>{renderQuestion()}</div>;
};

export default AirChallenge;
