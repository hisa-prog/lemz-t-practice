import axios from "axios";
import { useContext, useState } from "react";
import { BatteryPackContext } from "../context/batteryPackContext";
import { PlasmaHeaterContext } from "../context/plasmaHeaterContext";
import { SendTeamModalProps } from "../interfaces";
import ModalLayout, { useModal } from "../layout/modalLayout";
import OperationStatusModal from "./operationStatusModal";

const SendTeamModal = ({ sendTeamModal, nameTeam }: SendTeamModalProps) => {
  const [selectedLocation, setSelectedLocation] = useState(-1);
  const [operationStatus, setOperationStatus] = useState(false);
  const operationStatusModal = useModal();
  const { batteryPack } = useContext(BatteryPackContext);
  const { plasmaHeater } = useContext(PlasmaHeaterContext);

  const [capasitorNumber, setCapasitorNumber] = useState(1);
  const handleInputCapasitorNumber = (e: any) => {
    setCapasitorNumber(e.target.value);
  };

  const sendTeamOnLocation = async (team_name: string, location: string) => {
    try {
      await axios
        .post(process.env.REACT_APP_API + "repair/start", {
          team_name: team_name,
          cell_name: 'alpha_cell',
          location: location,
        })
        .then(() => {
          setOperationStatus(false);
          operationStatusModal.open();
        })
        .catch(() => {
          setOperationStatus(true);
          operationStatusModal.open();
        });
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const locationsRepair: Array<{ name: string; link: string; img: string }> = [
    {
      name: "Battery Pack Capasitor",
      link: batteryPack?.name,
      img: "/images/locations/capasitor.jpg",
    },
    {
      name: "Plasma Heater",
      link: plasmaHeater?.name,
      img: "/images/locations/plasmaHeater.jpg",
    },
  ];

  return (
    <ModalLayout {...sendTeamModal}>
      <OperationStatusModal
        operationStatusModal={operationStatusModal}
        error={operationStatus}
        rootModalClose={() => sendTeamModal.close()}
      />
      <div className="panel-border bg-panel bg-opacity-30 md:w-max w-[343px] rounded-2xl p-8 font-roboto z-50">
        <div className="flex justify-between items-center mb-8 w-full">
          <p className="text-white text-3xl w-full text-center">
            Choose a location
          </p>
          <img
            src="/images/CloseIcon.svg"
            alt={"close"}
            className="cursor-pointer hover:opacity-50 w-5"
            onClick={(e) => {
              sendTeamModal.close();
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-6">
          {locationsRepair.map((item, index) => (
            <div
              key={index}
              className={`${
                index === selectedLocation ? "border-white" : "border-panel"
              }
                        relative w-96 overflow-hidden border-2 rounded-lg
                        hover:border-white active:border-white cursor-pointer`}
              onClick={() => setSelectedLocation(index)}
            >
              <img alt={item.name} src={item.img} className="h-full w-full" />
              <p className="absolute text-white z-10 bottom-0 left-1.5">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        {selectedLocation === 0 && (
          <div className="flex items-center justify-center my-4">
            <p className="text-white text-3xl mr-4">Enter capacitor number:</p>
            <input
              value={capasitorNumber}
              onChange={handleInputCapasitorNumber}
              type="number"
              placeholder={"1"}
              min="1"
              max="65"
              className="rounded-lg bg-transparent outline-none ml-2 text-3xl text-white font-normal w-16"
            />
          </div>
        )}
        <div className="flex justify-center w-full">
          <button
            className={`${
              selectedLocation === -1 ||
              capasitorNumber < 1 ||
              capasitorNumber > 65
                ? "opacity-20"
                : "cursor-pointer hover:opacity-50 active:opacity-50"
            }
                    w-max py-2 px-6 rounded-xl text-xl text-white border-2 border-white`}
            disabled={
              selectedLocation === -1 ||
              capasitorNumber < 1 ||
              capasitorNumber > 65
            }
            onClick={() =>
              selectedLocation === 0
                ? sendTeamOnLocation(
                    nameTeam,
                    batteryPack.capacitors[capasitorNumber - 1].name
                  )
                : sendTeamOnLocation(
                    nameTeam,
                    locationsRepair[selectedLocation].link
                  )
            }
          >
            Send {nameTeam}
          </button>
        </div>
      </div>
    </ModalLayout>
  );
};
export default SendTeamModal;
