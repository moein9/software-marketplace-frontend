import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <div className="w-full h-96 bg-black"></div>
    </div>
  );
}

export default App;
