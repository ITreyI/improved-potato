import { useEffect, useRef, useState } from "react"
import Mapa from "./mapa"
import './jogo.css'
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function GameRender({ user }) {
    const [som, setSom] = useState(true)
    const [audio, setAudio] = useState(new Audio("/game.mp3"))
    const [pontos, setPontos] = useState(0)

    //const SKORE= EnviaScoreBackend()
    let player = useRef(null)
    const jogo = useRef()

    useEffect(() => {


        const tamanho = 32; //tamanho de pixeis que cada elemento ocupa
        const velocidade = 1; //velocidade do jogo
        const canvas = jogo.current //renderização do jogo
        const contexto = canvas.getContext('2d'); //desenha no canvas em 2D
        const mapaDoNivel1 = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
            [1, 3, 3, 1, 3, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 3, 1, 3, 3, 1],
            [1, 3, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1],
            [1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1],
            [1, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 9, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 1],
            [1, 3, 3, 1, 3, 3, 1, 3, 3, 1, 8, 3, 4, 1, 3, 3, 1, 3, 3, 1, 3, 3, 1],
            [1, 3, 3, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 1, 3, 3, 1, 3, 3, 1, 3, 3, 1],
            [1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1],
            [1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1],
            [1, 3, 3, 7, 3, 3, 1, 3, 1, 1, 3, 1, 3, 1, 1, 3, 1, 3, 3, 7, 3, 3, 1],
            [1, 3, 3, 3, 3, 3, 1, 3, 1, 1, 0, 1, 0, 1, 1, 3, 1, 3, 3, 3, 3, 3, 1],
            [1, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 1],
            [1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1],
            [1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1],
            [1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 1, 5, 1, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1],
            [1, 3, 3, 1, 3, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 3, 1, 3, 3, 1],
            [1, 3, 3, 3, 3, 3, 3, 3, 0, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ] //mapa do nível arcade


        const mapaDoNivel2 = [[1, 1, 1][1, 5, 1]] //mapa nível 2 teste
        const mapa = new Mapa(tamanho, mapaDoNivel1); //fecho do mapa

        const aluno = mapa.getAluno(velocidade) //
        const profs = mapa.getProfs(velocidade);

        let gameOver = false;
        let vitoria = false;



        const gameOverSound = new Audio("/Death.wav")
        const vitoriaSound = new Audio("/win.wav")

        // contexto.beginPath();
        // contexto.arc(100, 75, 50, 0, 2 * Math.PI);
        // contexto.stroke();


        function gameLoop() {
            mapa.draw(contexto);
            desenharFinal();
            aluno.draw(contexto, pause(), profs)
            profs.forEach(prof => prof.draw(contexto, pause(), aluno))
            verificarGameOver();
            verificarVitoria();
            setPontos();
        }



        function verificarGameOver() {
            if (!gameOver) {
                gameOver = eGameOver();
                if (gameOver) {
                    EnviaScoreBackend()
                    gameOverSound.play()
                }
            }
        }

        setPontos(pontos, aluno.setScore())

        function verificarVitoria() {
            if (!vitoria) {
                vitoria = mapa.ganhou();
                if (vitoria) {
                    vitoriaSound.play()
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
                // contexto.fillText(text, 10, 10)
                //fillText(text, 10, canvas.height / 2)
            }
        }



        mapa.setCanvasTamanho(canvas);

        setInterval(gameLoop, 1000 / 75)

    }, [])



    let navigate = useNavigate();
    return (

        <div>
            <h1>BYTES4FUN</h1>
            <div>
                <a onClick={() => som ? audio.play() : audio.pause()} >{<img onClick={() => setSom((s) => !s)} src={som ? "https://img.icons8.com/ios-filled/50/000000/mute--v1.png" : "https://img.icons8.com/ios-filled/50/000000/room-sound.png"}></img>}</a>
            </div>
            <div className="score">Score
                <div>{pontos}</div>
            </div>

            <canvas ref={jogo}></canvas>
        </div>


    )
}


async function EnviaScoreBackend(user, score) {

    console.log("EnviaScoreBackend")
    const res = await fetch("/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            user, score
        })
    })
    const resJson = await res.json({ score })
    console.log(resJson)

}
/* function AssociaUserAoScore(user, setScore) { // ou user,score?
    return async function (user, score) {
        const res = await fetch("/user/:score", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: score
            })
        })
        const resJson = await res.json()
        console.log(res.json)
        user(resJson.user)
        setScore(resJson.score)

    }
}
*/
function AtualizaScore(setScore, user) {
    return async function (score) {
        const res = await fetch("/user/:score", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: score
            })
        })
        const resJson = await res.json()
        console.log(res.json)
        setScore(resJson.score)
        user(resJson.user)
    }
}


function TodosOsScores(score) {
    return async function (score) {
        const res = await fetch("/score", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            params: JSON.stringify({
                score
            })
        })
        const resJson = await res.json()
        console.log(res.json)
        score(resJson.score)

    }
}

//function EnviaScoreBackend -- faz um pedido para enviar o score do jogo atual para o backend
//function AssociaUserAoScore -- faz um pedido para que o user seja asscoiado a um score durante o jogo
//function AtualizaScore -- faz ujm pedido para o backend atualizar o score do jogador

//function TodosOsScores -- faz um pedido para a leaderboard do jogo ?? 
//criar um parametro para incrementar para quando comemos   0 ou fantasmas associar o score q ta no interface do jogo