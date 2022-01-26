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

        let gameOver = false;
        let vitoria = false;

        const gameOverSound = new Audio("/")
        const vitoriaSound = new Audio("/")




        // contexto.beginPath();
        // contexto.arc(100, 75, 50, 0, 2 * Math.PI);
        // contexto.stroke();


        function gameLoop() {
            mapa.draw(contexto);
            aluno.draw(contexto, pause())
            profs.forEach(prof => prof.draw(contexto, pause(), aluno))
            verificarGameOver();
        }

        function verificarGameOver() {
            if (!gameOver) {
                gameOver = eGameOver();
                if (gameOver) {
                    gameOverSound.play()
                }
            }
        }

        function eGameOver() {
            return profs.some(e => !aluno.boostActivo && e.colidiuCom(aluno))
        }

        function pause() {
            return !aluno.primeiroMovimento || gameOver;
        }

        mapa.setCanvasTamanho(canvas);

        setInterval(gameLoop, 1000 / 75)

    }, [])

    return (<div><canvas ref={jogo}></canvas></div >)

}