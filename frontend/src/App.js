import logo from './logo.svg';
import './App.css';
import GameRender from './pacman/gamerender';
import { useState, useEffect } from 'react';
//import { Router, Routes } from 'react-router-dom'
import Interface1 from './interface/Interface1';
import Interface2 from './interface/Interface2';
import Menu1 from './interface/Menu1';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './interface/Interface2';
import Contador from './interface/Contador'
import Menu2 from './interface/Menu2Teste';
import Guia from './interface/Guia';



  export default function App() {
  const [user,setUser]= useState("") 
  
 /* user.useEffect(() => {
    const fetchJSON = async () => {
      const response = await fetch("/file.json");
      let json = await response.json();
      setUser(json);
    };

    fetchJSON();
  ; */

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/jogo" element={<GameRender user={user}/>} />
          <Route path="/" element={<Interface1 />} />
          <Route path="/interface2" element={<Interface2  user={user} setUser={setUser}/>} />
          <Route path="/menu" element={<Menu1 />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/menu2" element={<Menu2 />} />
          <Route path="/jogo" element={<Contador/>}/>
          <Route path="/guia" element={<Guia/>}/>
        </Routes>

      </BrowserRouter>

    </div >
  );
 }
