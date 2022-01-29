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
            <video top="500" height="200" width="500" className="divVideo" loop autoPlay="autoplay" muted src="video.mp4" type="video/mp4">
           
            </video> 
          
            <button className="entrar-pushable" role="button" onClick={() => navigate(`/Interface2`)}>
                    <span className="entrar-shadow"></span>
                    <span className="entrar-edge"></span>
                    <span className="entrar-front text">
                        Começar
                    </span>
                </button>
    
        <div >
       
        </div>
        </div>

    )
}

