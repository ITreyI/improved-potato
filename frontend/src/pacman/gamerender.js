import { useEffect, useRef } from "react"
import Mapa from "./mapa"
import './jogo.css'


export default function GameRender() {
    const jogo = useRef()
    useEffect(() => {


        const tamanho = 32;
        const velocidade = 1;

        const canvas = jogo.current
        const contexto = canvas.getContext('2d');
        const mapa = new Mapa(tamanho);
        const aluno = mapa.getAluno(velocidade)
        const profs = mapa.getProfs(velocidade);



        // contexto.beginPath();
        // contexto.arc(100, 75, 50, 0, 2 * Math.PI);
        // contexto.stroke();


        function gameLoop() {
            mapa.draw(contexto);
            aluno.draw(contexto)
            profs.forEach(prof => prof.draw(contexto))
        }

        mapa.setCanvasTamanho(canvas);

        setInterval(gameLoop, 1000 / 75)

    }, [])

    return (<div><canvas ref={jogo}></canvas></div >)

}