const determineElement = (day, month) => {
  const isValidMonth = month >= 1 && month <= 12;
  const isValidDay = day >= 1 && day <= 31;

  if (!isValidMonth || !isValidDay) {
    return "wrong data";
  }

  // Ogień: Baran, Lew, Strzelec
  if (
    (month === 3 && day >= 21) ||
    (month === 4 && day <= 19) ||
    (month === 7 && day >= 23) ||
    (month === 8 && day <= 22) ||
    (month === 11 && day >= 22) ||
    (month === 12 && day <= 21)
  ) {
    return "fire";
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
    return "earth";
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
    return "air";
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
    return "water";
  }

  return "wrong data";
};

export default determineElement;
