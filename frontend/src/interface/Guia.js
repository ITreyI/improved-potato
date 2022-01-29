
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import { useState } from "react";

export default function Guia() {
    let navigate = useNavigate()

    return (
        <div id="menu">
            <h3>Guia</h3>
            <ul id="menu">
                <li id="menu" className="texto">O jogo é jogado no Single Player</li>
                <li className="texto" >O jogador 1 deve utilizar as setas para mover o PacMan</li>
                <li className="texto">O jogador 2 deve utilizar as teclas ASWD (esquerda-baixo-cima-direita)</li>
                <li className="texto">O objetivo é que o PacMan coma o maior  número de bits (8) sem ser apanhado pelos professores</li>
                <li className="texto">Quando come o bit 0 três vezes perde</li>
                <li className="texto">Quando o PacMan chega aos 8 números 1 comidos, completa 1 byte e passa para o nível seguinte</li>
                <li className="texto">A cada nível, a dificuldade aumenta em termos de tempo e de bytes a serem comidos</li>
                <li className="texto">O jogador pode selecionar o Modo Infinito (não tem níveis) ou o Modo Arcada (pode escolher um nível de 1 a 10)</li>
            </ul>
            
         <button onClick={() => navigate(`/menu2`)}>X</button>


        </div>
        //Nao faz navigate.
        //

    )

}

//máximo 80 caracteres por linha
//letra tipo open sans