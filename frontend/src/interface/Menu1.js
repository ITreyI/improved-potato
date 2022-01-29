import "./Menu1.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import { useRef } from 'react';
export default function Menu() {
      const [som, setSom] = useState(true)
      let player = useRef(null)   
      let navigate = useNavigate();
     
    return (
   
        <div>
            <img  onClick= {() => setSom( (s) => !s)} src={som ? "https://img.icons8.com/ios-filled/50/000000/room-sound.png" : "https://img.icons8.com/ios-filled/50/000000/mute--v1.png" }></img>
             
             <audio ref={player} src="/sounds/pacman_beginning.wav"></audio>
         <div>
             <a onClick={() => player.current.play()} >teste</a>

            </div>
        <img class="soundicon" onClick= {() => setSom( (s) => !s)} src = {som ? "https://img.icons8.com/ios-filled/50/000000/room-sound.png" : "https://img.icons8.com/ios-filled/50/000000/mute--v1.png" }></img>
        <button class="container1" >Convidar</button>
        <button class="container3" >Modo</button>
        <button class="container4" >Guia</button>
        <button class="soundicon">Modo Infinito</button>
        <button class="entrar" onClick= {() => navigate(`/contador`)}>Jogar</button>
    </div>
    )
}