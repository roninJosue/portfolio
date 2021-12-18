import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const windowDefined = typeof window !== "undefined";

const Theme = () => {
  const getThemeFromLocalStorage = windowDefined ? localStorage.getItem("theme") : "light";
  const [theme, setTheme] = useState(getThemeFromLocalStorage);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div role="button" className="icon-theme" onClick={handleChange}>
      {
        theme === "light" ? <FaMoon size={"3em"} />
          : <FaSun size={"3em"} />
      }
    </div>
  );
};

export default Theme;