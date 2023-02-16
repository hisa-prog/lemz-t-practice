import { useState } from "react";
import { locationsRepair } from "../../data/locations";
import { ISendTeamModal } from "../interfaces";
import ModalLayout from "../layout/modalLayout";


const SendTeamModal = ({
    sendTeamModal,
    nameTeam
}: ISendTeamModal) => {
    const [selectedLocation, setSelectedLocation] = useState(-1)

    return (
        <ModalLayout {...sendTeamModal}>
            <div className="panel-border bg-panel bg-opacity-30 md:w-max w-[343px] rounded-2xl p-8 font-roboto z-50">
                <div className="flex justify-between items-center mb-8 w-full">
                    <p className="text-white text-3xl w-full text-center">Choose a location</p>
                    <img src='/images/CloseIcon.svg' alt={"close"} className="cursor-pointer hover:opacity-50 w-5" onClick={(e) => { sendTeamModal.close() }} />
                </div>
                <div className="grid grid-cols-3 gap-2 mb-6">
                    {locationsRepair.map((item, index) => (
                        <div 
                        key={index} 
                        className={`${index === selectedLocation ? 'border-white' : 'border-panel'}
                        relative w-60 overflow-hidden border-2 rounded-lg
                        hover:border-white active:border-white cursor-pointer`}
                        onClick={() => setSelectedLocation(index)}>
                            <img alt={item.name} src={item.img} className='h-full w-full'/>
                            <p className="absolute text-white z-10 bottom-0 left-1.5">{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center w-full">
                    <button 
                    className={`${selectedLocation === -1 ? 'opacity-20' : 'cursor-pointer hover:opacity-50 active:opacity-50'}
                    w-max py-2 px-6 rounded-xl text-xl text-white border-2 border-white`}
                    disabled={selectedLocation === -1}
                    onClick={() => {}}>
                        Send
                    </button>
                </div>
            </div>
        </ModalLayout>
    )
}
export default SendTeamModal;