import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';


export default function Contador(){     
 const [som, setSom] = useState(true)
 let player = useRef(null) 
let navigate = useNavigate();
return(
    <div>
    
    <h1>3, 2, 1...</h1>
   
</div>
)
}
