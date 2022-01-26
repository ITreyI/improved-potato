import './Interface1.css'
import { useNavigate } from "react-router-dom";
export default function Homepage(){
   
    let navigate = useNavigate();
    return( 
    <div>
        <img src="https://img.icons8.com/ios-filled/50/000000/room-sound.png"></img>
        <img src="https://img.icons8.com/ios-filled/50/000000/mute--v1.png"/>
        <audio id="player" src="C:\Users\anari\Documents\GitHub\improved-potato\frontend\public\sounds\pacman_beginning.wav"></audio>
    <div>
         <a onclick="document.getElementById('player').play()"><i ></i></a>
     </div>
    <h1>BYTES4FUN</h1>
    <button onClick= {() => navigate(`/interface2`)}>Começar</button>
</div>

)}