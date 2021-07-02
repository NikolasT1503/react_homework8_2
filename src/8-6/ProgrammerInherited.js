import React from "react";

export class Programmer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }

  code = () => {
    console.log(this.state.name + " is coding...");
    return <p> {this.state.name} is coding... </p>;
  };

  render() {
    return (
      <div>
        <h1>Создан программист {this.state.name}</h1>
        {this.code()}
      </div>
    );
  }
}

export class Frontend extends Programmer {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }

  angular = () => {
    console.log(this.state.name + " is creating Angular App...");
    return <p>{this.state.name} is creating Angular App...</p>;
  };
  render(){
    return (
      <div>
        <h1>Создан фронтент-программист {this.state.name}</h1>
        {this.code()}
        {this.angular()}
      </div>
    );
  }
}

export class Backend extends Programmer {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }

  nodejs = () => {
    console.log(this.state.name + " is creating NodeJS App...");
    return <p>{this.state.name} is creating Node JS App...</p>;
  };
  render(){
    return (
      <div>
        <h1>Создан бэкенд-программист {this.state.name}</h1>
        {this.code()}
        {this.nodejs()}
      </div>
    );
  }
}

export class Fullstack extends Backend {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }

  angular = () => {
    console.log(this.state.name + " is creating Angular App...");
    return <p>{this.state.name} is creating Angular App...</p>;
  };
  render(){
    return (
      <div>
        <h1>Создан фулстек-программист {this.state.name}</h1>
        {this.code()}
        {this.angular()}
        {this.nodejs()}
      </div>
    );
  }

}
