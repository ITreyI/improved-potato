import './Interface1.css'
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import { useState } from "react"

export default function Homepage() {
    const [som, setSom] = useState(false)
    const [audio, setAudio] = useState(new Audio("/sounds/mixkit-arcade-retro-background-219.wav"))
    let player = useRef(null)
    let navigate = useNavigate();
    //let icon = useRef(URL="https://img.icons8.com/ios-filled/50/000000/room-sound.png" )

    return (
        <div>

            <audio ref={player} src="/sounds/mixkit-arcade-retro-background-219.wav"></audio>
            <div>
                <a onClick={() => !som ? audio.play() : audio.pause()} >{<img onClick={() => setSom((s) => !s)} src={som ? "https://img.icons8.com/ios-filled/50/000000/room-sound.png" : "https://img.icons8.com/ios-filled/50/000000/mute--v1.png"}></img>}</a>

            </div>
            <h1>BYTES4FUN</h1>
            <button className="button" onClick={() => navigate(`/interface2`)}>Começar</button>
        </div>

    )
}

