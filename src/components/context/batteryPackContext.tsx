import React, { useEffect, useState } from "react";
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
  setBatteryInfoLoaded: (arg: boolean) => {},
});

const BatteryPackContextProvider = ({ children }: Props) => {
  const [batteryInfoLoaded, setBatteryInfoLoaded] = useState(false);
  const [batteryPack, setBatteryPack] = useState<BatteryPackDto>({
    name: "",
    is_on: false,
    alarm: false,
    durability: 0,
    charge_level: 0,
    capacitors: [],
  });

  async function GetBatteryPackInfo() {
    try {
      await axios
        .get(process.env.REACT_APP_API + "energy/state/alpha_cell/battery")
        .then((response) => {
          // console.log(response);
          setBatteryPack(response.data.alpha_cell.battery);
          setBatteryInfoLoaded(true);
        })
        .catch((response) => {
          console.log(response.detail[0].msg);
        });
    } catch (e: any) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    setInterval(GetBatteryPackInfo, 2000);
  },[])

  return (
    <BatteryPackContext.Provider
      value={{
        batteryPack,
        setBatteryPack,
        batteryInfoLoaded,
        setBatteryInfoLoaded,
      }}
    >
      {children}
    </BatteryPackContext.Provider>
  );
};

export default BatteryPackContextProvider;

export { BatteryPackContext };
