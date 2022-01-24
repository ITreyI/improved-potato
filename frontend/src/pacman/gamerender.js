import { useEffect, useRef } from "react"
import Mapa from "./mapa"
import './jogo.css'


export default function GameRender() {
    const jogo = useRef()
    useEffect(() => {


        const tamanho = 32;
        const canvas = jogo.current
        const contexto = canvas.getContext('2d');
        const mapa = new Mapa(tamanho);
        contexto.beginPath();
        contexto.arc(100, 75, 50, 0, 2 * Math.PI);
        contexto.stroke();

        function gameLoop() {
            mapa.draw(contexto);
        }

        mapa.setCanvasTamanho(canvas);

        setInterval(gameLoop, 1000 / 75)

    }, [])

    return (<div><canvas ref={jogo}></canvas></div >)

}