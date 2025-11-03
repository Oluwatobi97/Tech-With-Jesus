import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Bootcamp from "./components/Bootcamp";
import Footer from "./components/Footer";

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
