import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    async function GetPlasmaHeaterInfo() {
      try {
        let response = await axios.get(
          process.env.REACT_APP_API + "energy/state/alpha_cell/plasma_heater"
        );
        if (response.status === 200) {
          setPlasmaHeater(response.data.alpha_cell.plasma_heater)
          setPlasmaHeaterInfoLoaded(true)
        } else console.log("error");
      } catch (e: any) {
        console.log(e.message);
      }
    }
    setInterval(GetPlasmaHeaterInfo, 1500);
  }, []);

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
