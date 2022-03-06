import React, { useState } from "react";
import "./App.css";
import Auth from "./pages/Auth";
import Category from "./pages/Category";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  React.useEffect(() => {
    const token = document.cookie.split("token=")[1];
    if (token) {
      setIsLogged(true);
    }
  }, []);

  if (isLogged) {
    return <Category />;
  }
  return (
    <div className="App">
      <Auth setIsLogged={setIsLogged} />
    </div>
  );
}

export default App;
