
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Guia() {
let navigate = useNavigate()

    return (
        <div>
            <h3>Guia</h3>
            <ul>
                <li>Podem jogar 2 pessoas</li>
                <li>O jogador 1 deve utilizar as setas para mover o PacMan</li>
                <li>O jogador 2 deve utilizar as teclas ASWD (esquerda-baixo-cima-direita)</li>
                <li>O objetivo é que o PacMan coma o maior  número de bits (1) sem ser apanhado pelos professores</li>
                <li>Quando come o bit 0 três vezes perde</li>
            </ul>
            <h3>Guia</h3>
            <ul>
                <li>Quando o PacMan chega aos 8 números 1 comidos, completa 1 byte e passa para o nível seguinte</li>
                <li>A cada nível, a dificuldade aumenta em termos de tempo e de bytes a serem comidos</li>
                <li>O jogador pode selecionar o Modo Infinito (não tem níveis) ou o Modo Arcada (pode escolher um nível de 1 a 10)</li>
            </ul>
            <button onClick={<img onClick={() => navigate(`/menu2`)} src={"/pubIcone-X-Png-1024x1024.png"}></img>}>X</button>
        </div>

    )

}