import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  let a = 5;
  let b = 10;
  let c = a + b;
  let textInput = React.createRef();
  let textOut = React.createRef();
  const [output, setOutput] = useState("hello");
  function f2() {
    console.log("move ");
  }
  function f1() {
    console.log("f1 work " + c);
    alert("veikia");
  }
  function f3(arg) {
    console.log("f1 work " + arg);
  }
  function showInput(event) {
    console.log("input");
    console.log(event.target.value);
    textOut.current.innerHTML = textInput.current.value;
    setOutput(textInput.current.value);
    // console.log(this.value); nesuveike issiaiskinti veliau
  }
  return (
    <>
      <h1>Įvykiai</h1>
      <section>
        <h2>Button</h2>
        <button onClick={f1}>Push</button>
      </section>

      <h1>Double click + mouse move</h1>
      <section>
        <div className="test" onDoubleClick={f1} onMouseMove={f2}></div>
        <div className="test2" onDoubleClick={() => f3(8 + 8)}></div>
      </section>
      <section>
        <h2>Input</h2>
        <input
          type="text"
          onInput={showInput}
          ref={textInput}
          defaultValue="hi"
        />
        <p ref={textOut}></p>

        <h3>{output}</h3>
      </section>
    </>
  );
}

export default App;
