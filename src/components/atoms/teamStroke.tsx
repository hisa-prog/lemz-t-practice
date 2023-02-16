import { ITeamStroke } from "../interfaces";

const TeamStroke = ({index, name, location, busy, className, openModal, setSelectedTeam}: ITeamStroke) => {
  return (
    <div key={index} className={`flex justify-between items-center mt-4 py-2 ${className}`}>
      <p className="text-white text-2xl">{name}</p>
      <p className="text-white text-2xl">{location}</p>
      <p
        className={`${
          busy ? "text-red-500" : "text-green-400"
        } text-2xl`}
      >
        {busy ? "Busy" : "Free"}
      </p>
      <button 
        className="flex justify-center items-center p-2 text-white border-2 border-panel rounded-lg cursor-pointer hover:opacity-50"
        onClick={busy ? () => {}  : openModal}
      >
        {busy ? "Revoke" : "Repair"}
      </button>
    </div>
  );
};

export default TeamStroke;
