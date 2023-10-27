
import './App.css';

import * as React from 'react';
import { useState } from "react";
import PawnButton from './components/PawnButton';



function App() {
  const initDisabled = [false, false, false, false, false, false, false, false, false];
  const initPosition = ['', '', '', '', '', '', '', '', ''];
  const [isDisabled, setIsDisabled] = useState(initDisabled);
  const [position, setPosition] = useState(initPosition);
  const [turn, setTurn] = useState('player');
  const [player, setPlayer] = useState([]);
  const [computer, setComputer] = useState([]);
  const [result, setResult] = useState("");

  return (
    <div className="App-header">
      <h2>TIC TAC TOE</h2>
      <div className='box'>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <PawnButton id={0} isDisabled={isDisabled} setIsDisabled={setIsDisabled} position={position} setPosition={setPosition} turn={turn} setTurn={setTurn} player={player} setPlayer={setPlayer} computer={computer} setComputer={setComputer} setResult={setResult}/>
          <PawnButton id={1} isDisabled={isDisabled} setIsDisabled={setIsDisabled} position={position} setPosition={setPosition} turn={turn} setTurn={setTurn} player={player} setPlayer={setPlayer} computer={computer} setComputer={setComputer} setResult={setResult}/>
          <PawnButton id={2} isDisabled={isDisabled} setIsDisabled={setIsDisabled} position={position} setPosition={setPosition} turn={turn} setTurn={setTurn} player={player} setPlayer={setPlayer} computer={computer} setComputer={setComputer} setResult={setResult}/>

        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <PawnButton id={3} isDisabled={isDisabled} setIsDisabled={setIsDisabled} position={position} setPosition={setPosition} turn={turn} setTurn={setTurn} player={player} setPlayer={setPlayer} computer={computer} setComputer={setComputer} setResult={setResult}/>
          <PawnButton id={4} isDisabled={isDisabled} setIsDisabled={setIsDisabled} position={position} setPosition={setPosition} turn={turn} setTurn={setTurn} player={player} setPlayer={setPlayer} computer={computer} setComputer={setComputer} setResult={setResult}/>
          <PawnButton id={5} isDisabled={isDisabled} setIsDisabled={setIsDisabled} position={position} setPosition={setPosition} turn={turn} setTurn={setTurn} player={player} setPlayer={setPlayer} computer={computer} setComputer={setComputer} setResult={setResult}/>

        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <PawnButton id={6} isDisabled={isDisabled} setIsDisabled={setIsDisabled} position={position} setPosition={setPosition} turn={turn} setTurn={setTurn} player={player} setPlayer={setPlayer} computer={computer} setComputer={setComputer} setResult={setResult}/>
          <PawnButton id={7} isDisabled={isDisabled} setIsDisabled={setIsDisabled} position={position} setPosition={setPosition} turn={turn} setTurn={setTurn} player={player} setPlayer={setPlayer} computer={computer} setComputer={setComputer} setResult={setResult}/>
          <PawnButton id={8} isDisabled={isDisabled} setIsDisabled={setIsDisabled} position={position} setPosition={setPosition} turn={turn} setTurn={setTurn} player={player} setPlayer={setPlayer} computer={computer} setComputer={setComputer} setResult={setResult}/>

        </div>
      </div>
      <h1>{result}</h1>
      <button className='reset' onClick={() => {
        setPosition(initPosition);
        setIsDisabled(initDisabled);
        setPlayer([]);
        setComputer([]);
        setResult('');
      }}><h1 className='resetButton'>RESET</h1></button>

    </div>

  );

}


export default App;
