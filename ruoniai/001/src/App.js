import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import "./Mygtukas";

function App() {
  const [count, setCount] = useState(3);
  const mult5 = () => {
    setCount((c) => c * 5);
  };

  const reset3 = () => {
    setCount(3);
  };
  const sum = () => {
    setCount((c) => c + 5);
  };
  const divide = () => {
    setCount((c) => c / 2);
  };
  return (
    <div className="App">
      <header>
        <h1>COUNT: {count}</h1>
        <h2>COUNT: {count}</h2>
        <button onClick={mult5}>M1</button>
        <button onClick={reset3}>Reset</button>

        <button onClick={sum}>Sum</button>
        <button onClick={divide}>Divide / 2</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>

        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>

        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
        <button onClick={sum}>Sum</button>
      </header>
    </div>
  );
}

export default App;
