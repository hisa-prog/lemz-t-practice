import "./App.css";
import Battery from "./components/sections/battery";
import Plasma from "./components/sections/plasma";
import Repair from "./components/sections/repair";

function App() {
  return (
    <div className="App">
      <div className="App__porthole"></div>
      <div className="App__main">
        <div className="App_main-battery panel-border">
          <Battery/>
        </div>
        <div className="App_main-plasma panel-border">
          <Plasma/>
        </div>
        <div className="App_main-repair panel-border">
          <Repair/>
        </div>
      </div>
    </div>
  );
}

export default App;
