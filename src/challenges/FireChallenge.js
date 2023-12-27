import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { useState } from "react";

const FireChallenge = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const fireQuestions = [
    {
      question: "Czy często podejmujesz ryzyko?",
      answers: ["Unikam ryzyka", "Rzadko", "Czasami", "Często, lubię ryzyko"],
    },
    {
      question: "Jak reagujesz na wyzwania?",
      answers: [
        "Unikam wyzwań",
        "Staram się im unikać",
        "Akceptuję je czasami",
        "Akceptuję wyzwania otwarcie",
      ],
    },
    {
      question: "Czy łatwo się denerwujesz?",
      answers: [
        "Jestem spokojny/a",
        "Raczej spokojny/a",
        "Czasami łatwo się denerwuję",
        "Często się denerwuję",
      ],
    },
    {
      question: "Jak oceniasz swoją determinację?",
      answers: [
        "Jestem mało zdeterminowany/a",
        "Mam średnią determinację",
        "Jestem dość zdeterminowany/a",
        "Jestem bardzo zdeterminowany/a",
      ],
    },
    {
      question: "Czy szybko się nudzisz?",
      answers: ["Szybko się nudzę", "Raczej szybko", "Raczej nie", "Nie nudzę się łatwo"],
    },
    {
      question: "Czy preferujesz aktywność fizyczną?",
      answers: ["Wcale nie lubię się ruszać", "Rzadko", "Czasami", "Uwielbiam być aktywny/a"],
    },
    {
      question: "Jak często szukasz nowych doświadczeń?",
      answers: ["Nigdy", "Rzadko", "Czasami", "Często, uwielbiam nowe doświadczenia"],
    },
    {
      question: "Czy lubisz dominować w sytuacjach?",
      answers: ["Unikam takich sytuacji", "Rzadko", "Czasami", "Tak, lubię dominować"],
    },
    {
      question: "Jak szybko podejmujesz decyzje?",
      answers: ["Bardzo wolno", "Raczej powoli", "Raczej szybko", "Natychmiastowo"],
    },
    {
      question: "Czy łatwo się denerwujesz?",
      answers: ["Bardzo rzadko", "Raczej rzadko", "Czasami", "Często"],
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
        <div style={{ color: "white" }}>
          <Typography variant="h4">Twój wynik dla żywiołu Ognia: {points} / 40</Typography>
          <Typography variant="h5">Twój poziom integracji z żywiołem to: {percentage}%</Typography>
          {/* Tutaj można dodać logikę interpretacji wyników */}
        </div>
      );
    }

    const currentQuestion = fireQuestions[questionIndex];
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

export default FireChallenge;
