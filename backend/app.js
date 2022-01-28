
const express = require('express')
const app = express()
const port = process.env.PORT ?? 3001
app.use(express.json())
app.listen(port, () => console.log(`À escuta em http://localhost:${port}`))


app.get("/user", (req, res) => {

})



//state
//fetch
//ligar a um endpoint
//endpoint guarda na base de dados
