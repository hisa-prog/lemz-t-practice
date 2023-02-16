import { IPlasmaStatStroke } from "../interfaces";

const PlasmaStatStroke = ({
  name,
  value,
  color,
  procent = false,
  className,
}: IPlasmaStatStroke) => {
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

export default PlasmaStatStroke;
