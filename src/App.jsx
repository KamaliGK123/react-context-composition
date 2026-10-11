
import "bootstrap/dist/css/bootstrap.min.css";

import Exe1 from "./components/exe1/Exe1";
import AppProvider from "./components/exe3/AppContext";
import ThemeToggle from "./components/exe3/ThemeToggle";
import StudentCard from "./components/exe3/StudentCard";

function App() {
  return (
    <>
      <Exe1 />

      <AppProvider>
        <div className="container mt-4">
          <h3>Shared Theme and Cohort</h3>
          <ThemeToggle />
          <StudentCard />
        </div>
      </AppProvider>
    </>
  );
}

export default App;
