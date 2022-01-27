import "./Interface2.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { useRef } from 'react';

export default function Interface2() {
    const [som, setSom] = useState(false)
    const [audio, setAudio] = useState(new Audio("/sounds/pacman_beginning.wav"))
    const [id,setId] = useState("")
    let player = useRef(null)  
    let navigate = useNavigate();

    const handleClick= ()=> {
        fetch()
        const url = 'https://jsonplaceholder.typicode.com/todos/1'
        const response = fetch(url)
       const json = response.json()
    }
    return (
    <div>
         <div className="tudo">
        
        
                <a onClick={() => !som ? audio.play() : audio.pause()} >{<img onClick={() => setSom((s) => !s)} src={som ? "https://img.icons8.com/ios-filled/50/000000/room-sound.png" : "https://img.icons8.com/ios-filled/50/000000/mute--v1.png"}></img>}</a>
               <audio ref={player} src="/sounds/pacman_beginning.wav"></audio>
    
        <h1 class= "main">BYTES4FUN</h1>
        <input      placeholder="Insira o seu nome de jogador ..." type="text" id="tag" class="caixa"></input>
        
        <button className="entrar-pushable" role="button" onClick={() => handleClick(navigate(`/contador`))}>
                <span className="entrar-shadow"></span>
                <span className="entrar-edge"></span>
                <span className="entrar-front text">
                    Entrar
                </span>
            </button>
  </div>
   

          </div>
    )
}

