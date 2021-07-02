import React from 'react';
import { InputText } from 'primereact/inputtext';

export class SpeedSetter extends React.Component {
    constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
      this.props.onChangeSpeed(e.target.value);
    }

    render() {
      const speed = this.props.speed;
      return (
        <p>
          <span>Введите скорость в км/ч: </span>
          <InputText type="number" value={speed} onChange={this.onChange} className="p-d-block p-mb-2" style={{lineHeight: '1.5'}}/>
        </p>
      );
    }
  }