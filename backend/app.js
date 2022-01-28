const express = require('express')
const { guardarScore } = require('./db')
const app = express()
const port = process.env.PORT ?? 3001
app.use(express.json())

app.post("/user", async (req, res) => { //interface2
    const sessions = await readAllSessions()
    const token = req.header("authorization");

    if (token === undefined) {
        res.status(401).json({ message: userError.tokenNaoRecebido })
    }

    const session = sessions.find(s => s.token.toString() === token);

    if (!session) {
        res.status(403).json({ message: userError.tokenError })
    }

    else {
        const user = sessions.find(s => s.token.toString() === token).user
        res.status(200).json({
            _id: token
        })
    }
})
//gamereder.js
//score
app.get("/user/:score", async (req, res) => {
    const score = await AssociaUserAoScore() // este await é q faz a asociação do fetch através da função noutros ficheiros?

    const { user, score } = req.params

    const token = req.header("authorization");

    if (token === undefined) {
        res.status(401).json({ message: userError.tokenNaoRecebido })
    }

    const score = score.find(s => s.token.toString() === token);

    if (!session) {
        res.status(403).json({ message: userError.tokenError })
    }

    else {
        const user = score.find(s => s.token.toString() === token).user
        res.status(200).json({
            sameUser: token === id
        })
    }

})
//atualizar o score
app.patch("/user/:score", (req,res)=> {
    const {user} = req.body;
    const {score}= req.params;
if(user && score){
    res.status(200).json({
        user: score
    })
}
})

//para obter todos os scores - falta o score ou leaderboard no gamerender
app.get("/score/:score",(req,res) => {
    const {score} = req.params;
    if(score[0] > 500){ //500 é o numero maximo de pontos no nivel
        res.status(200).json({Highscore})

    }
})

app.post("/score",(req,res) => {
    const {score,user} = req.body;
    guardarScore(user,score)
})

 






app.listen(port, () => console.log(`À escuta em http://localhost:${port}`))


//state
//fetch
//ligar a um endpoint
//endpoint guarda na base de dados
