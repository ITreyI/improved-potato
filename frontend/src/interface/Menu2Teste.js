import './Menu2Test.css'
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
export default function Menu2() {
    let navigate = useNavigate()
    return (
        <div id="allthethings">
        <div id="left"></div>
        <button id="single" onClick={() => navigate(`/Jogo`)}><p>SINGLE PLAYER</p></button>
        <div id="multiplayer"><p>MULTIPLAYER</p></div>
        <div id="options"><p>OPTIONS</p></div>
        <button id="credits" onClick={() => navigate(`/Guia`)}><p>GUIA</p></button>
        <div id="right"></div>
        <div id="exit"></div>
        <div id="circle"></div>
    </div>)
}

