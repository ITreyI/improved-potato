import './Interface1.css'
import { useNavigate } from "react-router-dom";
export default function Homepage(){
   
    let navigate = useNavigate();
    return(
        <div>
        <audio id="player" src="Kalimba.mp3"></audio>
    <div>
         <a onclick="document.getElementById('player').play()"><i ></i></a>
     </div>
    <h1>BYTES4FUN</h1>
    <button onClick= {() => navigate(`/interface2`)}>Começar</button>
</div>

)}