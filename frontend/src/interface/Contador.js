import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import "./contador.css"


export default function Contador() {
    const [som, setSom] = useState(true)
    let player = useRef(null)
    const navigate = useNavigate();
    useEffect(
    
        () => {
            setTimeout(function() {
        navigate("/jogo")
      }, 3000);
        }, []
    )

    
    


    return (<div>
        <div className="wrapper">
            <span className="circle circle-1"></span>
            <span className="circle circle-2"></span>
            <span className="circle circle-3"></span>
            <span className="circle circle-4"></span>
            <span className="circle circle-5"></span>
            <span className="circle circle-6"></span>
            <span className="circle circle-7"></span>
            <span className="circle circle-8"></span>

        </div>


    </div>

    )
}
