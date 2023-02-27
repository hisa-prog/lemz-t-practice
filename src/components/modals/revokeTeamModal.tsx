import axios from "axios";
import { useState } from "react";
import { RevokeTeamModalProps } from "../interfaces";
import ModalLayout, { useModal } from "../layout/modalLayout";
import OperationStatusModal from "./operationStatusModal";

const RevokeTeamModal = ({
  revokeTeamModal,
  nameTeam,
}: RevokeTeamModalProps) => {
  const [operationStatus, setOperationStatus] = useState(false);
  const operationStatusModal = useModal();

  const revokeTeam = async (team_name: string) => {
    try {
      let response = await axios.post(
        process.env.REACT_APP_API + "repair/stop",
        {
          team_name: team_name,
          location: "HOME",
        }
      );
      if (response.status === 200) {
        // console.log(response)
        setOperationStatus(false);
        operationStatusModal.open();
      } else {
        setOperationStatus(true);
        operationStatusModal.open();
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <ModalLayout {...revokeTeamModal}>
      <OperationStatusModal
        operationStatusModal={operationStatusModal}
        error={operationStatus}
        rootModalClose={() => revokeTeamModal.close()}
      />
      <div className="panel-border bg-panel bg-opacity-30 md:w-[488px] rounded-2xl p-8 font-roboto z-50">
        <div className="flex justify-between items-center mb-8 w-full">
          <p className="text-white text-3xl w-full text-center">
            Call the team home?
          </p>
          <img
            src="/images/CloseIcon.svg"
            alt={"close"}
            className="cursor-pointer hover:opacity-50 w-5"
            onClick={(e) => {
              revokeTeamModal.close();
            }}
          />
        </div>
        <div className="flex justify-center w-full">
          <button
            className={`cursor-pointer hover:opacity-50 active:opacity-50
                    w-max py-2 px-6 rounded-xl text-xl text-white border-2 border-white`}
            onClick={() => revokeTeam(nameTeam)}
          >
            Revoke {nameTeam}
          </button>
        </div>
      </div>
    </ModalLayout>
  );
};
export default RevokeTeamModal;
