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

            <audio ref={player} className="soundicon" src="/sounds/mixkit-arcade-retro-background-219.wav"></audio>
            <div id='soundicon'>
                <a   onClick={() => !som ? audio.play() : audio.pause()} >{<img onClick={() => setSom((s) => !s)} src={som ? "https://img.icons8.com/ios-filled/50/000000/room-sound.png" : "https://img.icons8.com/ios-filled/50/000000/mute--v1.png"}></img>}</a>

            </div>
            <h1>BYTES4FUN</h1>
            <video  className="video"  loop autoPlay="autoplay" muted src="video1.mp4" type="video/mp4">
           
            </video> 
          
            <button className="entrar-pushable" role="button" onClick={() => navigate(`/Interface2`)}>
                    <span className="entrar-shadow"></span>
                    <span className="entrar-edge"></span>
                    <span className="entrar-front text">
                        Começar
                    </span>
                </button>
    
        <div >
       <div   className="creditos">Desenvolvido por Ana Rita Dias, Luis Iala e Tiago Monteiro.</div> 
        </div>
        </div>

    )
}

