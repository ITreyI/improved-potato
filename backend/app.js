
const express = require('express')
const app = express()
const port = process.env.PORT ?? 3000
app.use(express.json())
app.listen(port, () => console.log(`À escuta em http://localhost:${port}`))

 


    app.post("/user",(req,res) => {
           const id = req.body
        const url = 'https://jsonplaceholder.typicode.com/todos/1'
        const response = await fetch(url)
       const json = await response.json()
    }

    app.get("/user",(req,res) => {
        res.send(`Hello, ${req.params.name}`)
    })

    app.get("/user/:id",(req,res) => {

    })
  



//state
//fetch
//ligar a um endpoint
//endpoint guarda na base de dados
