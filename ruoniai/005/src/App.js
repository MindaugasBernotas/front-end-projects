import "./App.scss";
import Select from "./Select";
import Checkbox from "./Checkbox";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-7">
          <Select />
          <Checkbox />
        </div>
      </div>
    </div>
  );
}

export default App;
