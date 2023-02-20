import { useEffect, useState } from "react";
import "./App.css";
import { useModal } from "./components/layout/modalLayout";
import SendTeamModal from "./components/modals/sendTeamModal";
import Battery from "./components/sections/battery";
import Plasma from "./components/sections/plasma";
import Repair from "./components/sections/repair";

function App() {
  const sendTeamModal = useModal();
  const [selectedTeam, setSelectedTeam] = useState("");

  return (
    <div className="App">
      <SendTeamModal sendTeamModal={sendTeamModal} nameTeam={selectedTeam} />
      <div className="App__porthole"></div>
      <div className="App__main">
        <div className="App_main-leftSide">
          <div className="App_main-leftSide__plasma panel-border">
            <Plasma />
          </div>
          <div className="App_main-leftSide__repair panel-border">
            <Repair
              openModal={() => sendTeamModal.open()}
              setSelectedTeam={setSelectedTeam}
            />
          </div>
        </div>
        <div className="App_main-battery panel-border">
          <Battery />
        </div>
      </div>
    </div>
  );
}

export default App;
