import { useContext } from "react";
import { AppContext } from "./context";

function StudentCard() {
  const { theme, cohortName } = useContext(AppContext);

  return (
    <div
      className={`card p-4 mt-3 ${
        theme === "dark"
          ? "bg-dark text-white"
          : "bg-light text-dark"
      }`}
    >
      <h5>Student Card</h5>
      <p>Cohort: {cohortName}</p>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default StudentCard;