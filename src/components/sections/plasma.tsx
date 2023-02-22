import React, { useContext, useEffect, useState } from "react";
import PlasmaStatStroke from "../atoms/plasmaStatString";
import { PlasmaHeaterContext } from "../context/plasmaHeaterContext";
import { DangerIcon } from "../icons/dangerIcon";

const Plasma = () => {
  const [criticalState, setCriticalState] = useState(false);
  const { plasmaHeater, plasmaHeaterInfoLoaded } =
    useContext(PlasmaHeaterContext);

  useEffect(() => {
    if (plasmaHeaterInfoLoaded) {
      if (
        plasmaHeater.durability <= 35 ||
        // data.output_power_watt <= 80 ||
        plasmaHeater.temperature >= 12000000 ||
        plasmaHeater.temperature <= 10000000 ||
        plasmaHeater.alarm
      )
        setCriticalState(true);
      else setCriticalState(false);
    }
  }, [plasmaHeater]);
  return (
    <div className="flex flex-col w-full h-fit">
      <div className="flex self-center items-center mb-4">
        <p className="text-white text-3xl">Plasma Heater</p>
        <div
          className={`
        ${criticalState ? "blinkAnimation" : "opacity-40"} 
        text-red-500 w-12 self-center pl-4`}
        >
          <DangerIcon />
        </div>
      </div>

      {plasmaHeaterInfoLoaded ? (
        <>
          {/* <PlasmaStatStroke
            name={"power"}
            value={data.output_power_watt}
            color={
              data.output_power_watt >= 85
                ? "text-green-400"
                : data.output_power_watt >= 80
                ? "text-yellow-500"
                : "text-red-500"
            }
            procent
          /> */}
          <PlasmaStatStroke
            name={"durability"}
            value={plasmaHeater.durability}
            color={
              plasmaHeater.durability >= 75
                ? "text-green-400"
                : plasmaHeater.durability >= 35
                ? "text-yellow-500"
                : "text-red-500"
            }
            procent
          />
          <PlasmaStatStroke
            name={"temperature"}
            value={+plasmaHeater.temperature.toFixed()}
            color={
              plasmaHeater.temperature >= 12000000
                ? "text-red-500"
                : plasmaHeater.temperature > 10000000
                ? "text-green-400"
                : "text-red-500"
            }
          />
        </>
      ) : (
        <img
          src="/images/loader.png"
          alt="loader"
          className="animate-spin w-16 my-4 self-center"
        />
      )}
    </div>
  );
};

export default Plasma;
