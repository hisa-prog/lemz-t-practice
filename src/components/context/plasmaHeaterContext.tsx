import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlasmaHeaterDto } from "../interfaces";

interface Props {
  children: any;
}

let temp: PlasmaHeaterDto = {
  name: "",
  is_on: false,
  alarm: false,
  durability: 0,
  temperature: 0,
  output_power_watt: 0,
  input_current: 0,
  input_voltage: 0,
  input_power: 0,
};

const PlasmaHeaterContext = React.createContext({
  plasmaHeater: temp,
  setPlasmaHeater: (arg: PlasmaHeaterDto) => {},
  plasmaHeaterInfoLoaded: false,
  setPlasmaHeaterInfoLoaded: (arg: boolean) => {},
});

const PlasmaHeaterContextProvider = ({ children }: Props) => {
  const [plasmaHeaterInfoLoaded, setPlasmaHeaterInfoLoaded] = useState(false);
  const [plasmaHeater, setPlasmaHeater] = useState<PlasmaHeaterDto>({
    name: "",
    is_on: false,
    alarm: false,
    durability: 0,
    temperature: 0,
    output_power_watt: 0,
    input_current: 0,
    input_voltage: 0,
    input_power: 0,
  });

  async function GetPlasmaHeaterInfo() {
    try {
      await axios.get(
        process.env.REACT_APP_API + "energy/state/alpha_cell/plasma_heater"
      )
      .then((response) => {
        // console.log(response)
        setPlasmaHeater(response.data.alpha_cell.plasma_heater);
        setPlasmaHeaterInfoLoaded(true);
      })
      .catch((response) => {
        console.log(response.detail[0].msg)
      })
    } catch (e: any) {
      console.log(e.message);
    }
  }
  useEffect(() => {
    setInterval(GetPlasmaHeaterInfo, 2000);
  },[])

  return (
    <PlasmaHeaterContext.Provider
      value={{
        plasmaHeater,
        setPlasmaHeater,
        plasmaHeaterInfoLoaded,
        setPlasmaHeaterInfoLoaded,
      }}
    >
      {children}
    </PlasmaHeaterContext.Provider>
  );
};

export default PlasmaHeaterContextProvider;

export { PlasmaHeaterContext };
