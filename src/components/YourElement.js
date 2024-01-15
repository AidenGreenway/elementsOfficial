// AstrologicalElement.js

const determineElement = (day, month) => {
  // Ogień: Baran, Lew, Strzelec
  if (
    (month === 3 && day >= 21) ||
    (month === 4 && day <= 19) ||
    (month === 7 && day >= 23) ||
    (month === 8 && day <= 22) ||
    (month === 11 && day >= 22) ||
    (month === 12 && day <= 21)
  ) {
    return "Ogień";
  }
  // Ziemia: Byk, Panna, Koziorożec
  if (
    (month === 4 && day >= 20) ||
    (month === 5 && day <= 20) ||
    (month === 8 && day >= 23) ||
    (month === 9 && day <= 22) ||
    (month === 12 && day >= 22) ||
    (month === 1 && day <= 19)
  ) {
    return "Ziemia";
  }
  // Powietrze: Bliźnięta, Waga, Wodnik
  if (
    (month === 5 && day >= 21) ||
    (month === 6 && day <= 20) ||
    (month === 9 && day >= 23) ||
    (month === 10 && day <= 22) ||
    (month === 1 && day >= 20) ||
    (month === 2 && day <= 18)
  ) {
    return "Powietrze";
  }
  // Woda: Rak, Skorpion, Ryby
  if (
    (month === 6 && day >= 21) ||
    (month === 7 && day <= 22) ||
    (month === 10 && day >= 23) ||
    (month === 11 && day <= 21) ||
    (month === 2 && day >= 19) ||
    (month === 3 && day <= 20)
  ) {
    return "Woda";
  }
  return "Nieznany"; // Dla nieprawidłowych dat
};

export default determineElement;
