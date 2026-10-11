import { useState } from "react";
import { AppContext } from "./context";

function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [cohortName] = useState("MentorBridge");

  function toggleTheme() {
    setTheme((previousTheme) =>
      previousTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <AppContext.Provider
      value={{ theme, cohortName, toggleTheme }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;