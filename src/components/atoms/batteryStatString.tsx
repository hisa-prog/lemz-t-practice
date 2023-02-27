import { BatteryStatStringProps } from "../interfaces";

const BatteryStatString = ({
  name,
  value,
  color,
  procent = false,
  minuts = false,
  className,
}: BatteryStatStringProps) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <p className="text-white text-2xl">{name}</p>
      <p className={`${color}`}
      >
        {value}{procent ? '%' : minuts ? 'm' : '°C'}
      </p>
    </div>
  );
};

export default BatteryStatString;