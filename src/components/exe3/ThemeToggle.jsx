import { useContext } from "react";
import { AppContext } from "./context";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button className="btn btn-primary" onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}

export default ThemeToggle;