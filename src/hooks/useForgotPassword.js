import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useForgotPassword = (handleForgotPassword) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleForgotPassword(email);
  };

  const handleBackToLoginClick = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return {
    handleBackToLoginClick,
    email,
    handleChange,
    handleSubmit,
  };
};
