
const express = require('express')
const app = express()
const port = process.env.PORT ?? 3000
app.use(express.json())
app.listen(port, () => console.log(`À escuta em http://localhost:${port}`))

 


    app.post("/user",(req,res) => {
        const id = req.body
        
    )}

    app.get("/user",(req,res) => {
        
    })

    app.get("/user/:id",(req,res) => {

    })
  



//state
//fetch
//ligar a um endpoint
//endpoint guarda na base de dados
