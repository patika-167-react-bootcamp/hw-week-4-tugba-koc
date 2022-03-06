import React, { useState } from "react";
import Login from "../components/Login";
import DirectToRegister from "../components/DirectToRegister";
import Register from "../components/Register";

function Auth(setIsLogged) {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "register" ? (
        <Register setPage={setPage} />
      ) : (
        <div className="route-links--main">
          <Login setIsLogged={setIsLogged} setPage={setPage} />
          <DirectToRegister setPage={setPage} />
        </div>
      )}
    </>
  );
}

export default Auth;
