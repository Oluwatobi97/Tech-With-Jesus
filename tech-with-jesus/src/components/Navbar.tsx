import React from "react";
import { Sun, Moon } from "lucide-react";

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <nav className="fixed top-0 w-full z-50 bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-light-border dark:border-dark-border text-light-text-primary dark:text-dark-text-primary shadow-glass px-6 py-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-bold tracking-wide text-accent cursor-pointer">
          Teach With Jesus
        </div>

        {/* Links */}
        <div className="flex items-center space-x-8 text-light-text-secondary dark:text-dark-text-secondary text-lg font-medium">
          <a
            href="#services"
            className="hover:text-accent-hover transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#bootcamp"
            className="hover:text-accent-hover transition-colors duration-200"
          >
            Bootcamp
          </a>
          <a
            href="#contact"
            className="hover:text-accent-hover transition-colors duration-200"
          >
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} className="text-yellow-400" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
