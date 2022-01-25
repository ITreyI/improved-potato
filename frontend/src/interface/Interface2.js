import "./Interface2.css"
import { useNavigate } from "react-router-dom";
export default function Interface2() {
    let navigate = useNavigate();
    return (
    <div>
        <h1 id="main">BYTES4FUN</h1>
        <input placeholder="Insira o seu nome de jogador ..." type="text" id="tag"></input>
        <button  onClick= {() => navigate(`/menu`)}>Entrar</button>
  


    </div>
    )
}