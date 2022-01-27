import "./Menu1.css"
import { useState } from "react"
export default function Menu() {
      const [som, setSom] = useState(true)
      const [modo, setModo] = useState(true)
     return (

        
        <div>
            
        <img onClick= {() => setSom( (s) => !s)} src={som ? "https://img.icons8.com/ios-filled/50/000000/room-sound.png" : "https://img.icons8.com/ios-filled/50/000000/mute--v1.png" }></img>
        
        
        <button class="container" >Convidar</button>
       
        <button class="container" >Guia</button> 
        <button class="container" >Modo Arcada</button>
        <button onClick= {() => setModo( (s) => !s)} />
        
    </div>
    )
}