import React from 'react';

function SpeedDetector(props) {
    if (props.speed > props.maxSpeed) {
      return <div className="p-m-0" style={{lineHeight: '1.5'}}>Текущая скорость = {props.speed}. Скорость превышена!</div>;
    }
    return <div className="p-m-0" style={{lineHeight: '1.5'}}>Текущая скорость = {props.speed}. Скорость не превышена.</div>;
}

export default SpeedDetector;