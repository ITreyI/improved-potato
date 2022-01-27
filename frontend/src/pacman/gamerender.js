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
        const mapaDoNivel1 = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]
        const mapaDoNivel2 = [[1, 1, 1][1, 5, 1]]
        const mapa = new Mapa(tamanho, mapaDoNivel1);

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
            desenharFinal();
            aluno.draw(contexto, pause(), profs)
            profs.forEach(prof => prof.draw(contexto, pause(), aluno))
            verificarGameOver();
            veriicarVitoria();
        }

        function verificarGameOver() {
            if (!gameOver) {
                gameOver = eGameOver();
                if (gameOver) {
                    gameOverSound.play()
                }
            }
        }

        function veriicarVitoria() {
            if (!vitoria) {
                vitoria = mapa.ganhou();
                if (vitoria) {
                    //vitoriaSound.play()
                }
            }
        }

        function eGameOver() {
            return profs.some(e => !aluno.boostActivo && e.colidiuCom(aluno))
        }

        function pause() {
            return !aluno.primeiroMovimento || gameOver || vitoria;
        }
        function desenharFinal() {
            if (gameOver || vitoria) {
                let text = "Vitória";
                if (gameOver) {
                    text = "Perdeu";

                }
                contexto.fillStyle = "black";
                contexto.fillRect(0, canvas.height / 3.2, canvas.width, 80);

                contexto.font = "80 px comic sans";
                const gradient = contexto.createLinearGradient(0, 0, canvas.width, 0)
                gradient.addColorStop('0', 'magenta')
                gradient.addColorStop('0.5', 'blue')
                gradient.addColorStop('1.0', 'red')

                contexto.fillStyle = gradient;
                contexto.fillText(text, 10, canvas.height / 2)
            }
        }


        mapa.setCanvasTamanho(canvas);

        setInterval(gameLoop, 1000 / 75)

    }, [])

    return (<div><canvas ref={jogo}></canvas></div >)

}