import React, { useContext, useEffect, useState } from "react";
import BatteryCapasitorCol from "../atoms/batteryCapasitorCol";
import BatteryStatString from "../atoms/batteryStatString";
import { BatteryPackContext } from "../context/batteryPackContext";
import { DangerIcon } from "../icons/dangerIcon";

const Battery = () => {
  const [criticalState, setCriticalState] = useState(false);
  const [timeRunning, setTimeRunning] = useState(0);
  const { batteryPack, batteryInfoLoaded } = useContext(BatteryPackContext);

  useEffect(() => {
    if (batteryInfoLoaded) {
      if (
        batteryPack.alarm ||
        batteryPack.durability <= 35 ||
        batteryPack.charge_level <= 50
      )
        setCriticalState(true);
      else setCriticalState(false);

      let tempTimeRunning = 0;
      batteryPack.capacitors.map((item) => {
        let secForOne = 300 / batteryPack.capacitors.length;
        if (item.charge_level === 100) tempTimeRunning += secForOne;
        else tempTimeRunning += (secForOne * item.charge_level) / 100;
      });
      setTimeRunning(tempTimeRunning);
    }
  }, [batteryPack]);

  return (
    <div className="flex flex-col w-full h-fit">
      <div className="flex self-center items-center mb-4">
        <p className="text-white text-3xl">Battery Pack</p>
        <div
          className={`
        ${criticalState ? "blinkAnimation" : "opacity-40"} 
        text-red-500 w-12 self-center pl-4`}
        >
          <DangerIcon />
        </div>
      </div>

      {batteryInfoLoaded ? (
        <>
          <BatteryStatString
            name={"durability"}
            value={batteryPack.durability}
            color={
              batteryPack.durability >= 75
                ? "text-green-400"
                : batteryPack.durability >= 35
                ? "text-yellow-500"
                : "text-red-500"
            }
            procent
          />
          <BatteryStatString
            name={"charge"}
            value={+batteryPack.charge_level.toFixed()}
            color={
              batteryPack.charge_level >= 75
                ? "text-green-400"
                : batteryPack.charge_level >= 35
                ? "text-yellow-500"
                : "text-red-500"
            }
            procent
          />
          <BatteryStatString
            name={"Approximate running time"}
            value={+(timeRunning / 60).toFixed(1)}
            color={"text-white"}
            minuts
          />
          <div className="grid grid-cols-8 gap-1.5 mt-4">
            {batteryPack.capacitors.map((item, index) => (
              <BatteryCapasitorCol
                index={index}
                firstVal={item.durability}
                firstColor={
                  item.durability === 100 ? "text-green-400" : "text-red-500"
                }
                secondVal={item.charge_level}
                secondColor={
                  item.charge_level >= 99.5
                    ? "text-green-400"
                    : item.charge_level >= 35
                    ? "text-yellow-500"
                    : "text-red-500"
                }
              />
            ))}
          </div>
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

export default Battery;