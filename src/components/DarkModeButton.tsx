import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

function DarkModeButton() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else setTheme("light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <MoonIcon className="h-5" />
      ) : (
        <SunIcon className="h-5" />
      )}
    </button>
  );
}

export default DarkModeButton;
