import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ElementContext from "src/elementContext/ElementContext";
import { auth } from "src/firebaseConfig";

export const useSignIn = () => {
  const navigate = useNavigate();
  const { setElementInfo } = useContext(ElementContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = e.target.email.value;
    const passwordValue = e.target.password.value;
    setElementInfo({ email: emailValue });

    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((data) => {
        localStorage.setItem("token", data.user.accessToken);
        navigate("/dashboard", { state: { userEmail: emailValue } });
      })
      .catch((error) => {
        setError("wrong data,try again");
        console.error("Błąd logowania:", error.message);
      });
  };

  const handleSignUpClick = () => {
    navigate("/register");
  };

  const handleForgotClick = () => {
    navigate("/forgot-password");
  };

  return {
    handleSignUpClick,
    handleForgotClick,
    email,
    setEmail,
    password,
    setPassword,
    error,
    setElementInfo,
    handleSubmit,
  };
};
