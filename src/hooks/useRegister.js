import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ElementContext from "src/elementContext/ElementContext";
import { ColRef1, auth } from "src/firebaseConfig";

export const useRegister = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const { setElementInfo } = useContext(ElementContext);

  const buttonStyles = {
    boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 6px 14px 0 rgba(0,0,0,0.4)",
      transform: "translateY(-2px)",
    },
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!acceptedTerms) {
      alert("Please accept the terms and conditions.");
      return;
    }

    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("User created:", cred.user);

        const userId = cred.user.uid;

        addDoc(ColRef1, {
          userId: userId,
          email: email,
          password: password,
          diaryEntries: [],
        })
          .then((docRef) => {
            console.log("User data added to Firestore with ID: ", docRef.id);

            localStorage.setItem("email", email);
            setElementInfo({ email: email });
          })
          .catch((error) => {
            console.error("Error adding user data to Firestore:", error);
          });

        setEmail("");
        setPassword("");
        setAcceptedTerms(false);

        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const handleGoToRegulamin = () => {
    navigate("/regulamin");
  };

  const handleBackToLoginClick = () => {
    navigate("/");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    acceptedTerms,
    setAcceptedTerms,
    handleRegister,
    handleGoToRegulamin,
    handleBackToLoginClick,

    buttonStyles,
  };
};
