import "./App.css";
import Header from "./Header";
import About from "./About";
import Users from "./Users";
import Main from "./Main";

import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={Main} />
          <Route path="/abaut" element={About} />
          <Route exact path="/users" element={Users} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
