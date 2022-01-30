
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import { useState } from "react";
import "./Guia.css"

export default function Guia() {
    let navigate = useNavigate()

    return (
        <div >
            <h3>Guia</h3>
            
            <div>
            <p>Our ghosts are: Fernando, Eloisa and Rafael! </p>
            <img src={"/FerF2.png"} /> 
            <img src={"/EliosaF3.png"} /> 
            <img src={"/RafaF3.png"} /> 
            </div>
  <ul >
           
                
                <li>Player must use keyboard arrows to move PacMan;</li>
                <li >The main goal is to get as much binary code (0 and 1) without getting caught by teachers;</li>
                <li>Each code (either 0 or 1) is equal to 100 points - that you can see on the left of the game board; </li>
                <li>When PacMan is caught, the game is over;</li>
                <li>But when PacMan eats all of the binary code, there's a winner!</li>
               

            </ul>
           
            
         <button onClick={() => navigate(`/jogo`)}>X</button>


        </div>
        //Nao faz navigate.
        //

    )

}

//máximo 80 caracteres por linha
//letra tipo open sans