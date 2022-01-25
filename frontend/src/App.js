import logo from './logo.svg';
import './App.css';
import GameRender from './pacman/gamerender';
import Menu from './interface2/interface2';
//import { Router, Routes } from 'react-router-dom'
import Interface1 from './interface/Interface1';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/jogo" element={<GameRender />} />
          <Route path="/interface1" element={<Interface1 />} />
          <Route path="/interface2" element={<Menu />} />
        </Routes>

      </BrowserRouter>

    </div >
  );
}

export default App;
//<Route path="/interface" element={<Interface1 />} />
//          <Route path="/interface" element=//{<Interface2 />} />