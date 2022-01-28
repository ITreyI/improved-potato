import './Menu2Test.css'
import { useNavigate } from "react-router-dom";

export default function Menu2() {
    let navigate = useNavigate()
    return (
        <div id="allthethings">
        <div id="left"></div>
        <div id="single" onClick={() => navigate(`/Jogo`)}><p>SINGLE PLAYER</p></div>
        <div id="multiplayer"><p>MULTIPLAYER</p></div>
        <div id="options"><p>OPTIONS</p></div>
        <div id="credits" onClick={() => navigate(`/Guia`)}><p>GUIA</p></div>
        <div id="right"></div>
        <div id="exit"></div>
        <div id="circle"></div>
    </div>)
}

