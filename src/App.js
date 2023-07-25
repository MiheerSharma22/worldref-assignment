import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { useEffect, useState } from "react";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  function init() {
    if (sessionStorage.getItem("email")) {
      setIsUserLoggedIn(true);
    } else if (localStorage.getItem("email")) {
      setIsUserLoggedIn(true);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Routes>
        <Route
          path="/"
          element={<HomePage isUserLoggedIn={isUserLoggedIn} />}
        />
        <Route
          path="/login"
          element={<Login setIsUserLoggedIn={setIsUserLoggedIn} />}
        />
        <Route
          path="/register"
          element={<Register setIsUserLoggedIn={setIsUserLoggedIn} />}
        />
      </Routes>
    </div>
  );
}

export default App;
