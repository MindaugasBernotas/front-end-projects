import logo from "./logo.svg";
import "./App.css";

const myObj = {color: 'yellow', fontFamily: "Georgia"}

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="range"></input>
          <input type="range"/>
          <p>
            Edit <code style={{color: 'red', fontFamily: "Georgia"}}>src/App.js</code> and save to reload.
            Edit <code style={myObj}>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div>
        <h1 className="App-oba">labas</h1>
      </div>
    </>
  );
}

export default App;
