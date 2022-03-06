import React, { useState } from "react";
import axios from "axios";

const initialRegistrationValues = {
  username: "",
  password: "",
  passwordConfirm: "",
};

function Register({ setPage }) {
  const [userRegister, setUserRegister] = useState(initialRegistrationValues);
  const [error, setError] = useState(null);
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:80/auth/register", userRegister)
      .then((res) => {
        document.cookie = `token=${res.data.token}`;
      })
      .catch((err) => {
        setError(err.response.data);
      });
    setPage("auth");
  };

  const handleChange = (e) => {
    setError(null);
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setUserRegister((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="register--main">
      <h1 className="register--header">Register</h1>
      <form className="login--form">
        {error && <p className="register--error">{error}</p>}
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={userRegister.username}
          onChange={handleChange}
        />
        <label>Password: </label>
        <input
          type="number"
          name="password"
          value={userRegister.password}
          onChange={handleChange}
        />
        <label>Password Confirm: </label>
        <input
          type="number"
          name="passwordConfirm"
          value={userRegister.passwordConfirm}
          onChange={handleChange}
        />
        <button onClick={handleRegister} className="login--button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
