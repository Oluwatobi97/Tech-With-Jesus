import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Bootcamp from "./Bootcamp";
import Footer from "./Footer";

const App: React.FC = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="bg-light-background dark:bg-dark-background text-light-text-primary dark:text-dark-text-primary transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Services />
      <Bootcamp />
      <Footer />
    </div>
  );
};

export default App;
