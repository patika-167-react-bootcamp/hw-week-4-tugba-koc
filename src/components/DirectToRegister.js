import React from "react";

function DirectToRegister({ setPage }) {
  return (
    <div className="direct-register--main">
      <div className="direct-register--main-Inner">
        <h1 className="direct-register--header">Register</h1>
        <p className="direct-register--text-content">
          Don't have an account? Register one!
        </p>
        <button
          onClick={() => setPage("register")}
          className="direct-register--button"
        >
          Register an Account
        </button>
      </div>
    </div>
  );
}

export default DirectToRegister;
