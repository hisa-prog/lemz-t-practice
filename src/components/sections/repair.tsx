import { useContext } from "react";
import TeamStroke from "../atoms/teamString";
import { RepairTeamsContext } from "../context/repairTeamsContext";
import { RepairProps } from "../interfaces";

const Repair = ({
  openSendModal,
  openRevokeModal,
  setSelectedTeam,
}: RepairProps) => {
  const { teams } = useContext(RepairTeamsContext);
  return (
    <div className="flex flex-col w-full h-fit">
      <p className="text-white text-3xl self-center">Repair Teams</p>
      {teams.length != 0 ? (
        <>
          {teams.map((team, index) => (
            <div key={index}>
              <TeamStroke
                index={index}
                name={team.name_team}
                location={team.current_location}
                busy={team.is_busy}
                openSendModal={openSendModal}
                openRevokeModal={openRevokeModal}
                setSelectedTeam={setSelectedTeam}
              />
            </div>
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
