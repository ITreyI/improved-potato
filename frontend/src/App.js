import logo from './logo.svg';
import './App.css';
import GameRender from './pacman/gamerender';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/jogo" element={<GameRender />} />
          <Route path="/interface" element={<Interface1 />} />
          <Route path="/interface" element={<Interface2 />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
