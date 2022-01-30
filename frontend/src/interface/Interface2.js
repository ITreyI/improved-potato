import "./Interface2.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from 'react';

export default function Interface2({ user, setUser }) { //{user,setUser}
    const [som, setSom] = useState(false)
    // const [id, setId] = useState("")
    let player = useRef(null)
    let navigate = useNavigate();
    //let playername = document.getElementById('txtPlayerName').value



    return (

        <div>
            <div >
                <h1 className="main">BYTES4FUN</h1>
                <form method="POST" action="/jogo">

                    <input placeholder="Insira o seu nome de jogador ..." type="text" name="user_input" className="caixa" id="user_input"></input>


                    <button type="submit" className="entrar-pushable" role="button">
                        <span className="entrar-shadow"></span>
                        <span className="entrar-edge"></span>
                        <span className="entrar-front text">
                            Entrar
                        </span>
                    </button>
                </form>
            </div>


        </div>
    )
}

 //onClick={() => navigate(`/Menu2`)}
