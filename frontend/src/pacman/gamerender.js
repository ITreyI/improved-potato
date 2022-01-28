import { useEffect, useRef } from "react"
import { useState } from "react"
import Mapa from "./mapa"
import './jogo.css'


export default function GameRender() {
    const [som, setSom] = useState(false)
    const [audio, setAudio] = useState(new Audio("/sounds/pacman_beginning.wav"))
    let player = useRef(null)
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
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 8, 4, 0, 0, 0, 0, 1],
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
            desenharScore();
            aluno.draw(contexto, pause(), profs)
            profs.forEach(prof => prof.draw(contexto, pause(), aluno))
            verificarGameOver();
            verificarVitoria();
            console.log(aluno.score)

        }
        function desenharScore() {
            contexto.font = "16 px Arial";
            contexto.fillStyle = "#0095DD";
            contexto.fillText = ("Score: " + aluno.score, 8, 20);
        }


        function verificarGameOver() {
            if (!gameOver) {
                gameOver = eGameOver();
                if (gameOver) {
                    gameOverSound.play()
                }
            }
        }

        function verificarVitoria() {
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
<<<<<<< HEAD
                //contexto.fillText(text, 10, canvas.height / 2)
                //fillText(text, 10, canvas.height / 2)
=======
                contexto.fillText(text, 10, canvas.height / 2)
>>>>>>> parent of a951b5f (profs diferente)
            }
        }


        mapa.setCanvasTamanho(canvas);

        setInterval(gameLoop, 1000 / 75)

    }, [])

    return (<div><canvas ref={jogo}></canvas>


        <audio ref={player} src="/sounds/pacman_beginning.wav"></audio>
        <div>
            <a onClick={() => som ? audio.play() : audio.pause()} >{<img onClick={() => setSom((s) => !s)} src={som ? "https://img.icons8.com/ios-filled/50/000000/room-sound.png" : "https://img.icons8.com/ios-filled/50/000000/mute--v1.png"}></img>}</a>

        </div></div >)

}