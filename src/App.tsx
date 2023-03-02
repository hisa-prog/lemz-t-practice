import { useState } from "react";
import "./App.css";
import { useModal } from "./components/layout/modalLayout";
import RevokeTeamModal from "./components/modals/revokeTeamModal";
import SendTeamModal from "./components/modals/sendTeamModal";
import Battery from "./components/sections/battery";
import Events from "./components/sections/events";
import Plasma from "./components/sections/plasma";
import Repair from "./components/sections/repair";

function App() {
  const sendTeamModal = useModal();
  const revokeTeamModal = useModal();
  const [selectedTeam, setSelectedTeam] = useState("");

  return (
    <div className="App">
      <SendTeamModal sendTeamModal={sendTeamModal} nameTeam={selectedTeam} />
      <RevokeTeamModal revokeTeamModal={revokeTeamModal} nameTeam={selectedTeam} />
      <div className="App__porthole"></div>
      <div className="App__main">
        <div className="App_main-leftSide">
          <div className="App_main-leftSide__plasma panel-border">
            <Plasma />
          </div>
          <div className="App_main-leftSide__repair panel-border">
            <Repair
              openSendModal={() => sendTeamModal.open()}
              openRevokeModal={() => revokeTeamModal.open()}
              setSelectedTeam={setSelectedTeam}
            />
          </div>
        </div>
        <div className="App_main-battery panel-border">
          <Battery />
        </div>
        <div className="App_main-events panel-border">
          <Events />
        </div>
      </div>
    </div>
  );
}

export default App;
