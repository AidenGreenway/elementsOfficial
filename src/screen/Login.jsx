import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === "M" && credentials.password === "M") {
      navigate("/"); // Przekierowanie do strony głównej
    } else {
      alert("Nieprawidłowe dane logowania");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Login"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Hasło"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Zaloguj się</button>
      </form>
      <div className="form-links">
        <Link to="/register">Nie masz konta? Zarejestruj się</Link>
        <Link to="/forgot-password">Zapomniałem hasła</Link>
      </div>
    </div>
  );
}

export default Login;
