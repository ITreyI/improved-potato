import "./Interface2.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from 'react';

export default function Interface2({user,setUser}) { //{user,setUser}
    const [som, setSom] = useState(false)
    const [audio, setAudio] = useState(new Audio("/sounds/pacman_beginning.wav"))
    //const [user,setUser] = useState("") //id
    const [score,setScore] = useState()
    let player = useRef(null)  
    let navigate = useNavigate();

  //const [name, setName] = useState("")
    const handleClick= async ()=> {
              const url = '/user'
        const response = await fetch(url)
       const json = await response.json()
      }
        return (
      <form
          onSubmit={(e) => {
              e.preventDefault()
              console.log(user)
          }}
          onReset={() => {
              setUser("")
          }}
      >
          <label>
              Nome:
              <input
                  type="text"
                  name="name"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  placeholder="Insira o seu nome de jogador ..." 
                   id="tag"
                   class="caixa" />
          </label>
          <div className="tudo">
           <h1 class= "main">BYTES4FUN</h1>
          <button  className="entrar-pushable" role="button" onClick={() => handleClick(navigate(`/Menu2`))} type="button">Button</button>
           <span className="entrar-shadow"></span>
                <span className="entrar-edge"></span>
                <span className="entrar-front text">
                    Entrar
                </span>
           
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          
         
        <a onClick={() => !som ? audio.play() : audio.pause()} >{<img onClick={() => setSom((s) => !s)} src={som ? "https://img.icons8.com/ios-filled/50/000000/room-sound.png" : "https://img.icons8.com/ios-filled/50/000000/mute--v1.png"}></img>}</a>
        <audio ref={player} src="/sounds/pacman_beginning.wav"></audio>
    
       
  
  </div>
       </form>     
  )}

  function EnviaUserBackend(setUser){
    return async function (user) {
        const res = await fetch("/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user
            })
        })
        const resJson = await res.json()
        console.log(resJson)
        setUser(resJson.user)
    }

  }
