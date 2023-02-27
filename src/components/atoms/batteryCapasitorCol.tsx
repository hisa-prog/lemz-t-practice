import { BatteryCapasitorColProps } from "../interfaces";

const BatteryCapasitorCol = ({
  index,
  firstVal,
  firstColor,
  secondVal,
  secondColor,
  className,
}: BatteryCapasitorColProps) => {
  return (
    <div key={index} className={`${firstVal !== 100 ? 'blinkAnimationBorder' : ''} 
    relative flex flex-col items-center col-span-1 border border-panel rounded-lg p-1 ${className}`}>
        <p className="absolute bottom-0 right-0 text-white text-xs">{index + 1}</p>
        <p className={`text-sm ${firstColor}`}>{firstVal.toFixed()}%</p>
        <p className={`text-sm ${secondColor}`}>{secondVal.toFixed()}⚡</p>
    </div>
  );
};

export default BatteryCapasitorCol;