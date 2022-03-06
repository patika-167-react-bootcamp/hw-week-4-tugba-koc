import React, { useState } from "react";
import axios from "axios";

const initialRegistrationValues = {
  username: "",
  password: "",
};

function Login(setIsLogged,setPage) {
  const [userLogin, setUserLogin] = useState(initialRegistrationValues);

  const handleLogin = async () => {
    await axios
      .post("http://localhost:80/auth/login", userLogin)
      .then((res) => {
        document.cookie = `token=${res.data.token}`;
      })
      .then((response) => {
        setIsLogged(true);
      })
      .catch((err) => {
        console.log(err);
      });
      setPage("app")
  };

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setUserLogin((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="login--main">
      <h1 className="login--header">Login</h1>
      <form className="login--form">
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={userLogin.username}
          onChange={handleChange}
        />
        <label>Password: </label>
        <input
          type="number"
          name="password"
          value={userLogin.password}
          onChange={handleChange}
        />
        <button onClick={handleLogin} className="login--button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
