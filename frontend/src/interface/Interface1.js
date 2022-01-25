import './Interface1.css'
import { useNavigate } from "react-router-dom";
export default function Homepage(){
    let navigate = useNavigate();
    return(
        <div>
    <h1>BYTES4FUN</h1>
    <button onClick= {() => navigate(`/jogo`)}>Começar</button>
</div>

)}