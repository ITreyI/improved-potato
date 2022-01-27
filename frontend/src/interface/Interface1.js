import './Interface1.css'
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import { useState } from "react"

export default function Homepage(){     
 const [som, setSom] = useState(true)

let player = useRef(null)   
let navigate = useNavigate();
//let icon = useRef(URL="https://img.icons8.com/ios-filled/50/000000/room-sound.png" )

    return( 
    <div>
        <img  onClick= {() => setSom( (s) => !s)} src={som ? "https://img.icons8.com/ios-filled/50/000000/room-sound.png" : "https://img.icons8.com/ios-filled/50/000000/mute--v1.png" }></img>
             
        <audio ref={player} src="/sounds/pacman_beginning.wav"></audio>
    <div>
        <a onClick={() => player.current.play()} >teste</a>
     </div>
    <h1>BYTES4FUN</h1>
    <button class= "button" onClick= {() => navigate(`/interface2`)}>Começar</button>
</div>

)}

