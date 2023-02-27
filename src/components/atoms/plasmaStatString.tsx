import { PlasmaStatStringProps } from "../interfaces";

const PlasmaStatString = ({
  name,
  value,
  color,
  procent = false,
  className,
}: PlasmaStatStringProps) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <p className="text-white text-2xl">{name}</p>
      <p className={`${color}`}
      >
        {value}{procent ? '%' : '°C'}
      </p>
    </div>
  );
};

export default PlasmaStatString;
