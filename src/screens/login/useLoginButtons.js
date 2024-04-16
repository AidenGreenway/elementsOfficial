const useLoginButtons = () => {
  const styledButton = {
    textAlign: "left",
    mt: 1,
    mb: 1,
    right: 0,
    color: "white",
    border: "1px solid white",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  };
  const textFieldStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
    },
    "& input": {
      color: "white", // ustawia kolor tekstu na biały
      "::placeholder": {
        color: "white", // ustawia kolor placeholdera na biały
      },
    },
  };
  return { styledButton, textFieldStyles };
};

export default useLoginButtons;
