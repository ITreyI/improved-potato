import logo from './logo.svg';
import './App.css';
import GameRender from './pacman/gamerender';
<<<<<<< Updated upstream
import { BrowserRouter, Routes, Route } from 'react-router-dom'
=======
import { Router, Routes } from 'react-router-dom'
import Homepage from './interface/Interface1'
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <BrowserRouter>
        <Routes>
          <Route path="/jogo" element={<GameRender />} />
          <Route path="/interface" element={<Interface1 />} />
          <Route path="/interface" element={<Interface2 />} />
        </Routes>

      </BrowserRouter>
=======
      <Homepage/>
    
>>>>>>> Stashed changes

    </div>
  );
}

export default App;
