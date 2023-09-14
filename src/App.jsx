import { useState } from "react";
import LandingPage from "./screens/landingPage/LandingPage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <LandingPage />
    </div>
  );
}

export default App;
