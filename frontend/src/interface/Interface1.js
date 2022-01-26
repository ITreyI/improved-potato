import './Interface1.css'
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import { useState } from "react"

export default function Homepage(){     
 const [som, setSom] = useState(true)

let player = useRef(null)   
let navigate = useNavigate();

    return( 
    <div>
        <img onClick= {() => setSom( (s) => !s)} src={som ? "https://img.icons8.com/ios-filled/50/000000/room-sound.png" : "https://img.icons8.com/ios-filled/50/000000/mute--v1.png" }></img>
        
        
        <audio ref={player} src="/sounds/pacman_beginning.wav"></audio>
    <div>
         <a onClick={() => player.current.play()}>som</a>
     </div>
    <h1>BYTES4FUN</h1>
    <button onClick= {() => navigate(`/interface2`)}>Começar</button>
</div>

)}