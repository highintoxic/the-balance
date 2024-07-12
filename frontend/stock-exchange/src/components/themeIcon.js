import { MoonIcon } from "@heroicons/react/16/solid";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`rounded-md border-1 border-neutral-400 p-2 absolute right-5 xl:right-20 shadow-md transition duration-300 hover:scale-125 ${
        darkMode ? "shadow-gray-800" : null
      }`}
    >
      <MoonIcon
        className={`h-4 w-4 cursor-pointer stroke-1 ${
          darkMode
            ? "fill-yellow-400 stroke-yellow-400"
            : "fill-none stroke-neutral-400"
        }`}
      />
    </button>
  );
};

export default ThemeIcon;