import './Menu2Test.css'
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
export default function Menu2() {
    let navigate = useNavigate()
    return (
        <div>
        <h1>BYTES4FUN</h1>
        <div id="allthethings">
        <div id="left"></div>
        <button id="single" onClick={() => navigate(`/Jogo`)}><p>SINGLE PLAYER</p></button>
        <div id="multiplayer" onClick={() => navigate(`/Contador`)}><p>JOGO 1</p></div>
        <button id="credits" onClick={() => navigate(`/Guia`)}><p>GUIA</p></button>
        <div id="right"></div>
        <div id="exit"></div>
        <div id="circle"></div>
    </div></div>)
}

