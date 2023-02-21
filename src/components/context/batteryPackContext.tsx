import React, { useState, useEffect } from "react";
import axios from "axios";
import { BatteryPackDto } from "../interfaces";

interface Props {
  children: any;
}

let temp: BatteryPackDto = {
  name: "",
  is_on: false,
  alarm: false,
  durability: 0,
  charge_level: 0,
  capacitors: [],
};

const BatteryPackContext = React.createContext({
  batteryPack: temp,
  setBatteryPack: (arg: BatteryPackDto) => {},
  batteryInfoLoaded: false,
  setBatteryInfoLoaded: (arg: boolean) => {}
});

const BatteryPackContextProvider = ({ children }: Props) => {
  const [batteryInfoLoaded, setBatteryInfoLoaded] = useState(false)
  const [batteryPack, setBatteryPack] = useState<BatteryPackDto>({
    name: "",
    is_on: false,
    alarm: false,
    durability: 0,
    charge_level: 0,
    capacitors: [],
  });

  useEffect(() => {
    async function GetBatteryPackInfo() {
      try {
        let response = await axios.get(process.env.REACT_APP_API + 'energy/state/alpha_cell/battery')
        if (response.status === 200) {
            setBatteryPack(response.data.alpha_cell.battery)
            setBatteryInfoLoaded(true)
        } else console.log("error")
      } catch (e: any) {
        console.log(e.message);
      }
    }
    setInterval(GetBatteryPackInfo, 1500)
  }, []);

  return (
    <BatteryPackContext.Provider
      value={{
        batteryPack,
        setBatteryPack,
        batteryInfoLoaded,
        setBatteryInfoLoaded
      }}
    >
      {children}
    </BatteryPackContext.Provider>
  );
};

export default BatteryPackContextProvider;

export { BatteryPackContext };
