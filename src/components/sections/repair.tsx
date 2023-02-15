import { testRepairTeam } from "../../data/repairTeams";
import TeamStroke from "../atoms/teamStroke";
import { IRepair } from "../interfaces";

const Repair = ({openModal, setSelectedTeam} : IRepair) => {
  return (
    <div className="flex flex-col w-full h-fit">
      <p className="text-white text-3xl self-center">Repair Teams</p>
      {testRepairTeam.map((team, index) => (
        <TeamStroke
          index={index}
          name={team.name_team}
          location={team.current_location}
          busy={team.is_busy}
          openModal={openModal}
          setSelectedTeam={setSelectedTeam}
        />
      ))}
    </div>
  );
};

export default Repair;
