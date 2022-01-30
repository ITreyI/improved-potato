
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import { useState } from "react";
import "./Guia.css"

export default function Guia() {
    let navigate = useNavigate()

    return (
        <div >
            <h3>Guia</h3>
            <ul >
                
                <li>O jogador 1 deve utilizar as setas para mover o PacMan</li>
                <li >O objetivo é que o PacMan coma o maior número de bits (8) sem ser apanhado pelos professores</li>
                <li>Quando come o bit 0 três vezes perde</li>
                <li>Quando o PacMan chega aos 8 números 1 comidos, completa 1 byte e ganha!</li>
                <li>O PacMan ganha 100 pontos por cada 0 e 500 pontos por cada </li>
            </ul>
            
         <button onClick={() => navigate(`/menu2`)}>X</button>


        </div>
        //Nao faz navigate.
        //

    )

}

//máximo 80 caracteres por linha
//letra tipo open sans