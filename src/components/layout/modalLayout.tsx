import { useState } from "react";
import { ModalLayoutProps } from "../interfaces";

const ModalLayout = ({
    className,
    isOpen,
    close,
    children,
    customClasses = false,
    onSideClick,
}: ModalLayoutProps) => {
    return (
        <div className={`w-screen h-screen z-10 fixed top-0 left-0 flex items-center justify-center  
        ${isOpen ? "bg-overlay-gray " : "hidden"} ${className}`} 
        onClick={onSideClick ? onSideClick : close}>
            <div className="lg:h-max w-max" onClick={(e)=>{e.stopPropagation();}}>
                {children}
            </div>
        </div>
    )
}
export default ModalLayout;

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    return { isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }
}