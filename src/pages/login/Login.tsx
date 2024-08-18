import { useEffect, useState } from "react";
import { dataUser } from "../../temp/data";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [user] = useState(dataUser[0]);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (user.email === email && user.password === password) {
      setLoggedIn(true);
      // localStorage.setItem("user", loggedIn.toString());
    } else {
      console.log("Invalid credentials");
    }
  };

  console.log("logged", loggedIn);

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem("user", "true");
      navigate("/posting");
    }
  }, [navigate, loggedIn]);

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
