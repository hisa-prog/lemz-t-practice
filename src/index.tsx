import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BatteryPackContextProvider from "./components/context/batteryPackContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BatteryPackContextProvider>
        <App />
    </BatteryPackContextProvider>
  </React.StrictMode>
);

reportWebVitals();