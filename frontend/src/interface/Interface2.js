import "./Interface2.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react"

export default function Interface2() {
 const [som, setSom] = useState(true)
    let navigate = useNavigate();
    return (
    <div>
        <img  onClick= {() => setSom( (s) => !s)} src={som ? "https://img.icons8.com/ios-filled/50/000000/room-sound.png" : "https://img.icons8.com/ios-filled/50/000000/mute--v1.png" }></img>

        <h1 class= "main">BYTES4FUN</h1>
        <input  placeholder="Insira o seu nome de jogador ..." type="text" id="tag" class="caixa"></input>
        <button class="entrar" onClick= {() => navigate(`/menu`)}>Entrar</button>
  


    </div>
    )
}