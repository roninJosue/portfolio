import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const windowDefined = typeof window !== "undefined";

const getThemeFromLocalStorage = windowDefined ? localStorage.getItem("theme") : "light";

const Theme = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage || "light");

  const handleChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
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