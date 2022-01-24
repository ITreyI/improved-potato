import logo from './logo.svg';
import './App.css';
import GameRender from './pacman/gamerender';
import { Router, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GameRender />

    </div>
  );
}

export default App;
