import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BatteryPackContextProvider from "./components/context/batteryPackContext";
import PlasmaHeaterContextProvider from "./components/context/plasmaHeaterContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BatteryPackContextProvider>
      <PlasmaHeaterContextProvider>
        <App />
      </PlasmaHeaterContextProvider>
    </BatteryPackContextProvider>
  </React.StrictMode>
);

reportWebVitals();
