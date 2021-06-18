import React from 'react';
import Hero from './Hero';
import './App.css';

function App(props) {
  return (
    <div className="App">
      {props.heroes.map((hero)=>(
        <Hero key={hero.title} title={hero.title} subtitle={hero.subtitle} imageURL={hero.imageURL} />
      ))}
    </div>
  );
}

export default App;
