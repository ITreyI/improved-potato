import { useEffect, useRef, useState } from "react"
import Mapa from "./mapa"
import './jogo.css'


export default function GameRender({ user }) {
    const [som, setSom] = useState(false)
    const [audio, setAudio] = useState(new Audio("/sounds/pacman_beginning.wav"))

    //const SKORE= EnviaScoreBackend()
    let player = useRef(null)
    const jogo = useRef()
    const [pontos, setPontos] = useState()


    useEffect(() => {


        const tamanho = 32;
        const velocidade = 1;

        const canvas = jogo.current
        const contexto = canvas.getContext('2d');
        const mapaDoNivel1 = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 8, 4, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
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
        console.log(pontos)

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
            setScore();


        }
        function setScore() {
            const pontos = aluno.score
            return pontos

        }
        function desenharScore() {
            contexto.font = "16 px Arial";
            contexto.fillStyle = "#0095DD";
            //contexto.fillText = ("Score: " + aluno.score, 8, 20);
        }


        function verificarGameOver() {
            if (!gameOver) {
                gameOver = eGameOver();
                if (gameOver) {
                    EnviaScoreBackend()

                    //gameOverSound.play()
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
               // contexto.fillText(text, 10, 10)
                //fillText(text, 10, canvas.height / 2)
            }
        }


        mapa.setCanvasTamanho(canvas);

        setInterval(gameLoop, 1000 / 75)

    }, [])




    return (<div><canvas className="quadroJogo" ref={jogo}></canvas>


        <audio ref={player} src="/sounds/pacman_beginning.wav"></audio>
        <div>
        
            <div>{user}</div>
        </div></div >)

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
    const resJson = await res.json({score})
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
