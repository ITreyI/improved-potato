import logo from './logo.svg';
import './App.css';
import GameRender from './pacman/gamerender';

//import { Router, Routes } from 'react-router-dom'
import Interface1 from './interface/Interface1';
import Interface2 from './interface/Interface2';
import Menu1 from './interface/Menu1';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './interface/Interface2';
import Menu2 from './interface/Menu2Teste';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/jogo" element={<GameRender />} />
          <Route path="/" element={<Interface1 />} />
          <Route path="/interface2" element={<Interface2 />} />
          <Route path="/menu" element={<Menu2 />} />

        </Routes>

      </BrowserRouter>

    </div >
  );
}

export default App;
//<Route path="/interface" element={<Interface1 />} />
//          <Route path="/interface" element=//{<Interface2 />} />