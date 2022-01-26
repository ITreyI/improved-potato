import "./Interface2.css"
import { useNavigate } from "react-router-dom";
export default function Interface2() {
    let navigate = useNavigate();
    return (
    <div>
        
        <img src="https://img.icons8.com/ios-filled/50/000000/room-sound.png"></img>
        <img src="https://img.icons8.com/ios-filled/50/000000/mute--v1.png"/>
        <h1 id="main">BYTES4FUN</h1>
        <input placeholder="Insira o seu nome de jogador ..." type="text" id="tag" class="caixa"></input>
        <button  onClick= {() => navigate(`/menu`)}>Entrar</button>
  


    </div>
    )
}