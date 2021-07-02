import React, { useState } from 'react';
import Hero from './Hero';
import './App.css';
import {Modal, RandomUser} from './8-5/Modal';
import {Main} from './8-6/Main';
import {Radar} from './8-7/Radar';

function App(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="App">
      {props.heroes.map((hero)=>(
        <Hero key={hero.title} title={hero.title} subtitle={hero.subtitle} imageURL={hero.imageURL} />
      ))}
      <p>*****************************************</p>
      <div>
        <h1>Задание 8-5</h1>
        <button onClick={() => setModalVisible(true)}>Show modal</button>
        {modalVisible && (
          <Modal closeHandler={() => setModalVisible(false)}>
            <RandomUser />
          </Modal>
        )}      
      </div>
      <p>*****************************************</p>
      <div>
        <h1>Задание 8-6</h1>
        <Main />
      </div>
      <div>
        <h1>Задание 8-7</h1>
        <Radar />
      </div>
    </div>
  );
}

export default App;
