import React, { useEffect, useState } from "react";
import PlasmaStatStroke from "../atoms/plasmaStatStroke";
import { DangerIcon } from "../icons/dangerIcon";

const data = {
  name: "plasma_heater",
  is_on: true,
  alarm: false,
  durability: 100,
  temperature: 10500000.906040701008,
  output_power_watt: 90,
  input_current: 597.1258937983494,
  input_voltage: 313.3251943366527,
  input_power: 701.6146652462869,
};

const Plasma = () => {
  const [criticalState, setCriticalState] = useState(false)

  useEffect(() => {
    if(data.durability <= 35 
      || data.output_power_watt <= 80 
      || (data.temperature >= 12000000 || data.temperature <= 10000000)
      || data.alarm) setCriticalState(true)
    else setCriticalState(false)
  }, [data])
  return (
    <div className="flex flex-col w-full h-fit">
      <p className="text-white text-3xl self-center mb-4">Plasma Heater</p>
      <PlasmaStatStroke 
        name={'power'}
        value={data.output_power_watt}
        color={data.output_power_watt >= 85 ? 'text-green-400' 
        : data.output_power_watt >= 80 ? 'text-yellow-500' 
        : 'text-red-500'}
        procent 
      />
      <PlasmaStatStroke 
        name={'durability'}
        value={data.durability}
        color={data.durability >= 75 ? 'text-green-400' 
          : data.durability >= 35 ? 'text-yellow-500' 
          : 'text-red-500'}
        procent 
      />
      <PlasmaStatStroke 
        name={'temperature'}
        value={+data.temperature.toFixed()}
        color={data.temperature >= 12000000 ? 'text-red-500' 
        : data.temperature > 10000000 ? 'text-green-400' : 'text-red-500'}
      />
      <div className={`
      ${criticalState ? 'blinkAnimation' 
      : 'opacity-40'} 
      text-red-500 w-16 self-center mt-4`}>
        <DangerIcon />
      </div>
    </div>
  );
};

export default Plasma;
