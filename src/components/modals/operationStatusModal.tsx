import { OperationStatusModalProps } from "../interfaces";
import ModalLayout from "../layout/modalLayout";

const OperationStatusModal = ({
  operationStatusModal,
  error,
  rootModalClose
}: OperationStatusModalProps) => {
  return (
    <ModalLayout {...operationStatusModal}>
      <div className="panel-border bg-panel bg-opacity-30 md:w-[488px] w-[343px] rounded-2xl p-8 font-roboto z-50">
        <div className="flex justify-between items-center w-full">
          {error ? (
            <p className="text-white text-3xl w-full text-center">Error!</p>
          ) : (
            <p className="text-white text-3xl w-full text-center">
              Operation success!
            </p>
          )}
          <img
            src="/images/CloseIcon.svg"
            alt={"close"}
            className="cursor-pointer hover:opacity-50 w-5"
            onClick={(e) => {
              operationStatusModal.close();
              rootModalClose(e)
            }}
          />
        </div>
      </div>
    </ModalLayout>
  );
};
export default OperationStatusModal;
