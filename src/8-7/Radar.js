import React, { useState } from "react";
import SpeedDetector from "./SpeedDetector";
import { SpeedSetter } from "./SpeedSetter";
import { Card } from "primereact/card";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const MAX_SPEED_IN_CITY = 60;

export function Radar(props) {
  const [speed, setSpeed] = useState(0);
  return (
    <Card title="Полицейский радар" style={{ width: "25em" }}>
      <SpeedSetter speed={speed} onChangeSpeed={(e) => setSpeed(e)} />
      <SpeedDetector speed={parseFloat(speed)} maxSpeed={MAX_SPEED_IN_CITY} />
    </Card>
  );
}
