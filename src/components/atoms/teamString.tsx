import { ITeamString } from "../interfaces";

const TeamString = ({index, name, location, busy, className, openModal, setSelectedTeam}: ITeamString) => {

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
        onClick={(e) => {
          setSelectedTeam(name)
          openModal(e)
        }}
      >
        {busy ? "Revoke" : "Repair"}
      </button>
    </div>
  );
};

export default TeamString;
