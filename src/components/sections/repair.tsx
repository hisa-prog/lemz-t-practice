import { useContext } from "react";
import { testRepairTeam } from "../../data/repairTeams";
import TeamStroke from "../atoms/teamString";
import { RepairTeamsContext } from "../context/repairTeams";
import { IRepair } from "../interfaces";

const Repair = ({ openModal, setSelectedTeam }: IRepair) => {
  const { teams } = useContext(RepairTeamsContext);
  return (
    <div className="flex flex-col w-full h-fit">
      <p className="text-white text-3xl self-center">Repair Teams</p>
      {teams.length != 0 ? (
        <>
          {teams.map((team, index) => (
            <TeamStroke
              index={index}
              name={team.name_team}
              location={team.current_location}
              busy={team.is_busy}
              openModal={openModal}
              setSelectedTeam={setSelectedTeam}
            />
          ))}
        </>
      ) : (
        <img
          src="/images/loader.png"
          alt="loader"
          className="animate-spin w-16 my-4 self-center"
        />
      )}
    </div>
  );
};

export default Repair;
