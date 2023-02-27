import axios from "axios";
import { useState } from "react";
import { locationsRepair } from "../../data/locations";
import { ISendTeamModal } from "../interfaces";
import ModalLayout, { useModal } from "../layout/modalLayout";
import OperationStatusModal from "./operationStatusModal";

const SendTeamModal = ({ sendTeamModal, nameTeam }: ISendTeamModal) => {
  const [selectedLocation, setSelectedLocation] = useState(-1);
  const [operationStatus, setOperationStatus] = useState(false)
  const operationStatusModal = useModal();

  const sendTeamOnLocation = async (team_name: string, location: string) => {
    try {
      let response = await axios.post(process.env.REACT_APP_API + "repair/start", {
        team_name: team_name,
        location: location,
      });
      if(response.status === 200) {
        console.log(response)
        setOperationStatus(false)
        operationStatusModal.open()
      }
      else {
        setOperationStatus(true)
        operationStatusModal.open()
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <ModalLayout {...sendTeamModal}>
      <OperationStatusModal operationStatusModal={operationStatusModal} error={operationStatus} rootModalClose={() => sendTeamModal.close()}/>
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
        <div className="flex justify-center w-full">
          <button
            className={`${
              selectedLocation === -1
                ? "opacity-20"
                : "cursor-pointer hover:opacity-50 active:opacity-50"
            }
                    w-max py-2 px-6 rounded-xl text-xl text-white border-2 border-white`}
            disabled={selectedLocation === -1}
            onClick={() => sendTeamOnLocation(nameTeam, locationsRepair[selectedLocation].link)}
          >
            Send {nameTeam}
          </button>
        </div>
      </div>
    </ModalLayout>
  );
};
export default SendTeamModal;
