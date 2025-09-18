import React, { useEffect, useState } from "react";
import Home from "./components/home";
import SplashScreen from "./components/splash_screen";

function App() {
  const [ShowSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return ShowSplash ? <SplashScreen /> : <Home />;
}

export default App;
