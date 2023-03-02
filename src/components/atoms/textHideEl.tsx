import { useEffect, useState } from "react";
import { TextHideElProps } from "../interfaces";

const TextHideEl = ({ text, duration, timeStart, index }: TextHideElProps) => {
  const [isOpenText, setIsOpenText] = useState(false);
  let abbreviatedText = text.slice(0, 128)

  useEffect(() => {
    if(text.length <= 128) setIsOpenText(true)
  },[])
  
  return (
    <div className="flex flex-col my-1">
      <div className="text-white text-sm">
        {index + 1 + '. '}{isOpenText ? text : abbreviatedText}
        <button onClick={() => setIsOpenText(true)} className={`${isOpenText ? 'hidden' : 'hover:opacity-50'}`}>...</button>
      </div>
      <span className="text-yellow-500 text-xs">
        {`duration: `}
        {duration}
      </span>
      <span className="text-yellow-500 text-xs">
        {`start time:  `}
        {timeStart.slice(0, 19)}
      </span>
    </div>
  );
};

export default TextHideEl;
